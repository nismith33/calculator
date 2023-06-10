let firstValue;
let secondValue;
let operator;
let activeOperator = false;
let displayString = "0";
let display = document.querySelector('.display');
updateDisplay();

function updateDisplay() {
    display.textContent = displayString;
}


//number button functionality
function numButtonPress() {
    if (displayString==="0") {
        displayString = this.textContent;
    }
    else {
        displayString += this.textContent;
    }
    updateDisplay();
}

let numButtons = document.querySelectorAll('.numButton');
numButtons.forEach((item) => {
    item.addEventListener('click', numButtonPress);
});

//operator functionality
let operators = document.querySelectorAll('.operator')
operators.forEach((item) => {
    item.addEventListener('click', addOperator)
})

function addOperator() {
    if (!activeOperator) {
        activeOperator = true;
    }
    else {
        const params = getValuesFromString(displayString);
        displayString = operate(operator, params[0], params[1]);
    }
    operator = this.textContent;
    displayString += operator;
    updateDisplay();
}

function getValuesFromString(str) {
    return str.split(operator);
}

//clear buttor functionality
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
    firstValue = '';
    secondValue = '';
    operator = '';
    activeOperator = false;
    displayString = '0';
    updateDisplay();
}

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