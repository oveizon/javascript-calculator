
const operator = prompt('Enter operator ( either +(add), -(subtract), *(multipy) or /(divide) ): ');

const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;
if (operator != '+'|'-'|'*'|'/') {
    let wrong = 'wrong operator';
    console.log(wrong);
}

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

console.log(`${number1} ${operator} ${number2} = ${result}`);