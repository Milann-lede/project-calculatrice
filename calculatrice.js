const display = document.querySelector(".display");

let currentValue = '';


function NumberClick(event) {
    const button = event.target;
    currentValue += button.textContent;
    display.textContent = currentValue;
}


document.querySelectorAll("[data-number]").forEach(button => {

    button.addEventListener("click", NumberClick);
    
});

function opérationClick(event) {
    const button = event.target;
    currentValue += button.textContent;
    display.textContent = currentValue;
}


document.querySelectorAll("[data-operator]").forEach(button => {

    button.addEventListener("click", NumberClick);
    
});


