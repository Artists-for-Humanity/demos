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