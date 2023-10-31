const { add, multiply, divide,checkPrime, decimalToBinary, subtract } = require('./ArithmeticOperations');

// Task 1 -> check primes for the numbers 2,5,7,9,11,15
const arr = [2,5,7,9,11,15];

arr.forEach((num) => {
    const result = checkPrime(num);
    console.log(`Number ${num} is ${result ? 'prime' : 'not prime'}`);
})

// Task 2 -> Decimal Representation of 30
decimalToBinary(30);


// Task 3 -> Evaluate the expression 2 * 15 / 5 + 2 - 1;
let result = divide(15,5);
result = multiply(result,2);
result = add(result,2);
result = subtract(result,1);

console.log(result);
