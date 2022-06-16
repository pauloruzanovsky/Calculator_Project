const numberButtons = document.querySelectorAll('.number')
const operatorButtons = document.querySelectorAll('.operation')
const equalsButton = document.querySelector('.equal')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
const pointButton = document.querySelector('.point')
const lastOperationScreen = document.getElementById('lastOperationDisplay')
const currentOperationScreen = document.getElementById('currentOperationDisplay')

let value1 = ''
let value2 = ''
let currentOperation = null
let shouldResetScreen = false

window.addEventListener('keydown', handleKeyboardInput)
equalsButton.addEventListener('click', evaluate)
clearButton.addEventListener('click', clear)
deleteButton.addEventListener('click', deleteNumber)
pointButton.addEventListener('click', appendPoint)

numberButtons.forEach((button) =>
  button.addEventListener('click', () => appendNumber(button.textContent))
)

operatorButtons.forEach((button) =>
  button.addEventListener('click', () => console.log(setOperation(button.textContent))
))

function appendNumber(number) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationScreen.textContent += number
}

function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    value1 = ''
    value2 = ''
    currentOperation = null
}

function appendPoint() {
    if (shouldResetScreen) resetScreen()
    if (currentOperationScreen.textContent === '')
        currentOperationScreen.textContent = '0'
    if (currentOperationScreen.textContent.includes('.')) return
    currentOperationScreen.textContent += '.'
}
  
function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
      .toString()
      .slice(0, -1)
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    value1 = currentOperationScreen.textContent
    currentOperation = operator;
    lastOperationScreen.textContent = `${value1} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
      alert("You can't divide by 0!")
      return
    }
    value2 = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
      operate(currentOperation, value1, value2)
    )
    lastOperationScreen.textContent = `${value1} ${currentOperation} ${value2} =`
    currentOperation = null
  }
  
  function roundResult(number) {
    return Math.round(number * 1000) / 1000
  }
  
  function handleKeyboardInput(e) {
    if (e.key >= 0 && e.key <= 9) appendNumber(e.key)
    if (e.key === '.') appendPoint()
    if (e.key === '=' || e.key === 'Enter') evaluate()
    if (e.key === 'Backspace') deleteNumber()
    if (e.key === 'Escape') clear()
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
      setOperation(convertOperator(e.key))
  }
  
  function convertOperator(keyboardOperator) {
    if (keyboardOperator === '/') return '÷'
    if (keyboardOperator === '*') return '×'
    if (keyboardOperator === '-') return '−'
    if (keyboardOperator === '+') return '+'
  }

  function add(a, b) {
    return a + b
  }
  
  function subtract(a, b) {
    return a - b
  }
  
  function multiply(a, b) {
    return a * b
  }
  
  function divide(a, b) {
    return a / b
  }
  
  function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
      case '+':
        return add(a, b)
      case '−':
        return subtract(a, b)
      case '×':
        return multiply(a, b)
      case '÷':
        if (b === 0) return null
        else return divide(a, b)
      default:
        return null
    }
  }