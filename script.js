<script type="module">
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAETHe_FcNSrHUAqeIgGlLchjhEWI44u0k",
    authDomain: "aviatorbot-bcbdd.firebaseapp.com",
    databaseURL: "https://aviatorbot-bcbdd-default-rtdb.firebaseio.com",
    projectId: "aviatorbot-bcbdd",
    storageBucket: "aviatorbot-bcbdd.appspot.com", // FIXED here
    messagingSenderId: "116364075167",
    appId: "1:116364075167:web:6be73837f5b8710678c2aa",
    measurementId: "G-QRK3TD2CJW"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  document.getElementById("loginBtn").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        alert("Login Success!");
        window.location.href = "home.html";
      })
      .catch((error) => {
        alert("Firebase Error: " + error.message);
      });
  });
</script>
