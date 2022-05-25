// defines buttons, sets up initial display value of 0

const displayValue = document.querySelector('#result');
displayValue.innerHTML="<p>0</p>";
const clearButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete');
const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const returnButton = document.querySelector('#finish');

//capture keystrokes and presses, update display
var number = number.addEventListener('keydown');
//clear and delete buttons

// Calculator functions, does not allow to divide by zero.
function add(a,b){
    console.log(a+b);
    return a+b;
}
function subtract(a,b){
    console.log(a-b);
    return a-b;
}
function divide(a,b){
    if (b == 0) {
        alert(`ERROR: Cannot divide by zero. Cosmic implosion imminent.`);
    }
    else {
    console.log(a/b);
    return a/b;}
}
function multiply(a,b){
    console.log(a*b);
    return a*b;
}
//detects the operator and adds/subtracts
function operate(a,b,operator){
    if (operator == "+") {
        add(a,b);
    }
    else if (operator == "-") {
        subtract(a,b);
    }
    else if (operator == "/") {
        divide(a,b);
    }
    else if (operator == "*") {
        multiply(a,b);
    }
}