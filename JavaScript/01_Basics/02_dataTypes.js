"use strict"; // Treat all JS code as newer version, It's default now

// we are using nodejs, not browser
// alert(3 + 3); // ReferenceError: alert is not defined coz we are running in Node


let name = "Ankit";
let age = 21;
let isLoggedIn = false;

// number => 2 to power 53
// biginit
// string => ""
// boolean => true/false
// null => standalone value, representation of empty value(khali hai)
// undefined => value not assigned
// symbol => for uniqueness


console.log(typeof name); // string
//  it shows as deprecated, it's because name is a predefined global variable in the browser environment.

console.log(typeof age); // number
console.log(typeof isLoggedIn); // boolean

console.log(typeof null); // object
console.log(typeof undefined); // undefined
