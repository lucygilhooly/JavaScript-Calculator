//global variables
const numberButtons = document.getElementsByClassName("number")
const operationButtons = document.getElementsByClassName("key--operation")
const equalsButton = document.getElementById("equals")
const deleteButton = document.getElementById("delete")
const allClearButton = document.getElementById("allClear")
const currentOpText = document.getElementById("display")
let previousOp = null;
let currentValue = 0;
let selectedOp = null;



for (let numberButton of numberButtons) {
    numberButton.addEventListener("click", inputNumber)
}

function inputNumber(event) {
    let insertedNumber = event.target.innerHTML;

    if (insertedNumber === '.' && currentOpText.innerHTML.included('.')) {
        return;
    }

    if (currentOpText.innerHTML === '0') {
        currentOpText.innerHTML = insertedNumber;

    } else if (selectedOp){
        currentOpText.innerHTML = insertedNumber;
        previousOp = selectedOp;
        selectedOp = null;
    } else {
        currentOpText.innerHTML += insertedNumber;
    }

}


for (let operationButton of operationButtons) {
    operationButton.addEventListener("click", inputOperator)
}


function inputOperator(event) {
    const currentOpTextValue = parseInt(currentOpText.innerHTML)

    if (currentValue === 0) {
        currentValue += currentOpTextValue;

    } else {
        switch (previousOp) {
            case "+":
                currentValue = currentValue + currentOpTextValue;
                break;
            case "*":
                currentValue = currentValue * currentOpTextValue;
                break;
            case "/":
                currentValue = currentValue / currentOpTextValue;
                break;
            case "-":
                currentValue = currentValue - currentOpTextValue;
                break;
            default:
                return;

        }
    }
    console.log("currentValue", currentValue);
    selectedOp = event.target.innerHTML;
}




//     return computeOperator = operation;
// }

// equalsButton.addEventListener("click", computeAnswer);

// function computeAnswer(){
//     if (currentOpText.innerHTML === ""){
//         return;
//     }


// let a = Number(currentOpText.innerHTML);
// let b = Number(previousOpText.innerHTML);
// let answer;
// switch (computeOperator) {
//     case "multiply":
//         answer = b * a;
//         break;
//     case "divide":
//         answer = b/a;
//         break;
//     case "add":
//         answer = b + a;
//         break;
//     case "subtract":
//         answer = b - a;
//         break;
//     default:
//         return;
// }}

// // when operator button is pressed apply (aka + - * /)
// //equalsButton.addEventListener('click', calculate)
// //deleteButton.addEventListener('click', del)
// //allClearButton.addEventListener('click', reset)

// //const display = document.getElementsByClassName("calculator__display")
// //let displayCurrent = "";

// //function input(event) {
// //    let inputValue = event.target.innerText;
// //    displayCurrent += inputValue;
// //    display.innerText = displayCurrent;
// //}

// //function calculate() {
// //}

// //function reset() {
// ///}

// //f//unction del() {
// //}
//when equals button is applied do the sum - use the return to make sure it has been processed 