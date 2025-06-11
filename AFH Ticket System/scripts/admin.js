const mobileScreen = window.matchMedia("(max-width: 990px)");

document.addEventListener("DOMContentLoaded", function() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location = "../index.html";
    }
});

const requestsRef = firebase.database().ref('requests');
const usersRef = firebase.database().ref('users');
const archiveRef = firebase.database().ref('archive');
const leaderboardDiv = document.querySelector('.container');

const noTickets = document.getElementById('no-tickets')
const pendingDiv = document.getElementById('pending');

function updateLeaderboard() {
    usersRef.on('value', (snapshot) => {
        const users = [];
        let studioContributions = null;

        snapshot.forEach((childSnapshot) => {
            const userData = childSnapshot.val();
            if (!userData.isAdmin) {
                const userObj = {
                    name: userData.username || 'Unknown',
                    tokens: userData.tokens || 0,
                    password: userData.password || 'Undefined'
                };
                if (userObj.name === "CREATIVE TECHNOLOGY") {
                    studioContributions = userObj;
                } else {
                    users.push(userObj);
                }
            }
        });

        users.sort((a, b) => b.tokens - a.tokens);
        leaderboardDiv.innerHTML = '';

        if (studioContributions) {
            const studioDiv = document.createElement('div');
            studioDiv.className = 'card pool';
            studioDiv.innerHTML = `
                <div class='card-body'>
                    <span>
                        <span class="fas fa-gear" onclick="logUserInfo('${studioContributions.name}', ${studioContributions.tokens})"></span>
                        <span>${studioContributions.name.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())}</span>
                    </span>
                    <span>${studioContributions.tokens} Tokens</span>
                </div>
            `;
            leaderboardDiv.appendChild(studioDiv);
        }

        users.forEach(user => {
            const accountDiv = document.createElement('div');
            accountDiv.className = 'card';
            accountDiv.innerHTML = `
                <div class='card-body'>
                    <span>
                        <span class="fas fa-gear" onclick="logUserInfo('${user.name}', ${user.tokens}, '${user.password.replace(/'/g, "\\'")}')"></span>
                        <span>${user.name.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())}</span>
                    </span>
                    <span>${user.tokens} Tokens</span>
                </div>
            `;
            leaderboardDiv.appendChild(accountDiv);
        });
    });
}
updateLeaderboard();

function createRequestContainer(requestData, requestId) {

    noTickets.style.display = 'none'
    pendingDiv.style.display = 'block'

    if (document.getElementById(requestId)) {
        return;
    }

    const templateContainer = document.getElementById('template-container');
    const newContainer = templateContainer.cloneNode(true);
    newContainer.id = requestId;

    const type = requestData.amount > 0 ? 'requesting' : 'redeeming';

    newContainer.style.display = 'flex';

    const requestDetails = `${requestData.username.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())} is ${type} ${Math.abs(requestData.amount)} Tokens for "${requestData.reason}".`;
    newContainer.querySelector('.request-details').textContent = requestDetails;

    newContainer.querySelector('#deny').addEventListener('click', () => {
        archiveRequest("denied", requestData); 
        deleteRequest(requestId);
        checkEmpty();
    });
    
    newContainer.querySelector('#approve').addEventListener('click', () => {
        archiveRequest("approved", requestData);
        approveRequest(requestData.username, requestData.amount, requestId);
        checkEmpty();
    });    

    pendingDiv.appendChild(newContainer);
}

function createArchiveContainer(requestData, requestId) {
    const auditContainer = document.getElementById('audit-container');
    const template = auditContainer.querySelector('.archive-template');
    if (!template) return;

    const newContainer = template.cloneNode(true);
    newContainer.id = requestId;
    newContainer.classList.remove('archive-template');
    newContainer.style.display = 'flex';

    const requestDetails = `${requestData.username.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())}'s ticket to ${requestData.type} ${Math.abs(requestData.amount)} Tokens for "${requestData.reason}" is ${requestData.action} on ${requestData.timestamp}.`;
    newContainer.querySelector('.request-details').textContent = requestDetails;

    auditContainer.appendChild(newContainer);
}

function archiveRequest(action, requestData) {
    const date = new Date();
    const type = requestData.amount > 0 ? 'request' : 'redeem';
    const archivedDetails = {
        username: requestData.username,
        amount: requestData.amount,
        reason: requestData.reason,
        type: type,
        action: action,
        timestamp: date.toLocaleDateString()
    };

    archiveRef.push(archivedDetails);
}

function deleteRequest(requestId) {
    requestsRef.child(requestId).remove()
        .then(() => {
            const requestContainer = document.getElementById(requestId);
            if (requestContainer) {
                requestContainer.remove();
            }
        });
}

function checkEmpty() {
    const requestDetails = document.querySelectorAll('#pending .request-details');
    const actualRequests = Array.from(requestDetails).filter(el => 
        el.closest('.card').style.display !== 'none' &&
        el.closest('.card').id !== 'template-container'
    );

    if (actualRequests.length === 1) {
        noTickets.style.display = "flex"
    }
}

function approveRequest(username, amount, requestId) {
    usersRef.orderByChild('username').equalTo(username).once('value', snapshot => {
        snapshot.forEach(userSnapshot => {
            const userKey = userSnapshot.key;
            const userData = userSnapshot.val();
            const currentTokens = userData.tokens || 0;
            const newTokens = currentTokens + (parseInt(amount, 10) || 0);

            usersRef.child(userKey).update({ tokens: newTokens })
                .then(() => {
                    deleteRequest(requestId);
                });
        });
    });
}

