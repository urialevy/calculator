// defines buttons, sets up initial display value of 0
let blankDisplay = true;
let firstOp = "";
let secondOp = "";
let currentOp = null;

const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const returnButton = document.getElementById("finish");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
var displayValue = document.getElementById("result");
displayValue.textContent = "0";
let previousValue = document.getElementById("previous");

//Capture keystrokes and presses, update display
window.addEventListener("keydown", input);

function input(e) {
  if (e.key >= 0 && e.key <= 9) populateNum(e.key);
  if (e.key === "Escape") reset();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "=" || e.key === "Enter") eval();
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    startOperate(e.key);
}
function populateNum(n) {
  {
    if (blankDisplay) {
      displayValue.textContent = "";
      firstOp += n;
      blankDisplay = false;
    } else {
      firstOp += n;
    }
  }
  displayValue.textContent = firstOp;
}

//clear and delete buttons
clearButton.addEventListener("click", reset);
deleteButton.addEventListener("click", deleteNumber);

function resetDisplay() {
  firstOp = "";
  displayValue.textContent = "";
  blankDisplay = true;
}
function reset() {
  displayValue.textContent = "";
  previousValue.textContent = "";
  blankDisplay = true;
  firstOp = "";
  secondOp = "";
  currentOp = null;
}

function deleteNumber() {
  firstOp = firstOp.toString().slice(0, -1);
  displayValue.textContent = firstOp;
}

// stores values once non-enter operator key is pressed
function startOperate(operator) {
  if (firstOp == null || secondOp == null) {
    displayValue.textContent = firstOp;
    currentOp = operator;
    previousValue.textContent = `${firstOp} ${currentOp}`;
    resetDisplay();
    secondOp = previousValue.textContent.toString().slice(0, -2);
  } else {
    displayValue.textContent = firstOp;
    currentOp = operator;
    previousValue.textContent = `${firstOp} ${currentOp}`;
    secondOp = previousValue.textContent.toString().slice(0, -2);
    operate(currentOp, firstOp, secondOp);
    firstOp = 0;
    displayValue.textContent = "";
  }
}

// Actual calculator functions that brings all the inputs together
function eval() {
  operate(currentOp, firstOp, secondOp);
}

// Calculator functions, does not allow to divide by zero.
function add(a, b) {
  displayValue.textContent = a + b;
  firstOp = a + b;
}
function subtract(a, b) {
  displayValue.textContent = a - b;
  firstOp = a - b;
}
function divide(a, b) {
  if (b == 0) {
    alert(`ERROR: Cannot divide by zero.`);
  } else {
    displayValue.textContent = a / b;
    firstOp = a / b;
  }
}
function multiply(a, b) {
  displayValue.textContent = a * b;
  firstOp = a * b;
}
//detects the operator and adds/subtracts
function operate(operator, a, b) {
  a = Number(a);
  b = Number(b);
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
