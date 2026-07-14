const buildBtn = document.getElementById('buildBtn');
const profileCard = document.getElementById('profileCard');
buildBtn.addEventListener("click", function() {
  // Code to build the profile card


const nameInput = document.getElementById('nameInput').value;
const age = Number(document.getElementById('ageInput').value);
const color = document.getElementById('colorInput').value;
const isStudent = document.getElementById('studentInput').checked;

if (name === "") {
  profileCard.innerHTML = "<p style='color: red;'>Please enter a name!</p>"
  return;
}

profileCard.innerHTML = `
<div style="border: 3px solid ${color}; padding: 20px; margin-top: 20px;
          border-radius: 12px; max-width: 300px;">
<h2 style="color: ${color}">${name}<h2>
<p><strong>Age:</strong> ${age} years old</p>
<p><strong>Type:</strong> ${typeof age}</p>
<p><strong>Student:</strong> ${isStudent ? "Yes" : "No"}</p>
<p><strong>Fav color:<strong>
  <span style="background; ${color};white;
     padding: 2px 10px; border-radius:4px">${color}</span>
     </p>

  </div>
  `;
});

