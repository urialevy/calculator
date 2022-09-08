// defines buttons, sets up initial display value of 0
let shouldClearDisplay = false;
let firstOperand = "";
let secondOperand = "";
let memory = "";
let currentOperation = null;

const numButtons = document.querySelectorAll(".num");
const operatorButtons = document.querySelectorAll(".operator");
const returnButton = document.getElementById("finish");
const clearButton = document.getElementById("clear");
const deleteButton = document.getElementById("delete");
var displayValue = document.getElementById("result");
let previousValue = document.getElementById("previous");
displayValue.textContent = firstOperand;

//Capture keystrokes and presses, update display
window.addEventListener("keydown", input);

function input(e) {
  if (e.key >= 0 && e.key <= 9) populateNum(e.key);
  if (e.key === "Escape") reset();
  if (e.key === "Backspace") deleteNumber();
  if (e.key === "=" || e.key === "Enter")
    operate(currentOperation, secondOperand, firstOperand);
  if (e.key === "+" || e.key === "-" || e.key === "*" || e.key === "/")
    startOperate(e.key);
}

// updates number display when input is registered
function populateNum(n) {
  if (displayValue.textContent == "0" || shouldClearDisplay) {
    resetDisplay();
    firstOperand += n;
    displayValue.textContent = firstOperand;
  } else {
    firstOperand += n;
    displayValue.textContent = firstOperand;
  }
}

//clear and delete buttons
clearButton.addEventListener("click", reset);
deleteButton.addEventListener("click", deleteNumber);

function reset() {
  displayValue.textContent = "";
  previousValue.textContent = "";
  shouldClearDisplay = false;
  firstOperand = "";
  secondOperand = "";
  memory = "";
  currentOperation = null;
}

function deleteNumber() {
  firstOperand = firstOperand.toString().slice(0, -1);
  displayValue.textContent = firstOperand;
}

// only resets the display
function resetDisplay() {
  firstOperand = "";
  displayValue.textContent = "";
  shouldClearDisplay = false;
}

// stores values once non-enter operator key is pressed
function startOperate(operator) {
  if (secondOperand === "") {
    displayValue.textContent = firstOperand;
    secondOperand = firstOperand;
    currentOperation = operator;
    memory = firstOperand;
    previousValue.textContent = `${firstOperand} ${currentOperation}`;
    shouldClearDisplay = true;
    resetDisplay();
  } else if (memory !== "") {
    memory = firstOperand;
    displayValue.textContent = firstOperand;
    currentOperation = operator;
    previousValue.textContent = `${firstOperand} ${currentOperation}`;
    displayValue.textContent = firstOperand;
    operate(currentOperation, secondOperand, memory);
    firstOperand = "";
  } /* else {
    secondOperand = firstOperand;
    displayValue.textContent = firstOperand;
    currentOperation = operator;
    previousValue.textContent = `${firstOperand} ${currentOperation}`;
    firstOperand = "";
    displayValue.textContent = firstOperand;
    shouldClearDisplay = true;
    resetDisplay();
  } */
}

// Actual calculator functions that brings all the inputs together

// Calculator functions, does not allow to divide by zero.
function add(a, b) {
  firstOperand = a + b;
  displayValue.textContent = firstOperand;
}
function subtract(a, b) {
  firstOperand = a - b;
  displayValue.textContent = firstOperand;
}
function divide(a, b) {
  if (b == 0) {
    alert(`ERROR: Cannot divide by zero. Cosmic implosion imminent.`);
  } else {
    firstOperand = a / b;
    displayValue.textContent = firstOperand;
  }
}
function multiply(a, b) {
  firstOperand = a * b;
  displayValue.textContent = firstOperand;
}
//detects the operator and perfroms operations
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