requestsRef.on('value', snapshot => {
    snapshot.forEach(childSnapshot => {
        const requestId = childSnapshot.key;
        const requestData = childSnapshot.val();
        createRequestContainer(requestData, requestId);
    });
});

archiveRef.on('value', snapshot => {
    const auditContainer = document.getElementById('audit-container');
    
    auditContainer.querySelectorAll('.card:not(.archive-template)').forEach(card => card.remove());

    const entries = [];
    snapshot.forEach(childSnapshot => {
        entries.push({
            id: childSnapshot.key,
            data: childSnapshot.val()
        });
    });

    for (let i = entries.length - 1; i >= 0; i--) {
        const { id, data } = entries[i];
        createArchiveContainer(data, id);
    }
});


function logUserInfo(name, tokens, password) {
    let cardName = document.getElementById('card-name');
    let cardPassword = document.getElementById('card-password');;
    let ban = document.getElementsByClassName('fa-ban')[0];
    let rotate = document.getElementsByClassName('fa-rotate-right')[0];

    if(name === 'CREATIVE TECHNOLOGY'){
        cardName.style.display = 'none';
        cardPassword.style.display = 'none';
        ban.style.display = 'none';
        rotate.style.display = 'flex';
    } else {
        cardName.style.display = 'block';
        cardPassword.style.display = 'block';
        ban.style.display = 'block';
        rotate.style.display = 'none';
    }

    $('.dashboard-app').removeClass('current');
    $('.user-panel').addClass('current');

    let currTitle = document.getElementById('curr-title');
    let currName = document.getElementById('curr-name');
    let currPassword = document.getElementById('curr-password');
    let currTokens = document.getElementById('curr-tokens');

    currTitle.innerHTML = name;
    currName.value = name;
    currPassword.value = password;
    currTokens.value = tokens;

    const username = currTitle.innerHTML;
    usersRef.orderByChild('username').equalTo(username).once('value', snapshot => {
        snapshot.forEach(userSnapshot => {
            const userKey = userSnapshot.key;
            adminActions(userKey)
        });
    });
}

function adminActions(key) {
    $('#reset').off('click');
    $('#kick').off('click');
    $('#cancel').off('click');
    $('#save').off('click');

    $('#reset').on('click', () => {
        resetTokens();
        resetPool();
        
        $('.user-panel').removeClass('current');
        $('.leaderboard-app').addClass('current');
    });

    $('#kick').on('click', () => {
        deleteUser(key);
    });

    $('#cancel').on('click', () => {
        $('.user-panel').removeClass('current');
        $('.leaderboard-app').addClass('current');
    });

    $('#save').on('click', () => {
        const updatedName = $('#curr-name').val().toUpperCase();
        const updatedPassword = $('#curr-password').val();
        const updatedTokens = parseInt($('#curr-tokens').val(), 10);
    
        if (!updatedName || !updatedPassword || isNaN(updatedTokens) || updatedTokens < 0) {
            return;
        }

        usersRef.orderByChild('username').equalTo(updatedName).once('value', snapshot => {
            const userExists = snapshot.exists();
            const isSameUser = snapshot.val() && Object.keys(snapshot.val())[0] === key;
    
            if (userExists && !isSameUser) {
                return;
            }

            updateUser(key, updatedName, updatedPassword, updatedTokens);
        });
    });    
}

function resetTokens() {
    fireBaseRef.child('users').once('value', snapshot => {
        if (snapshot.exists()) {
            snapshot.forEach(childSnapshot => {
                const userData = childSnapshot.val();
                const username = childSnapshot.key;

                if (userData.hasOwnProperty('tokens')) {
                    fireBaseRef.child('users').child(username).update({
                        tokens: 0
                    })
                }
            });
        }
    });
}

function resetPool() {
    fireBaseRef.child('users').once('value', snapshot => {
        if (snapshot.exists()) {
            snapshot.forEach(childSnapshot => {
                const userData = childSnapshot.val();
                const username = childSnapshot.key;

                if (userData.hasOwnProperty('isPooled')) {
                    fireBaseRef.child('users').child(username).update({
                        isPooled: false
                    })
                }
            });
        }
    });
}

function deleteUser(userKey) {
    usersRef.child(userKey).remove()
        .then(() => {
            $('.user-panel').removeClass('current');
            $('.leaderboard-app').addClass('current');
            updateLeaderboard();
        })
        .catch(error => {
            console.error(error);
        });
}

function updateUser(userKey, name, password, tokens) {
    let updateData = { username: name, tokens: tokens };

    if (password !== undefined && password !== 'undefined') {
        updateData.password = password;
    }

    usersRef.child(userKey).update(updateData)
        .then(() => {
            $('.user-panel').removeClass('current');
            $('.leaderboard-app').addClass('current');
        })
        .catch(console.error);
}

function changeActive(app) {
    $('.dashboard-nav-item').removeClass('active');
    $(`a[onclick="changeActive('${app}')"]`).addClass('active');
    $('.dashboard-app').removeClass('current');
    $(`.${app}`).addClass('current');
}

$(document).ready(function () {
    $(".dashboard-nav-dropdown-toggle").click(function () {
        $(this).closest(".dashboard-nav-dropdown")
            .toggleClass("show")
            .find(".dashboard-nav-dropdown")
            .removeClass("show");
        $(this).parent()
            .siblings()
            .removeClass("show");
    });
    $(".menu-toggle").click(function () {
        if (mobileScreen.matches) {
            $(".dashboard-nav").toggleClass("mobile-show");
        } else {
            $(".dashboard").toggleClass("dashboard-compact");
        }
    });
});