var percentButton = document.getElementById("percent");
percentButton.disabled = true;

var display = document.getElementById("screen");
display.value = "0";
display.disabled = true;

/* Add numbers and operators to screen */
function addToScreen(button) {
    
    var displayValue = display.value;
    var buttonValue = button.value;
    
    if (buttonValue === " ÷ ") { 
        buttonValue = "/";
    } else if(buttonValue == " x ") {
        buttonValue = "*";
    }
    
    if(displayValue === "0") {displayValue = ""}
    
    displayValue += buttonValue.trim();
    if(displayValue.length > 9) {display.style.fontSize = "35px"}
    display.value = displayValue.slice(0,14);
};

/* Reset screen font-size to original size  */
function resetFontSize() {
    display.style.fontSize = "53px";
}

/* Clear Screen pressing "AC" button  */
function clearScreen() {
    resetFontSize();
    display.value = "0";
};

/* pressing "+/-" button switches displayed number from positive to negative */
function plusOrMinus() {
    display.value = -display.value
}