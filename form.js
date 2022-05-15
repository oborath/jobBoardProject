// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later,
// measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyDrwtklTOMhsRRDaWo34o_saDizghVkRQ4",
    authDomain: "job-board-2beab.firebaseapp.com",
    databaseURL: "https://job-board-2beab-default-rtdb.firebaseio.com",
    projectId: "job-board-2beab",
    storageBucket: "job-board-2beab.appspot.com",
    messagingSenderId: "631501036101",
    appId: "1:631501036101:web:aa68add3b603d4de3c212c",
    measurementId: "G-1C0Y8M7GL1"
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
    