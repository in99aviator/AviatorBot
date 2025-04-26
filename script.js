function runAnalysis() {
  const randomValue = (Math.random() * (15 - 5) + 5).toFixed(2);
  document.getElementById('result').innerText = `${randomValue}x`;

  // Update Progress
  const progress = Math.min(Math.floor(randomValue * 7), 100);
  document.getElementById('progress').style.width = `${progress}%`;
  document.getElementById('sync').innerText = `${progress}%`;

  // Level increase example
  const level = Math.ceil(progress / 20);
  document.getElementById('level').innerText = level;
}

function showFeedback(type) {
  const dialog = document.getElementById('dialog');
  const text = document.getElementById('dialog-text');
  if(type === "Right") {
    text.innerText = "Thanks for your positive feedback!";
  } else {
    text.innerText = "Thanks for your feedback, we'll improve!";
  }
  dialog.style.display = "flex";
}

function closeDialog() {
  document.getElementById('dialog').style.display = "none";
}
