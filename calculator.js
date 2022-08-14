let displayNumber = [];
let firstnumberA = '';
let firstnumber = ''
let saveOperator = '';
let result = '';
let secondNumberA = ''
let secondNumber = '';
let arrayOfOperators = [];
const displayresult = document.querySelector('.displayit');
const number = document.querySelectorAll('.displays');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const backspace = document.querySelector('.backspace');

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function operate(saveOperator, a, b) {
    if (saveOperator === '+') {
        return add(a, b);
    }
    else if (saveOperator === '-') {
        return subtract(a, b);
    }
    else if (saveOperator === '*') {
        return multiply(a, b);
    }
    else if (saveOperator === '/') {
        if (b !== 0) {
            return divide(a, b);
        }
        else if (b === 0) {
            return 'leemao laughing my asta out 🤣 '
        }
    }
}
number.forEach((displays) => {
    displays.addEventListener('click', function () {
        displayNumber.push(displays.textContent);
        if (displays.textContent === '.') {
            document.querySelector('.dot').disabled = true;
        }


        displayresult.textContent = displayNumber.join('');
    });
})
operators.forEach((operator) => {
    operator.addEventListener('click', function () {
        saveOperator = operator.textContent;
        arrayOfOperators.push(saveOperator);
        document.querySelector('.dot').disabled = false;
        if (!firstnumber && saveOperator) {
            let a = displayNumber;
            firstnumberA = a.join('');
            firstnumber = parseFloat(firstnumberA)
            displayresult.textContent = firstnumber;
        }
        else if (arrayOfOperators.length > 1) {
            saveOperator = arrayOfOperators[arrayOfOperators.length - 2];
            secondNumberA = displayNumber.join('');
            b = secondNumberA;
            secondNumber = parseFloat(b);
            result = operate(saveOperator, firstnumber, secondNumber);
            

            if (result === 'leemao laughing my asta out 🤣 ') {
                displayresult.textContent = result;
            }
            else {
                displayresult.textContent = parseFloat(result).toFixed(2);
            }
            firstnumber = result;
        }
        displayNumber = [];
    });
}
);
equals.addEventListener('click', function () {
    secondNumberA = displayNumber.join('');
    b = secondNumberA;
    secondNumber = parseFloat(b);
    saveOperator = arrayOfOperators[arrayOfOperators.length - 1];
    result = operate(saveOperator, firstnumber, secondNumber);
  
    if (result === 'leemao laughing my asta out 🤣 ') {
        displayresult.textContent = result;
    }
    else {
        displayresult.textContent = parseFloat(result).toFixed(2);
    }

});
clear.addEventListener('click', function () {
    displayNumber = [];
    firstnumberA = '';
    firstnumber = ''
    saveOperator = '';
    result = '';
    secondNumberA = ''
    secondNumber = '';
    arrayOfOperators = [];
    displayresult.textContent = '0'
}
);
backspace.addEventListener('click', function () {

    displayNumber.pop();
    displayresult.textContent = displayNumber.join('');
})
document.addEventListener('keydown', (event) => {
    let name = event.key;
    console.log(event)
    // Alert the key name and key code on keydown
    if (name === '1') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    }
    else if (name === '2') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    }
    else if (name === '3') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '4') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '5') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '6') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '7') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '8') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '9') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '0') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
    } else if (name === '+' || name === '*' || name === '-' || name === '/') {
        saveOperator = name;
        arrayOfOperators.push(saveOperator);
        document.querySelector('.dot').disabled = false;
        if (!firstnumber && saveOperator) {
            let a = displayNumber;
            firstnumberA = a.join('');
            firstnumber = parseFloat(firstnumberA)
            displayresult.textContent = firstnumber;
        }
        else if (arrayOfOperators.length > 1) {
            saveOperator = arrayOfOperators[arrayOfOperators.length - 2];
            secondNumberA = displayNumber.join('');
            b = secondNumberA;
            secondNumber = parseFloat(b);
            result = operate(saveOperator, firstnumber, secondNumber);
           
            if (result === 'leemao laughing my asta out 🤣 ') {
                displayresult.textContent = result;
            }
            else {
                displayresult.textContent = parseFloat(result).toFixed(2).replace(pattern, '');
            }

            firstnumber = result;
        }
        displayNumber = [];
    } else if (name === 'Backspace') {
        displayNumber.pop();
        displayresult.textContent = displayNumber.join('');
    } else if (name === 'Delete') {
        displayNumber = [];
        firstnumberA = '';
        firstnumber = ''
        saveOperator = '';
        result = '';
        secondNumberA = ''
        secondNumber = '';
        arrayOfOperators = [];
        displayresult.textContent = '0'
    } else if (name === '.') {
        displayNumber.push(name);
        displayresult.textContent = displayNumber.join('');
        event.preventDefault()
        return false;

    } else if (name === '=') {
        secondNumberA = displayNumber.join('');
        b = secondNumberA;
        secondNumber = parseFloat(b);
        saveOperator = arrayOfOperators[arrayOfOperators.length - 1];
        result = operate(saveOperator, firstnumber, secondNumber);
       
        if (result === 'leemao laughing my asta out 🤣 ') {
            displayresult.textContent = result;
        }
        else {
            displayresult.textContent = parseFloat(result).toFixed(2);
        }

    }

}, false);