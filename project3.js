let displayElement = document.getElementById("display");
let currentInput = "";
let darkModeToggle = document.getElementById("darkModeToggle");

// Button click sounds
const buttonClickSound = new Audio(
  "https://freesound.org/data/previews/522/522386_11243532-lq.mp3"
);

// Append values to the display
function append(value) {
  buttonClickSound.play();
  if (currentInput === "0" && value !== ".") {
    currentInput = value;
  } else {
    currentInput += value;
  }
  updateDisplay();
}

// Clear the display
function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

// Delete the last character
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

// Calculate the result
function calculate() {
  buttonClickSound.play();
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = "Error";
  }
  updateDisplay();
}

// Update the display
function updateDisplay() {
  displayElement.textContent = currentInput || "0";
}

// Toggle dark mode
darkModeToggle.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
