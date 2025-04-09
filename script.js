const clickSound = document.getElementById("clickSound");

function playClickSound() {
  clickSound.currentTime = 0;
  clickSound.play();
  if (navigator.vibrate) navigator.vibrate(100);
}

function goToPrediction() {
  playClickSound();
  const splash = document.getElementById("splashScreen");
  const predictor = document.getElementById("predictorScreen");

  splash.classList.add("hidden");
  setTimeout(() => {
    splash.style.display = "none";
    predictor.classList.remove("hidden");
    predictor.style.display = "flex";
  }, 500);
}

function getPrediction() {
  playClickSound();
  const random = (Math.random() * (50 - 1) + 1).toFixed(2);
  const multiplierText = random + "x";
  document.getElementById("multiplier").innerText = multiplierText;

  // Save signal to history
  const historyList = document.getElementById("historyList");
  const li = document.createElement("li");
  li.textContent = multiplierText;
  historyList.prepend(li);
}
