const firebase = require('firebase')
const firebaseConfig = {
    apiKey: "AIzaSyAuB4XjWbR77mZCCsnvNktP1WLgIM4ZpFo",
    authDomain: "saeindia-bitsindri.firebaseapp.com",
    projectId: "saeindia-bitsindri",
    storageBucket: "saeindia-bitsindri.appspot.com",
    messagingSenderId: "746245777139",
    appId: "1:746245777139:web:71c3f9f199ae4f156a3986",
    measurementId: "G-Y6M62WQFHW"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const User = db.collection("PostHolders");
module.exports = User;