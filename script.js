// Firebase Config (Replace with your real config)
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

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
