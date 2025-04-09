function toggleButton(button) {
  if (button.innerText.includes("CASH OUT")) {
    button.innerHTML = "BET NOW";
    button.style.backgroundColor = "#00ff66";
    button.style.color = "black";
  } else {
    button.innerHTML = "CASH OUT<br><span>1514.00 INR</span>";
    button.style.backgroundColor = "orange";
    button.style.color = "black";
  }
}
