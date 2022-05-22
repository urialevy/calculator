function add(a,b){
    console.log(a+b);
    return a+b;
}
function subtract(a,b){
    console.log(a-b);
    return a-b;
}
function divide(a,b){
    console.log(a/b);
    return a/b;
}
function multiply(a,b){
    console.log(a*b);
    return a*b;
}

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

operate(1,2,"+");
operate(2,2,"-");
operate(4,2,"/");
operate(5,5,"*");