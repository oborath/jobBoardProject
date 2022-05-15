// // // Your web app's Firebase configuration
// // // For Firebase JS SDK v7.20.0 and later,
// // // measurementId is optional

// const firebaseConfig = {
//     apiKey: "AIzaSyDrwtklTOMhsRRDaWo34o_saDizghVkRQ4",
//     authDomain: "job-board-2beab.firebaseapp.com",
//     databaseURL: "https://job-board-2beab-default-rtdb.firebaseio.com",
//     projectId: "job-board-2beab",
//     storageBucket: "job-board-2beab.appspot.com",
//     messagingSenderId: "631501036101",
//     appId: "1:631501036101:web:aa68add3b603d4de3c212c",
//     measurementId: "G-1C0Y8M7GL1"
// };

// firebase.initializeApp(firebaseConfig);
// const auth = firebase.auth();

// var messagesRef = firebase.database()
//     .ref('Collected Data');

// document.getElementById('form')
//     .addEventListener('submit', submitForm);

// function signUp() {
//     var email = document.getElementById("email");
//     var password = document.getElementById("password");
//     const promise = auth.createUserWithEmailAndPassword(
//         email.value,
//         password.value
//     );
//     promise.catch((e) => alert(e.message));
//     alert("SignUp Successfully");
// }

// function submitForm(e) {
//     e.preventDefault();
//     var firstName = getInputVal('firstName');
//     var lastName = getInputVal('lastName');
//     var email = getInputVal('email');
//     var studentid = getInputVal('studentid');
//     var dob = getInputVal('dob');
//     var gender = getInputVal('gender');
//     var password = getInputVal('password');
//     saveMessage(firstName, lastName, email, studentid, dob, gender, password);
//     signUp()
//     //after the user click the submit button, the form reset to blank by default 
//     document.getElementById('form').reset();
// }

// // Function to get get form values
// function getInputVal(id) {
//     return document.getElementById(id).value;
// }

// // Save message to firebase
// function saveMessage(firstName, lastName, email, studentid, dob, gender, password) {
//     var newMessageRef = messagesRef.push();
//     newMessageRef.set({
//         firstName: firstName,
//         lastName: lastName,
//         email: email,
//         studentid: studentid,
//         dob: dob,
//         gender: gender,
//         password: password,
//     });
// }

