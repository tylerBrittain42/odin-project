var currentValue = 0;
var prevValue = 0;
var currentOp = "";
const displayVal = document.querySelector(".display")
console.log(displayVal)

creatingListeners();



function addition(a, b){
    return(a + b);
}

function subtract(a, b){
    return(a - b)
}

function multiply(a, b){
    return(a * b)
}

function divide(a,b){
    return(a / b)
}

function operate(a, b, operand){

    if(operand === "/")
        return divide(a,b)
    else if(operand === "x")
        return multiply(a,b)
    else if(operand === "-")
        return subtract(a,b)
    else
        return addition(a,b)
}

// updates the current value with the clicked button
function addDigit(clickedButton){
    currentValue = (currentValue * 10) + Number(clickedButton)
    updateDisplay();
}

function updateDisplay(){
    displayVal.innerHTML = currentValue;
}

function creatingListeners(){

    const buttons = document.querySelectorAll('.grid-item')
    
    buttons.forEach((button) =>{
        button.addEventListener("click", () =>{
            
            const val = button.innerHTML;
            
            // updates the current value
            if ((val >= 0) && (val <= 9))
                addDigit(val)

            //resets all values to zero
            else if (val === "CLR"){
                currentValue = 0;
                prevValue = 0;
                currentOp = ""
                updateDisplay();
            }

            //Changes the currentValue to its opposite value
            else if (val === "(-)"){
                currentValue *= -1;
                updateDisplay();
            }

            // Performs the current calculation
            // (Will reset all values except currentValue)
            else if(val === "ENTER"){
                currentValue = operate(prevValue, currentValue, currentOp)
                prevValue = 0;
                op = ""
                updateDisplay();
            }
            // Clicking an operator
            else{
                console.log(button.name)
                currentOp = val;
                prevValue = currentValue
                currentValue = 0;

            }

        })
    })

}
