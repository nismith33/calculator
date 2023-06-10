let firstValue;
let secondValue;
let operator;

function add(a,b) {
    return `${(+a)+(+b)}`;
}

function subtract(a,b) {
    return `${(+a)-(+b)}`;
}

function divide(a,b) {
    if (+b===0) {
        alert("Don't do that")
        return "error"
    }
    else {
        return `${(+a)/(+b)}`;
    }
}

function multiply(a,b) {
    return `${(+a)*(+b)}`;
}

function operate(operator, firstValue, secondValue) {
    if (operator==="+") {
        return add(firstValue,secondValue);
    }
    else if (operator==="-") {
        return subtract(firstValue,secondValue);
    }
    else if (operator==="*") {
        return multiply(firstValue,secondValue);
    }
    else if (operator==="/") {
        return divide(firstValue,secondValue);
    }
}

