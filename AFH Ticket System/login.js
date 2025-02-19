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
const fireBaseRef = firebase.database().ref(); 

const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const showLoginLink = document.getElementById('show-login');
const showRegisterLink = document.getElementById('show-register');

showLoginLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

showRegisterLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

registerForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let tokens = 0;
    let username = registerForm.querySelector('input[name="username"]').value.toUpperCase();
    const password = registerForm.querySelector('input[name="password"]').value;

    fireBaseRef.child('users').orderByChild('username').equalTo(username).once('value', snapshot => {
        if (snapshot.exists()) {
            document.getElementById("register").innerText = "INVALID";
            setTimeout(() => {
                document.getElementById("register").innerText = "REGISTER";
            }, 1000);
        } else {
            const isAdmin = username === 'ADMIN';
            fireBaseRef.child('users').push({
                username: username,
                password: password,
                tokens: tokens,
                isAdmin: isAdmin
            })
            .then(() => {
                window.location.href = 'users/index.html';
            })
            .catch((error) => {
                console.error('Error:', error.message);
            });
        }
    });
});

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    let username = loginForm.querySelector('input[name="username"]').value.toUpperCase();
    const password = loginForm.querySelector('input[name="password"]').value;

    fireBaseRef.child('users').orderByChild('username').equalTo(username).once('value', snapshot => {
        let userFound = false;

        snapshot.forEach(childSnapshot => {
            const userData = childSnapshot.val();
            if (userData.password === password) {
                userFound = true;
                sessionStorage.setItem('username', userData.username);
                if (userData.isAdmin) {
                    window.location.href = 'admin/index.html'; 
                } else {
                    window.location.href = 'users/index.html';
                }
            }
        });

        if (!userFound) {
            document.getElementById("login").innerText = "INVALID";
            setTimeout(() => {
                document.getElementById("login").innerText = "LOGIN";
            }, 1000);
        }
    });
});

function hideRules(){
    document.getElementById('rules').style.display = "none"
}

function showRules(){
    document.getElementById('rules').style.display = "flex"
}