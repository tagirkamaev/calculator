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
let number1;
let number2;
let operator;

// 3. Create a function that takes an operator and two numbers and then calls one of the above functions on the numbers.
function operate(a, b, operator) {
  if (operator === "+") {
    add(a, b);
  } else if (operator === "-") {
    subtract(a, b);
  } else if (operator === "*") {
    multiply(a, b);
  } else if (operator === "/") {
    divide(a, b);
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
// You should store the content of the display (the number) in a variable for use in the next step.
