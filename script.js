let operator;
let activeOperator = false;
let displayString = "0";
let display = document.querySelector('.display');
updateDisplay();

function updateDisplay() {
    display.textContent = displayString;
}


//number button functionality
const numButtons = document.querySelectorAll('.numButton');
numButtons.forEach((item) => {
    item.addEventListener('click', numButtonPress);
});

function numButtonPress() {
    if (displayString==="0") {
        displayString = this.textContent;
    }
    else {
        displayString += this.textContent;
    }
    updateDisplay();
}


//clear buttor functionality
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalculator);

function clearCalculator() {
    operator = '';
    activeOperator = false;
    displayString = '0';
    updateDisplay();
}


//equality button functionality
const equalButton = document.querySelector('.equals');
equalButton.addEventListener('click', equals);

function equals() {
    //make sure there is an operator selected
    if (operator!=='') {
        let params = getValuesFromString(displayString);
        if (!params.includes('')) {
            displayString = operate(operator, params[0],params[1]);
            activeOperator = false;
            updateDisplay();
        }
        else {
            alert('Not enough arguments');
        }
    }
    else {
        alert('No operator selected');
    }
}


//operator functionality
const operators = document.querySelectorAll('.operator')
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

function add(a,b) {
    return `${(+a)+(+b)}`;
}

function subtract(a,b) {
    return `${(+a)-(+b)}`;
}

function divide(a,b) {
    if (+b===0) {
        alert("Don't do that");
        return "0";
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


//handle errors resulting in NaN
const buttons = document.querySelectorAll('button');
buttons.forEach((item) => {
    item.addEventListener('click', handleNaN);
});

function handleNaN() {
    if (displayString==="NaN") {
        alert('Value out of bounds or otherwise undefined');
        clearCalculator();
    }
}