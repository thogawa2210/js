function calculator(number1, number2, operator) {
    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }else{
        throw new RangeError('The operator must be an +,-,*,/')
    }
    return result;
}

try{
    console.log(calculator(3, 9, '%'));
}catch(error) {
    if (error instanceof RangeError)
    {
        console.log(error.message);
    }
}