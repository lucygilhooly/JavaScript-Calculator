const numberButtons = document.getElementsByClassName("number")
const operationButtons = document.getElementsByClassName("operation")
const equalsButton = document.getElementById("equals")
const deleteButton = document.getElementById("delete")
const allClearButton = document.getElementById("allClear")
const previousOpText = document.getElementsByClassName("previousOp")
const currentOpText = document.getElementsByClassName("currentOp")


    allClearButton.value = ""


   deleteButton.addEventListener("click", () => value.remove());

   numberButtons = document.createElement(Number);

   numberButtons.innerText = newNum;
   console.log(newNum);
 
   //when button is clicked, display the number 
   numberButtons.addEventListener("click", () => value.display());