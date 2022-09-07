// defines buttons, sets up initial display value of 0
let blankDisplay = true;
let firstOp = "";
let secondOp = "";
let currentOp = null;

const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const returnButton = document.querySelector("#finish");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
var displayValue = document.getElementById("result");
displayValue.textContent = "0";
let previousValue = document.getElementById("previous");

//capture keystrokes and presses, update display
window.addEventListener("keydown", input);

function input(e) {
  if (e.key >= 0 && e.key <= 9) populateNum(e.key);
  if (e.key === "Escape") reset();
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
clearButton.addEventListener("click", reset);
deleteButton.addEventListener("click", deleteNumber);

function resetDisplay() {
  displayValue.innerHTML = "0";
  blankDisplay = true;
}
function reset() {
  displayValue.innerHTML = "0";
  previousValue.innerHTML = "";
  blankDisplay = true;
}

function deleteNumber() {
  displayValue.textContent = displayValue.textContent.toString().slice(0, -1);
}

// stores values once non-enter operator key is pressed
function startOperate(operator) {
  firstOp = displayValue.textContent;
  currentOp = operator;
  previousValue.textContent = `${firstOp} ${currentOp}`;
  resetDisplay();
}

//

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
