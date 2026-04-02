// ===============================
// STRING MANIPULATION FUNCTIONS
// ===============================

// 1. Reverse a String
function reverseString(str) {
    return str.split("").reverse().join("");
}

// 2. Count Characters
function countCharacters(str) {
    return str.length;
}

// 3. Capitalize Words
function capitalizeWords(sentence) {
    return sentence
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
}

// ===============================
// ARRAY FUNCTIONS
// ===============================

// 4. Find Maximum Value in an Array
function findMax(arr) {
    return Math.max(...arr);
}

// 5. Find Minimum Value in an Array
function findMin(arr) {
    return Math.min(...arr);
}

// 6. Sum of Array
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

// 7. Filter Array (based on condition function)
function filterArray(arr, conditionFunc) {
    return arr.filter(conditionFunc);
}

// ===============================
// MATHEMATICAL FUNCTIONS
// ===============================

// 8. Factorial
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

// 9. Prime Number Check
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// 10. Fibonacci Sequence
function fibonacci(n) {
    let seq = [];
    let a = 0, b = 1;
    while (seq.length < n) {
        seq.push(a);
        [a, b] = [b, a + b];
    }
    return seq;
}

// ===============================
// TEST CASES
// ===============================

console.log("---- STRING FUNCTIONS ----");
console.log(reverseString("hello"));
console.log(countCharacters("hello"));
console.log(capitalizeWords("hello world"));

console.log("\n---- ARRAY FUNCTIONS ----");
console.log(findMax([3, 7, 2, 9]));
console.log(findMin([3, 7, 2, 9]));
console.log(sumArray([1, 2, 3, 4]));
console.log(filterArray([1, 2, 3, 4, 5], n => n % 2 === 0));

console.log("\n---- MATHEMATICAL FUNCTIONS ----");
console.log(factorial(5));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(fibonacci(6));