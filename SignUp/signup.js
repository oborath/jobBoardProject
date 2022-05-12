// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional

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

const auth = firebase.auth();

// Signup function
function signUp() {
var email = document.getElementById("email");
var password = document.getElementById("password");

const promise = auth.createUserWithEmailAndPassword(
    email.value,
    password.value
);
promise.catch((e) => alert(e.message));
alert("SignUp Successfully");
}

// SignIN function
function signIn() {
var email = document.getElementById("email");
var password = document.getElementById("password");
const promise = auth.signInWithEmailAndPassword(
            email.value, password.value);
promise.catch((e) => alert(e.message));
}

// SignOut
function signOut() {
auth.signOut();
alert("SignOut Successfully from System");
}

// Active user to homepage
firebase.auth().onAuthStateChanged((user) => {
if (user) {
    var email = user.email;
    alert("Active user " + email);
} else {
    alert("No Active user Found");
}
});
