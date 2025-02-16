document.addEventListener("DOMContentLoaded", function () {
    let display = document.getElementById("display");
    let buttons = document.querySelectorAll(".btn");

    let currentInput = "";
    let operator = "";
    let firstOperand = "";

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            let value = this.getAttribute("data-value");

            if (value >= "0" && value <= "9") {
                currentInput += value;
                display.value = currentInput;
            } 
            else if (value === "C") {
                currentInput = "";
                firstOperand = "";
                operator = "";
                display.value = "";
            } 
            else if (value === "=") {
                if (firstOperand !== "" && operator !== "" && currentInput !== "") {
                    let result;
                    let num1 = parseFloat(firstOperand);
                    let num2 = parseFloat(currentInput);

                    if (operator === "+") result = num1 + num2;
                    else if (operator === "-") result = num1 - num2;
                    else if (operator === "*") result = num1 * num2;
                    else if (operator === "/") result = num2 !== 0 ? num1 / num2 : "Error";

                    display.value = result;
                    firstOperand = result.toString();
                    currentInput = "";
                    operator = "";
                }
            } 
            else {
                if (currentInput !== "") {
                    firstOperand = currentInput;
                    operator = value;
                    currentInput = "";
                }
            }
        });
    });
});