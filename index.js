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
    }

    updateDisplay() {
        
    }

    clear() {

    }

    delete() {

    }

    appendNumber(number) {

    }

    compute() {

    }

    chooseOperation(operation) {

    }
}

let calculator = new Calculator;

