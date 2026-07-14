const greetBtn = document.getElementById("greetBtn");
const message = document.getElementById("message");
const nameInput = document.getElementById("nameInput");

greetBtn.addEventListener("click", function() {
  const name = nameInput.value;
  if (name === "") {
    message.textContent = "Please type your name first!";
    message.style.color = "red";
  } else {
    message.textContent = `Hello, ${name}! Welcome to Javascript!`;
    message.style.color = "green";
  }
});



const bioInput = document.getElementById("bioInput");
const bioBtn = document.getElementById("charCount");
const warning = document.getElementById("warning");

const MAX_CHARS = 100;

bioBtn.addEventListener("click", function() {
  const count = bioInput.value.length;
  bioBtn.textContent = count;

  if (count > MAX_CHARS) {
    bioBtn.style.color = "red";
    warning.textContent = "Too long! Please shorten your bio.";
  } else if (count > 80) {
    bioBtn.style.color = "orange";
    warning.textContent = "Getting close to the limit!";
  } else {
    bioBtn.style.color = "green";
    warning.textContent = "";
  }
});
