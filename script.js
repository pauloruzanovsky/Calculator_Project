function add(a,b) {
    alert(a + b);
}

function subtract(a,b) {
    alert(a - b);
}

function multiply(a,b) {
    alert(a * b);
}

function divide(a,b) {
    alert(a / b);
}

function operate() {
    let a = parseInt(prompt("First number: "));
    let b = parseInt(prompt("Second number: "));
    let operation = prompt("Add, subtract, multiply or divide?").toLowerCase();

    switch(operation) {
        case 'add':
            add(a,b)
            break;
        case 'subtract':
            subtract(a,b);
            break;
        case 'multiply':
            multiply(a,b);
            break;
        case 'divide':
            divide(a,b);
    }
}

operate();