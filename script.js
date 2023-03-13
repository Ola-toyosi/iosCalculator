var display = document.getElementById("screen");
display.value = "0";
display.disabled = true;

/* Add numbers and operators to screen */
function addToScreen(button) {
  var displayValue = display.value;
  var buttonValue = button.value;

  if (buttonValue === " ÷ ") {
    buttonValue = "/";
  } else if (buttonValue == " x ") {
    buttonValue = "*";
  }

  if (displayValue === "0") {
    displayValue = "";
  }

  displayValue += buttonValue.trim();
  if (displayValue.length > 9) {
    display.style.fontSize = "35px";
  }
  display.value = displayValue.slice(0, 14);
}

//  Reset display font-size to initial size
function resetFontSize() {
  display.style.fontSize = "53px";
}

// Pressing "C" button clears input from screen
function clearScreen() {
  resetFontSize();
  display.value = "0";
}

/* Pressing "+/-" button switches displayed number from positive to negative */
function plusOrMinus() {
  display.value = -display.value;
}

// Pressing "=" calacualtes the input data and returns result
function calculate() {
  var evalValue = "";
  displayValue = display.value;

  display.value = eval(display.value);

  try {
    evalValue = eval(displayValue).toString();
    if (evalValue.length > 8) {
      display.style.fontSize = "35px";
      evalValue = parseFloat(evalValue).toExponential(3);
    }
    display.value = evalValue;
  } catch (err) {
    display.value = display.value = "Error";
  }
}
