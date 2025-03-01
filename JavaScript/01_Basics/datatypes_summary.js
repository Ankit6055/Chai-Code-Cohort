//  Primitive

// 7 types(they are call by value): String, Number, Boolean, null, undefined, Symbol, BigInt

// JavaScript is a dynamically typed language, 
// which means that the type of a variable is determined when the program is running. 

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;
let userEmail2 = undefined; // line 14 and 15 are same

const id = Symbol('123');
const anotherId = Symbol('123');

// console.log(id === anotherId); // false

const bigNumber = 782364268268264258356n;
// console.log(typeof bigNumber); // bigint
console.log(typeof BigInt); // function


// Non Primitive/Reference Type

// Arrays, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Ankit",
    age: 22,
}

// function() {} // Function definition
const myFunction = function() {
    console.log("Hello World");
}

// myFunction();
console.log(typeof myFunction); // function, actually it's called function object!


// ****************************************************************

// Stack memory => Primitive, Heap memory => Non-Primitive
// stack memory mein copy milta hai 
// primitive values goes in stack
// heap memory mein reference milta hai 


let myYoutubename = "BytesWithAnkit";

let anothername = myYoutubename;
anothername = "Chaiaurcode";

console.log(anothername);
console.log(myYoutubename);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne;

userTwo.email = "ankit@google.com";

console.log(userOne.email); // ankit@google.com
console.log(userTwo.email); // ankit@google.com