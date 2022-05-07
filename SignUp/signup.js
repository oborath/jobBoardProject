
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDgkxfJZsCv0OYojrDzjmY8YzjZWLRjAlg",
    authDomain: "job-board-55b1b.firebaseapp.com",
    databaseURL: "https://job-board-55b1b-default-rtdb.firebaseio.com",
    projectId: "job-board-55b1b",
    storageBucket: "job-board-55b1b.appspot.com",
    messagingSenderId: "830385285782",
    appId: "1:830385285782:web:4d5e52ebcc77343836f0b7",
    measurementId: "G-JR7EZSBGHS"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var con = firebase.database().ref('users');

document.getElementById("form").addEventListener("button", (e) => {
    e.preventDefault();


    var userInfo = con.push();
    userInfo.set({
        firstname: getId("name"),
        lastname: getId("lastname"),
        studentID: getId("StudentID"),
        DateofBirth: getId("Gender"),
        email: getId("email"),
        password: getId("password")

    });
    alert("sent");
    console.log("sent")
    document.getElementById("form").reset();
});

function getId(id) {
    return document.getElementById(id).value;
}