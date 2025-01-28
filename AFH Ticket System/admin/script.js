const mobileScreen = window.matchMedia("(max-width: 990px )");
const firebaseConfig = {
    apiKey: "AIzaSyC8otkpzhGrZOY7RC-yalT1PTZYGfR1768",
    authDomain: "afh-ticket-system.firebaseapp.com",
    databaseURL: "https://afh-ticket-system-default-rtdb.firebaseio.com",
    projectId: "afh-ticket-system",
    storageBucket: "afh-ticket-system.appspot.com",
    messagingSenderId: "489849386389",
    appId: "1:489849386389:web:f6ca61d95e3c133df3f29c",
    measurementId: "G-X54EDPT1Q2"
};

document.addEventListener("DOMContentLoaded", function() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location = "https://afhtokens.netlify.app/";
    }
});

firebase.initializeApp(firebaseConfig);
const fireBaseRef = firebase.database().ref('requests');
const usersRef = firebase.database().ref('users');
const leaderboardDiv = document.querySelector('.container');
const pendingDiv = document.getElementById('pending');

function updateLeaderboard() {
    usersRef.on('value', (snapshot) => {
        const users = [];

        snapshot.forEach((childSnapshot) => {
            const userData = childSnapshot.val();
            if (!userData.isAdmin) {
                users.push({
                    name: userData.username || 'Unknown',
                    tokens: userData.tokens || 0,
                    password: userData.password || 'Undefined'
                });
            }
        });

        users.sort((a, b) => b.tokens - a.tokens);
        leaderboardDiv.innerHTML = '';
        users.forEach(user => {
            const accountDiv = document.createElement('div');
            accountDiv.className = 'card';
            accountDiv.innerHTML = `
                <div class='card-body'>
                    <span>
                        <span class="fas fa-gear" onclick="logUserInfo('${user.name}', ${user.tokens}, '${user.password.replace(/'/g, "\\'")}')"></span>
                        <span>${user.name}</span>
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
    if (document.getElementById(requestId)) {
        return;
    }

    const templateContainer = document.getElementById('template-container');
    const newContainer = templateContainer.cloneNode(true);
    newContainer.id = requestId;

    const type = requestData.amount > 0 ? 'requesting' : 'redeeming';

    newContainer.style.display = 'flex';

    const requestDetails = `${requestData.username} is ${type} ${Math.abs(requestData.amount)} Tokens for "${requestData.reason}".`;
    newContainer.querySelector('.request-details').textContent = requestDetails;

    newContainer.querySelector('#deny').addEventListener('click', () => {
        deleteRequest(requestId);
    });

    newContainer.querySelector('#approve').addEventListener('click', () => {
        approveRequest(requestData.username, requestData.amount, requestId);
    });

    pendingDiv.appendChild(newContainer);
}

function deleteRequest(requestId) {
    fireBaseRef.child(requestId).remove()
        .then(() => {
            const requestContainer = document.getElementById(requestId);
            if (requestContainer) {
                requestContainer.remove();
            }
        });
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

fireBaseRef.on('value', snapshot => {
    snapshot.forEach(childSnapshot => {
        const requestId = childSnapshot.key;
        const requestData = childSnapshot.val();
        createRequestContainer(requestData, requestId);
    });
});

function logUserInfo(name, tokens, password) {
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
    $('#kick').off('click');
    $('#cancel').off('click');
    $('#save').off('click');

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
    usersRef.child(userKey).update({
        username: name,
        password: password,
        tokens: tokens
    }).then(() => {
        $('.user-panel').removeClass('current');
        $('.leaderboard-app').addClass('current');
    }).catch(error => {
        console.error(error);
    });
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
