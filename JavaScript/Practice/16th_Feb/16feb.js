Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`);
}

function greet(name) {
    return `Hello ${name}`;
}

greet.describe(); // Function name is greet

// greet.prototype = Function.prototype;
// greet.describe("Ankit");


function add(a, b) { // Function Declaration
    return a+b;
}

const subtract = function(a, b) { // Function Expression
    return a-b; 
}

const multiply = (a, b) => a*b; // Arrow Function

function applyOperation(a, b, operation) { // First Class Function
    return operation(a, b);
}

const result = applyOperation(5, 4, (x, y) => x/y);
// console.log(result); // 1.25


function createCounter() {
    let count = 0;
    return function () {  // Tiffin Concept
        count++;
        return count;
    }
}
const counter = createCounter(); // It has access to parent variable's
console.log(counter); 

function onef() {
    let myName = "Ankit"
}

// console.log(myName); // myName is not defined


// IIFE - Immediately Invoked Function Expression
(function() {
    console.log("Ankit");
})()