//Variables for numbers && operators

let numberBtns = document.querySelectorAll("[data-numbers]");
let operationBtns = document.querySelectorAll("[data-operation]");
let equalBtn = document.querySelector("[data-equals]");
let allClearBtn = document.querySelector(".all-clear-btn");
let deleteBtn = document.querySelector(".delete-btn");
let previousOperandTextField = document.querySelector(".previous-operand");
let currentOperandTextField = document.querySelector(".current-operand");
let calculator = new Calculator(previousOperandTextField, currentOperandTextField);

//Event Listeners to make buttons work

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

equalBtn.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
})



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
        let computation
        const previous = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(previous) || isNaN(current)) return
        switch (this.operation) {
            case "*":
                computation = previous * current;
                break;
            case "+":
                computation = previous + current;
                break;
            case "-":
                computation = previous - current;
                break;
            case "÷":
                computation = previous / current;
                break;
            default:
                return;                        
        }
        this.currentOperand = computation;
        this.previousOperand = "";
        this.operation = undefined;
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
