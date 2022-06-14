let display = document.createElement('div');
display.classList.add('display');
const container = document.querySelector('.container');
container.appendChild(display);
let value1 = '';
let value2 = '';
let currentOperation = '';


//This function sends the numbers to the display once 
//the buttons are clicked
function returnNumberFromButton() {
let numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', function(e) {
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
            } else {
            if (value1 === '') {
                value1 = +display.textContent;
                console.log('value1: '+ value1);
                currentOperation = e.target.classList[1];
                console.log(currentOperation);
            } 

            else {
                value2 = +display.textContent;
                console.log('value2: ' + value2);
                if(currentOperation === 'add') {
                    runningResult = value1 + value2;
                } 
                else if(currentOperation === 'subtract') {
                    runningResult = value1 - value2;
                } else if(currentOperation === 'multiply') {
                    runningResult = value1 * value2;
                } else if(currentOperation === 'divide') {
                    runningResult = value1/value2;
                }
                currentOperation = e.target.classList[1];
                console.log(currentOperation);
                value1 = runningResult;
                value2 = '';
                display.textContent = Math.round((runningResult + Number.EPSILON)*100)/100;
                console.log(runningResult);
            }
            }
            
});
});
}

operate();