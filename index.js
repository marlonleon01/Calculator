//Variables for numbers && operators

let numberBtns = document.querySelectorAll("[data-numbers]");
let operationBtns = document.querySelectorAll("[data-operation]");
let equalBtn = document.querySelector("[data-equals]");
let allClearBtn = document.querySelector(".all-clear-btn");
let deleteBtn = document.querySelector(".delete-btn");
let previousOperandTextField = document.querySelector(".previous-operand");
let currentOperandTextField = document.querySelector(".current-operand");

//Make the calculator work with a class

class Calculator {

    constructor(previousOperandTextField, currentOperandTextField) {
        this.previousOperandTextField = previousOperandTextField;
        this.currentOperandTextField = currentOperandTextField;
        this.clear();
    }

    updateDisplay() {
        this.currentOperandTextField.innerText = this.currentOperand;
        this.previousOperandTextField.innerText = this.previousOperand;
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {

    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    compute() {

    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return
        if (this.previousOperand != "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = '';
    }
}

let calculator = new Calculator(previousOperandTextField, currentOperandTextField);

numberBtns.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    })
})

operationBtns.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    })
})
