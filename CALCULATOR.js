function calculator(num1, num2, op) {
    switch (op) {
        case '/':
            if (num2 == 0) return "Can't divide by zero";
            return num1 / num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '+':
            return num1 + num2;
        default:
            return "Invalid operator";
    }
}

console.log("Sum of 10 and 6 is " + calculator(10, 6, '+'));
console.log("Subtraction of 10 and 8 is " + calculator(10, 8, '-'));
console.log("Multiplication of 10 and 8 is " + calculator(10, 8, '*'));
console.log("Division of 10 and 9 is " + calculator(10, 9, '/'));
console.log("Division of 10 and 0 is " + calculator(10, 0, '/'));