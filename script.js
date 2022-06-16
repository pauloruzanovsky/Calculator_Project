let display = document.createElement('div');
display.classList.add('display');
const displayContainer = document.querySelector('.displayContainer');
displayContainer.appendChild(display);
let value1 = '';
let value2 = '';
let currentOperation = '';
let runningResult;


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

function returnKeyboardNumberInput() {
    document.addEventListener('keydown', (event) => {
            if(isNaN(+event.key)=== false)
            return display.textContent += event.key;

            if(event.key === '.' && display.textContent.indexOf('.') !== -1){
                return display.textContent;
            }
    
            if(value1 !== '' && value1 == display.textContent) {
                display.textContent = '';
            }
        });
    }

function returnKeyboardCurrentOperation() {
    document.addEventListener('keydown', (event) => {
            console.log(event.key);
            if(event.key === 'Backspace') {
            return display.textContent = display.textContent.slice(0,-1)
            }
            
            if(event.key === '=' && display.textContent === '') {
                return;
            } 
            if(event.key !== '+' || event.key !== '-' ||event.key !== '*' || event.key !== '/' ) {
                return
            }
            
            if (value1 === '') {
                value1 = +display.textContent;
                if(event.key === '+'){
                    return currentOperation = 'add';
                }
                if(event.key === '-'){
                    return currentOperation = 'subtract';
                }
                if(event.key === '*'){
                    return currentOperation = 'multiply';
                }
                if(event.key === '/'){
                    return currentOperation = 'divide';
                }
                
            }   

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

            value1 = runningResult;
            value2 = '';
            display.textContent = Math.round((runningResult + Number.EPSILON)*100)/100;

            if(event.key === '+'){
                currentOperation = 'add';
            }
            if(event.key === '-'){
                currentOperation = 'subtract';
            }
            if(event.key === '*'){
                currentOperation = 'multiply';
            }
            if(event.key === '/'){
                currentOperation = 'divide';
            }

    });
}


function operate() {

returnNumberFromButton();
    let operationButtons = document.querySelectorAll('.operation');
    operationButtons.forEach(button => {
        button.addEventListener('click', function(e) {

            if(e.target.classList[1] === 'delete') {
                return display.textContent = display.textContent.slice(0,-1)
            }

            if(e.target.classList[1] === 'clear'){
                display.textContent = '';
                value1 = '';
                value2 = '';
                runningResult = '';
                return;
            } 
            
            if(e.target.classList[1] === 'equal' && display.textContent === '') {
                return;
            } 

            if (value1 === '') {
                value1 = +display.textContent;
                return currentOperation = e.target.classList[1];
            }   

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
        )
            
});
};

operate();
returnKeyboardCurrentOperation();
returnKeyboardNumberInput();