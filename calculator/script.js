//Taking an apporach where currentValue is not converted to a number until the last possible second.

var currentValue = "";
var prevValue = 0;
var currentOp = "";
const displayVal = document.querySelector(".display");

creatingListeners();

function addition(a, b) {
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

function operate(a, b, operand) {
  if (operand === "/") return divide(a, b);
  else if (operand === "x") return multiply(a, b);
  else if (operand === "-") return subtract(a, b);
  else if (operand === "+") return addition(a, b);
}

// updates the current value with the clicked button
function addDigit(clickedButton) {
  currentValue = currentValue + clickedButton;
  updateDisplay();
}

function updateDisplay() {
  displayVal.innerHTML = currentValue;
}

function creatingListeners() {
  const buttons = document.querySelectorAll(".grid-item");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const val = button.innerHTML;

      // updates the current value
      if ((val >= 0 && val <= 9) || val === ".") addDigit(val);
      //resets all values to zero
      else if (val === "CLR") {
        currentValue = "";
        prevValue = 0;
        currentOp = "";
        updateDisplay();
      }

      //Changes the currentValue to its opposite value
      else if (val === "(-)") {
        if (currentValue[0] === "-") currentValue = currentValue.substring(1);
        else currentValue = "-" + currentValue;
        updateDisplay();
      }

      // Performs the current calculation
      // (Will reset all values except currentValue)
      else if (val === "ENTER") {
        currentValue = operate(prevValue, Number(currentValue), currentOp);
        prevValue = 0;
        currentOp = "";
        updateDisplay();
      }
      // Clicking an operator
      else {
        if (currentOp === "") {
          currentOp = val;
          prevValue = Number(currentValue);
          currentValue = "";
        }
      }
    });
  });
}
