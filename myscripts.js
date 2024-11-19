// 1. Create functions for operations
// write a function 'add'
function add(a, b) {
  return a + b;
}

// write a function 'subtract'
function subtract(a, b) {
  return a - b;
}

// write a function 'multiply'
function multiply(a, b) {
  return a * b;
}

// write a function 'divide'
function divide(a, b) {
  return a / b;
}

// 2. Create variables for numbers and operator
let lastOperator = null;
let newOperator = null;
let lastInput = null;
let newInput = null;
let result = null;
firstOperation = true;

// 3. Create a function that takes an operator and two numbers
// and then calls one of the above functions on the numbers.
function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return subtract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  }
}

// 5. Create the functions that populate the display when you click the digit buttons.
// 5.1 Create a variable for storing users input
let userInput = "";

// 5.2 Create variable for display
const display = document.querySelector(".display");

// 5.3 Add event-listener for each button (with digit)
document.querySelectorAll(".digit").forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonText = event.target.textContent;
    userInput += buttonText;
    display.textContent = userInput;
  });
});

// 6. Make calculator work
// 6.1 Store the first and second numbers input by the user
document.querySelectorAll(".operator").forEach((button) => {
  button.addEventListener("click", (event) => {
    if (firstOperation) {
      lastOperator = event.target.textContent;
      firstOperation = false;
      // update lastInput to store last input
      if (lastInput !== null) {
        newInput = parseInt(userInput);
        result = operate(lastInput, newInput, lastOperator);
        lastInput = result;
        userInput = "";
        display.textContent = result;
        return;
      }
      lastInput = parseInt(userInput);
      userInput = "";
      display.textContent = lastInput;
    } else {
      newOperator = event.target.textContent;
      newInput = parseInt(userInput);
      result = operate(lastInput, newInput, lastOperator);
      lastInput = result;
      userInput = "";
      display.textContent = result;
      lastOperator = newOperator;
      return;
    }
  });
});

// 6.2 operate() on them when the user presses the = button
const equal = document.querySelector(".equal");
equal.addEventListener("click", (event) => {
  newInput = parseInt(userInput);
  let equalSignReslut = operate(lastInput, newInput, lastOperator);
  display.textContent = equalSignReslut;
});

const ac = document.querySelector(".clear");
ac.addEventListener("click", (event) => {
  lastOperator = null;
  newOperator = null;
  lastInput = null;
  newInput = null;
  result = null;
  firstOperation = true;
  display.textContent = 0;
  userInput = "";
});
