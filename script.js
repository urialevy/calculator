// defines buttons, sets up initial display value of 0

const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const returnButton = document.querySelector("#finish");
const clearButton = document.querySelector("#clear");
const deleteButton = document.querySelector("#delete");
var displayValue = document.getElementById("result");
displayValue.textContent = "0";
let blankDisplay = true;
let previousValue = document.getElementById("previous");

//capture keystrokes and presses, update display
window.addEventListener("keydown", input);

function input(e) {
  if (e.key >= 0 && e.key <= 9) populateNum(e.key);
  if (e.key === "Escape") resetDisplay();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "=" || e.key === "Enter") calculate();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    startOperate(e.key);
}
function populateNum(n) {
  {
    if (blankDisplay) {
      displayValue.innerHTML = "";
      displayValue.textContent += n;
      blankDisplay = false;
    } else {
      displayValue.textContent += n;
    }
  }
}

//clear and delete buttons
clearButton.addEventListener("click", resetDisplay);

function resetDisplay() {
  displayValue.innerHTML = "0";
  blankDisplay = true;
}
function deleteNumber() {
  displayValue.textContent = displayValue.textContent.toString().slice(0, -1);
}

// stores values once non-enter operator key is pressed
function startOperate(o) {}

// Calculator functions, does not allow to divide by zero.
function add(a, b) {
  console.log(a + b);
  return a + b;
}
function subtract(a, b) {
  console.log(a - b);
  return a - b;
}
function divide(a, b) {
  if (b == 0) {
    alert(`ERROR: Cannot divide by zero. Cosmic implosion imminent.`);
  } else {
    console.log(a / b);
    return a / b;
  }
}
function multiply(a, b) {
  console.log(a * b);
  return a * b;
}
//detects the operator and adds/subtracts
function operate(a, b, operator) {
  if (operator == "+") {
    add(a, b);
  } else if (operator == "-") {
    subtract(a, b);
  } else if (operator == "/" || operator == "÷") {
    divide(a, b);
  } else if (operator == "*") {
    multiply(a, b);
  }
}
