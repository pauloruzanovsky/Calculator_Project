let display = document.createElement('div');
display.classList.add('display');
const displayContainer = document.querySelector('.displayContainer');
displayContainer.appendChild(display);
let value1 = '';
let value2 = '';
let currentOperation = '';


//This function sends the numbers to the display once 
//the buttons are clicked
function returnNumberFromButton() {
let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => { 
    button.addEventListener('click', function(e) {
        if(e.target.innerText === '.' && display.textContent.indexOf('.') !== -1){
            return display.textContent;
        }

        if(value1 !== '' && value1 == display.textContent) {
            display.textContent = '';
        }
        
        display.textContent += e.target.innerText;
        return display.textContent;

    });
});
}

function operate() {
    let runningResult;
    returnNumberFromButton();
    let operationButtons = document.querySelectorAll('.operation');
    operationButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if(e.target.classList[1] === 'clear'){
                display.textContent = '';
                value1 = '';
                value2 = '';
                runningResult = '';
            } else if(e.target.classList[1] === 'equal' && display.textContent === '') {
            } else {
            if (value1 === '') {
                value1 = +display.textContent;
                currentOperation = e.target.classList[1];
            } 

            else {
                value2 = +display.textContent;
                if(currentOperation === 'add') {
                    runningResult = value1 + value2;
                } else if(currentOperation === 'subtract') {
                    runningResult = value1 - value2;
                } else if(currentOperation === 'multiply') {
                    runningResult = value1 * value2;
                } else if(currentOperation === 'divide') {

                    runningResult = value1/value2;
                }
                currentOperation = e.target.classList[1];
                value1 = runningResult;
                value2 = '';
                display.textContent = Math.round((runningResult + Number.EPSILON)*100)/100;
            }
            }
            
});
});
}

operate();