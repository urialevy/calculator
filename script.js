// defines buttons, sets up initial display value of 0


const numButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const returnButton = document.querySelector('#finish');
const clearButton = document.querySelector('#clear')
const deleteButton = document.querySelector('#delete');
var displayValue = document.getElementById('result');
displayValue.innerHTML = '0';
let blankDisplay = true;


//capture keystrokes and presses, update display
document.addEventListener('keydown', populateNum);

function populateNum(n){
    if (n.key >= 0 && n.key <= 9){
        if(blankDisplay) {
            displayValue.innerHTML="";
            displayValue.textContent += n.key;
            blankDisplay = false;            
        }
        else {
    displayValue.textContent += n.key;}
}};


//clear and delete buttons
clearButton.addEventListener('click', resetDisplay)

function resetDisplay(){
    displayValue.innerHTML="0";
    blankDisplay = true;
}


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