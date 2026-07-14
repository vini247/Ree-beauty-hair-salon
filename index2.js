const scoreDisplay = document.getElementById('scoreDisplay');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const resetBtn = document.getElementById('resetBtn');
const statusMsg = document.getElementById('statusMsg');

let score = 0;
 
function updateDisplay() {
  scoreDisplay.textContent = "Score: " + score;

  if (score > 0) {
    scoreDisplay.style.color = "green";
  } else if (score < 0) {
    scoreDisplay.style.color = "red";
  } else {
    scoreDisplay.style.color = "black";
  }
}

addBtn.addEventListener('click', function() {
  score += 1;
  updateDisplay();
});

subtractBtn.addEventListener('click', function() {
  score -= 1;
  statusMsg.textContent = "Point removed.";
  updateDisplay();
});

resetBtn.addEventListener('click', function() {
  score = 0;
  statusMsg.textContent = "Score reset to zero.";
  updateDisplay();
});

