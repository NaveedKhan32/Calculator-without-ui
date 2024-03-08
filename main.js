// CALCULATOR 

var num1 = prompt('Enter First Number');
num1 = parseInt(num1);
var num2 = prompt('Enter Second Number');
num2 = parseInt(num2);
var operator = prompt('Enter a operator (+, -, /, *)');

if(operator === '+'){
    sum = num1 + num2;
    alert('sum of num1 and num2 =' + " " + sum);
} else if (operator === '-'){
    sub = num1 - num2;
    alert('Subtraction of num1 and num2 =' + " " + sub);
} else if (operator === '/'){
    divide = num1 / num2;
    alert('Divide of num1 and num2 =' + " " + divide);
} else if(operator === '*'){
    mul = num1 * num2;
    alert('Multiplication of num1 and num2 =' + " " + mul);
} else{
    alert('invalid')
}

