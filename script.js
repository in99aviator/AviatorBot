// Firebase config (from Brijesh bhai)
const firebaseConfig = {
  apiKey: "AIzaSyAETHe_FcNSrHUAqeIgGlLchjhEWI44u0k",
  authDomain: "aviatorbot-bcbdd.firebaseapp.com",
  databaseURL: "https://aviatorbot-bcbdd-default-rtdb.firebaseio.com",
  projectId: "aviatorbot-bcbdd",
  storageBucket: "aviatorbot-bcbdd.firebasestorage.app",
  messagingSenderId: "116364075167",
  appId: "1:116364075167:web:6be73837f5b8710678c2aa",
  measurementId: "G-QRK3TD2CJW"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// Login logic
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      document.getElementById("login-screen").style.display = "none";
      document.getElementById("splash-screen").style.display = "block";

      setTimeout(() => {
        document.getElementById("splash-screen").style.display = "none";
        document.getElementById("home-screen").style.display = "block";
      }, 4000);
    })
    .catch((error) => {
      document.getElementById("login-error").innerText = error.message;
    });
}

// Random number generator
function generateRandom() {
  const value = (Math.random() * 10).toFixed(2) + "x";
  document.getElementById("multiplier").innerText = value;
}
