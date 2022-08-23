"use strict";

//global variables
var numberButtons = document.getElementsByClassName("number");
var operationButtons = document.getElementsByClassName("key--operation");
var equalsButton = document.getElementById("equals");
var deleteButton = document.getElementById("delete");
var allClearButton = document.getElementById("allClear");
var currentOpText = document.getElementById("display");
var previousOp = null;
var currentValue = 0;
var selectedOp = null;
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = numberButtons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var numberButton = _step.value;
    numberButton.addEventListener("click", inputNumber);
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

function inputNumber(event) {
  var insertedNumber = event.target.innerHTML;

  if (insertedNumber === '.' && currentOpText.innerHTML.included('.')) {
    return;
  }

  if (currentOpText.innerHTML === '0') {
    currentOpText.innerHTML = insertedNumber;
  } else if (selectedOp) {
    currentOpText.innerHTML = insertedNumber;
    previousOp = selectedOp;
    selectedOp = null;
  } else {
    currentOpText.innerHTML += insertedNumber;
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = operationButtons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var operationButton = _step2.value;
    operationButton.addEventListener("click", inputOperator);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

function inputOperator(event) {
  var currentOpTextValue = parseInt(currentOpText.innerHTML);

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
} //     return computeOperator = operation;
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