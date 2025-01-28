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
firebase.initializeApp(firebaseConfig);

document.addEventListener("DOMContentLoaded", function() {
    const username = sessionStorage.getItem('username');
    if (!username) {
        window.location = "https://afhtokens.netlify.app/";
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

        snapshot.forEach((childSnapshot) => {
            const userData = childSnapshot.val();
            if (!userData.isAdmin) {
                users.push({
                    name: userData.username || 'Unknown',
                    tokens: userData.tokens || 0
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
                    <span>${user.name}</span>
                    <span>${user.tokens} Tokens</span>
                </div>
            `;
            leaderboardDiv.appendChild(accountDiv);
        });
    });
}
updateLeaderboard();

tokenRequestForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const category = tokenRequestForm.querySelector('select[name="category"]').value;
    let amount = parseInt(tokenRequestForm.querySelector('input[name="amount"]').value, 10);
    const reason = tokenRequestForm.querySelector('textarea[name="reason"]').value;
    const username = sessionStorage.getItem('username');

    if (category === 'Redeem Your Tokens') {
        amount *= -1;
    }

    if (username) {
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

function updateForm(element) {
    const amountText = element.querySelector('span[data-amount]').textContent.trim();
    const reason = element.querySelector('span[data-reason]').textContent.trim();
    const amount = parseInt(amountText, 10);
    const tokenRequestForm = document.getElementById('token_request');

    tokenRequestForm.querySelector('input[name="amount"]').value = amount || '';
    tokenRequestForm.querySelector('input[name="reason"]').value = reason;
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

    $('.dashboard-nav-item').on('click', function () {
        $('.dashboard-nav-item').removeClass('active');
        $(this).addClass('active');
        const index = $(this).index('.dashboard-nav-item');
        $('.dashboard-app').removeClass('current');
        $('.dashboard-app').eq(index).addClass('current');
    });
});