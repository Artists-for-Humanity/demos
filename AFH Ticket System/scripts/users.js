const mobileScreen = window.matchMedia("(max-width: 990px)");

document.addEventListener("DOMContentLoaded", function() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location = "../index.html";
    }
});

const usersRef = firebase.database().ref('users');
const requestsRef = firebase.database().ref('requests');
const leaderboardDiv = document.querySelector('.container');
const tokenRequestForm = document.getElementById('token-request');

function addRequest(amount, reason, username) {
    requestsRef.push({
        amount: amount,
        reason: reason,
        username: username 
    });
}

function updateLeaderboard() {
    usersRef.on('value', (snapshot) => {
        const users = [];
        let studioContributions = null;

        snapshot.forEach((childSnapshot) => {
            const userData = childSnapshot.val();
            if (!userData.isAdmin) {
                const userObj = {
                    name: userData.username || 'Unknown',
                    tokens: userData.tokens || 0
                };
                if (userObj.name === "CREATIVE TECHNOLOGY") {
                    studioContributions = userObj;
                } else {
                    users.push(userObj);
                }
            }
        });

        users.sort((a, b) => b.tokens - a.tokens);
        leaderboardDiv.innerHTML = ``;

        if (studioContributions) {
            const studioDiv = document.createElement('div');
            studioDiv.className = 'card pool';
            studioDiv.innerHTML = `
                <div class='card-body'>
                    <span>${studioContributions.name}</span>
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
                    <span>${user.name.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase())}</span>
                    <span>${user.tokens} Tokens</span>
                </div>
            `;
            leaderboardDiv.appendChild(accountDiv);
        });
    });
}
updateLeaderboard();

tokenRequestForm.querySelector('select[name="category"]').addEventListener('change', function () {
    const category = this.value;
    const amountInput = tokenRequestForm.querySelector('input[name="amount"]');
    const reasonInput = tokenRequestForm.querySelector('textarea[name="reason"]');
    const username = sessionStorage.getItem('username');

    if (category === "Contribute 50% to Studio") {
        usersRef.orderByChild('username').equalTo(username).once('value', (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                const user = Object.values(userData)[0];
                const userTokens = user.tokens || 0;
                const halfTokens = Math.ceil(userTokens / 2);

                amountInput.value = halfTokens;
                reasonInput.value = `Share 50% of your tokens to the studio. This is a one time use for each individual until an administrator approves otherwise.`;

                amountInput.setAttribute("disabled", true);
                reasonInput.setAttribute("disabled", true);

                amountInput.style.cursor = "not-allowed";
                reasonInput.style.cursor = "not-allowed";
            }
        });
    } else {
        amountInput.removeAttribute("disabled");
        reasonInput.removeAttribute("disabled");

        amountInput.style.cursor = "auto";
        reasonInput.style.cursor = "auto";

        amountInput.value = "";
        reasonInput.value = "";
    }
});

tokenRequestForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const category = tokenRequestForm.querySelector('select[name="category"]').value;
    let amount = parseInt(tokenRequestForm.querySelector('input[name="amount"]').value, 10);
    const reason = tokenRequestForm.querySelector('textarea[name="reason"]').value;
    const username = sessionStorage.getItem('username');

    if (category === 'Redeem Your Tokens') {
        amount *= -1;
    }

    if (category === 'Contribute 50% to Studio') {
        usersRef.orderByChild('username').equalTo(username).once('value', (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                const userKey = Object.keys(userData)[0];
                const user = userData[userKey];
                const userTokens = user.tokens || 0;
                const halfTokens = Math.ceil(userTokens / 2);
    
                if (halfTokens > 0 && !user.isPooled) {
                    usersRef.child(userKey).update({
                        tokens: userTokens - halfTokens,
                        isPooled: true
                    });

                    usersRef.orderByChild('username').equalTo('CREATIVE TECHNOLOGY').once('value', (studioSnapshot) => {
                        const studioData = studioSnapshot.val();
                        if (studioData) {
                            const studioKey = Object.keys(studioData)[0]; 
                            const studio = studioData[studioKey];
                            const studioTokens = studio.tokens || 0;
    
                            usersRef.child(studioKey).update({
                                tokens: studioTokens + halfTokens
                            });
                        }
                    });

                    tokenRequestForm.reset();
                    document.getElementById('submit').innerText = 'SUBMITTED';
                    setTimeout(() => {
                        document.getElementById('submit').innerText = 'Submit';
                    }, 1000);
                } else {
                    document.getElementById('submit').innerText = 'INVALID';
                    setTimeout(() => {
                        document.getElementById('submit').innerText = 'Submit';
                    }, 1000);
                }
            }
        });
    }
    
    if (category !== 'Contribute 50% to Studio') {
        usersRef.orderByChild('username').equalTo(username).once('value', (snapshot) => {
            const userData = snapshot.val();
            if (userData) {
                const user = Object.values(userData)[0];
                const currentTokens = user.tokens || 0;

                if (currentTokens + amount < 0) {
                    document.getElementById('submit').innerText = 'INVALID';
                    setTimeout(() => {
                        document.getElementById('submit').innerText = 'Submit';
                    }, 1000);
                } else {
                    addRequest(amount, reason, username);
                    tokenRequestForm.reset();
                    document.getElementById('submit').innerText = 'SUBMITTED';
                    setTimeout(() => {
                        document.getElementById('submit').innerText = 'Submit';
                    }, 1000);
                }
            }
        });
    }
});

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

    $('.dashboard-nav-item').on('click', function () {
        $('.dashboard-nav-item').removeClass('active');
        $(this).addClass('active');
        const index = $(this).index('.dashboard-nav-item');
        $('.dashboard-app').removeClass('current');
        $('.dashboard-app').eq(index).addClass('current');
    });
});
