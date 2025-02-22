let name = "Ankit";
const pi = 3.14;

// Primitive DataTypes
let number = 42; // number
let text = "Hello"; // string
let isTrue = true; // boolean
let nothing = null; // object
let undefinedVar = undefined; // undefined
let symbolVar = Symbol(); // symbol

// object
let person = {
    name: "Ankit",
    age: 21, 
    isStudent: true
}

let num = "42a";
// let convertedNum = Number(num); // Production Recommendation
// console.log(convertedNum); // NaN 

// let convertedNum = parseInt(num);

// console.log(convertedNum); // NaN 
// console.log(typeof convertedNum);

let str = 123;
let convertedString = String(str); // Standard Approach (Production Recommendation)

console.log(convertedString);
console.log(typeof convertedString)

// ((4 + (4 - 6)) * 3); // Use parenthesis always for calculation

// Arithmetic Operations
let a = 10;
let b = 3;

let sum = a + b;
let diff = a - b;
let product = a * b;
let quotient = a / b;
let remainder = a % b;
let power = a ** b;


// Comparison Operator (Answer will always in true or false)
let x = 5;
let y = 10;

console.log(x === y); // Strict Comparison (Type checking)
console.log(x == y); // Equal to
console.log(x != y); // Not Equal to
console.log(x > y);
console.log(x < y);
console.log(x <= y);
console.log(x >= y);

// Intrinsic means Inbuilt
console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.random() * 10);

let firstName = "Ankit";
let lastName = "Kumar";

let fullName = firstName + " " + lastName;

let message = "Hello World";

console.log(message.length);
console.log(message.toLowerCase());
console.log(message.toUpperCase());
console.log(message.indexOf("World"));
console.log(message.slice(0, 5)); // Excludes the last index

// Template Literals
let myName = "Ankit";

let greeting = `Hello ${myName}, from ChaiCode`; // BackTicks