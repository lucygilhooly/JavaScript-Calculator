"use strict";

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var numberButtons = document.getElementsByClassName("number");
var operationButtons = document.getElementsByClassName("operation");
var equalsButton = document.getElementById("equals");
var deleteButton = document.getElementById("delete");
var allClearButton = document.getElementById("allClear");
var previousOpText = document.getElementsByClassName("previousOp");
var currentOpText = document.getElementsByClassName("currentOp");
allClearButton.value = "";
deleteButton.addEventListener("click", function () {
  return value.remove();
});
numberButtons = (_readOnlyError("numberButtons"), document.createElement(Number));
numberButtons.innerText = newNum;
console.log(newNum); //when button is clicked, display the number 

numberButtons.addEventListener("click", function () {
  return value.display();
});