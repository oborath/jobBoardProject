
//   // Import the functions you need from the SDKs you need
//     import {initializeApp} from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
//     import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.8.0/firebase-app.js";
//     // TODO: Add SDKs for Firebase products that you want to use
//     // https://firebase.google.com/docs/web/setup#available-libraries

//     // Your web app's Firebase configuration
//     // For Firebase JS SDK v7.20.0 and later, measurementId is optional
//     const firebaseConfig = {
//     apiKey: "AIzaSyDrwtklTOMhsRRDaWo34o_saDizghVkRQ4",
//     authDomain: "job-board-2beab.firebaseapp.com",
//     databaseURL: "https://job-board-2beab-default-rtdb.firebaseio.com",
//     projectId: "job-board-2beab",
//     storageBucket: "job-board-2beab.appspot.com",
//     messagingSenderId: "631501036101",
//     appId: "1:631501036101:web:aa68add3b603d4de3c212c",
//     measurementId: "G-1C0Y8M7GL1"
//   };

//     // Initialize Firebase
    

//     const app = initializeApp(firebaseConfig);
//     const db = getDatabase(app);

//     document.getElementById('form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
//         firstName: document.getElementById('firstName').value,
//         email: document.getElementById('lastName').value,
//         subject: document.getElementById('subject').value,
//         message: document.getElementById('message').value
//     });
 
//     alert('Your form is submitted');
//     document.getElementById('frmContact').reset();
// });


// document.getElementById("form").addEventListener("submit", (e) => {
//     e.preventDefault();


//     var userInfo = con.push();
//     userInfo.set({
//         firstname: getId("firstName"),
//         lastname: getId("lastName"),
//         studentID: getId("studentid"),
//         DateofBirth: getId("dob"),
//         Gender: getId("gender"),
//         email: getId("email"),
//         password: getId("password")

//     });
//     alert("sent");
//     console.log("sent")
//     document.getElementById("form").reset();
// });

// function getId(id) {
//     return document.getElementById(id).value;
// }
