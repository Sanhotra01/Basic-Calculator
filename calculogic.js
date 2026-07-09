// basic function 

function add(a, b){
    return a + b;
}   
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

function calculate(operator){
    let number1 = Number(document.getElementById("num1").value);
    let number2 = Number(document.getElementById("num2").value);

    let resultValue = 0;

    if (operator === "+"){
        resultValue = add(number1, number2);

    } else if (operator === "-"){
        resultValue = subtract(number1, number2);

    } else if (operator === "*"){
        resultValue = multiply(number1, number2);

    } else if (operator === "/"){
        resultValue = divide(number1, number2);
    }

    document.getElementById("Result").innerText = "Result:" + resultValue;
}
