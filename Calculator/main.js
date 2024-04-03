'use strict';

const display = document.getElementById('display');
const numbersDisplay = document.querySelectorAll('[id*=keyword]');
const operatorsDisplay = document.querySelectorAll('[id*=operator]');

let newNumber = true;
let operator;
let previousNumber;



const pendingOperator = () => operator !== undefined;

const calc = () => {
    if(pendingOperator()){
        const actualNumber = parseFloat(display.textContent);
        newNumber = true;
        
        // if(operator =='+'){
        //     // console.log(previousNumber);
        //     // console.log(actualNumber);
        //     updateDisplay(previousNumber + actualNumber)
        // }else if(operator == '-'){
        //     updateDisplay(previousNumber - actualNumber)
        // }else if(operator == '/'){
        //     updateDisplay(previousNumber / actualNumber)
        // }
        // else if(operator == '*'){
        //     updateDisplay(previousNumber * actualNumber)
        // }

        const resultOperator = eval(`${previousNumber}${operator}${actualNumber}`);
        updateDisplay(resultOperator)
    }
}

const updateDisplay = (text) =>{
    if(newNumber){
        display.textContent = text;
        newNumber = false;
    }else{
        display.textContent += text;
    }
}

const showNumberDisplay = (e) => updateDisplay(e.target.textContent) ;

const selectOperator = (e) => {
    if(!newNumber){
        calc()    
        newNumber = true;
        operator = e.target.textContent;
        previousNumber = parseFloat(display.textContent);
        console.log(operator)
    }
}



numbersDisplay.forEach(nD => nD.addEventListener('click', showNumberDisplay));
operatorsDisplay.forEach(oD => oD.addEventListener('click', selectOperator));


const activeResult = () => {
    calc();
    operator = undefined;
}


document.getElementById('result').addEventListener('click', activeResult);

const clearDisplay = () => display.textContent = '' ;

const clearCalc = () => {
    clearDisplay();
    operator = undefined;
    newNumber = true;
    previousNumber = undefined;
}


document.getElementById('clearDisplay').addEventListener('click', clearDisplay)
document.getElementById('clearCalc').addEventListener('click', clearCalc)

// console.log(numbersDisplay)