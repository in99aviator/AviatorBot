let balance = 781030.15;

function toggleButton(button) {
  const span = button.querySelector("span");
  const cashAmount = parseFloat(span?.innerText?.replace("INR", "") || 0);

  if (button.innerText.includes("CASH OUT")) {
    button.innerHTML = "BET NOW";
    button.style.backgroundColor = "#00ff66";

    // Update balance
    balance += cashAmount;
    document.querySelector(".balance").innerText = balance.toFixed(2) + " INR";

    // Add to history
    const history = document.getElementById("history-list");
    const li = document.createElement("li");
    li.textContent = `Cashed Out: ₹${cashAmount.toFixed(2)}`;
    history.prepend(li);

    // Vibration
    if (navigator.vibrate) {
      navigator.vibrate(100);
    }

    // Play sound
    playSound();
  } else {
    button.innerHTML = `CASH OUT<br><span>${cashAmount.toFixed(2)} INR</span>`;
    button.style.backgroundColor = "orange";
  }
}

function playSound() {
  const audio = new Audio("https://www.soundjay.com/button/beep-07.wav");
  audio.play();
}
