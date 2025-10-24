const display = document.querySelector(".display");

let currentValue = '';


function NumberClick(event) {
    const button = event.target;
    currentValue += button.textContent;
    display.textContent = currentValue;
}

const numberButtons = document.querySelectorAll("[data-number]");
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener("click", NumberClick);
};


function OperationClick(event) {
    const operator = event.target.textContent;


    if (!currentValue || /[+\-*/]/.test(currentValue)) {
        return;
    }

    currentValue += operator;
    display.textContent = currentValue;
}


const operatorButtons = document.querySelectorAll("[data-operator]");
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener("click", OperationClick);
};

display.textContent = "0";


