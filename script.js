// Firebase Config (Replace with your real config)
const firebaseConfig = {
  apiKey: "AIzaSyAETHe_FcNSrHUAqeIgGlLchjhEWI44u0k",
  authDomain: "aviatorbot-bcbdd.firebaseapp.com",
  projectId: "aviatorbot-bcbdd",
  storageBucket: "aviatorbot-bcbdd.firebasestorage.app",
  messagingSenderId: "116364075167",
  appId: "1:116364075167:web:6be73837f5b8710678c2aa"
};
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login function
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("splash-screen").style.display = "flex";

      setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("home-screen").style.display = "block";
      }, 4000);
    })
    .catch((error) => {
      document.getElementById("login-error").innerText = error.message;
    });
}

// Multiplier Random Generator
function generateRandom() {
  let random = (Math.random() * 10).toFixed(2) + "x";
  document.getElementById("multiplier").innerText = random;
}
