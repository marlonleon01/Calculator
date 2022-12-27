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
        this.currentOperandTextField.innerText = this.getDisplayNumber(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandTextField.innerText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else {
            this.previousOperandTextField.innerText = "";
        }
    }

    getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0])
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay 
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", {
                maximumFractionDigits: 0
            })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    clear() {
        this.currentOperand = '';
        this.previousOperand = '';
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
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

//Event Listeners to make buttons work

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

equalBtn.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
})

allClearBtn.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
})

deleteBtn.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
})