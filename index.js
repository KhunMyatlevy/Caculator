// script.js

let display = document.getElementById('display');
let currentValue = '';
let operator = '';
let firstOperand = '';

function appendNumber(number) {
  currentValue += number;
  display.textContent = currentValue;
}

function appendOperator(op) {
  if (currentValue === '') return; // Prevent adding operator if there's no number
  firstOperand = currentValue;
  operator = op;
  currentValue = '';
}

function clearDisplay() {
  currentValue = '';
  firstOperand = '';
  operator = '';
  display.textContent = '0';
}

function deleteLast() {
  currentValue = currentValue.slice(0, -1);
  display.textContent = currentValue || '0';
}

function calculate() {
  let result = '';
  let secondOperand = currentValue;
  
  if (operator && firstOperand && secondOperand) {
    switch (operator) {
      case '+':
        result = parseFloat(firstOperand) + parseFloat(secondOperand);
        break;
      case '-':
        result = parseFloat(firstOperand) - parseFloat(secondOperand);
        break;
      case '*':
        result = parseFloat(firstOperand) * parseFloat(secondOperand);
        break;
      case '/':
        result = parseFloat(firstOperand) / parseFloat(secondOperand);
        break;
    }

    display.textContent = result;
    currentValue = result.toString(); // Update current value for further calculations
    firstOperand = '';
    operator = '';
  }
}
