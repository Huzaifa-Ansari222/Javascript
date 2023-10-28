// A higher-order function that takes a function as an argument
function doOperation(operation, a, b) {
    return operation(a, b);
}

// Functions that can be passed as arguments
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

// Using the higher-order function to perform different operations
console.log(doOperation(add, 5, 3)); // Output: 8
console.log(doOperation(subtract, 8, 4)); // Output: 4
console.log(doOperation(multiply, 2, 6)); // Output: 12
