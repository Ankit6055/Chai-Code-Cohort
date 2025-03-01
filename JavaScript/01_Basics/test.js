// let a = -8927;

// let num = Boolean(a);

// console.log(num);


console.log(false == -1); // false
console.log(false === -1); // false
console.log(false === 0); // false
console.log(false == 0); // true

console.log(null == 1); // false
console.log("10" - 1 + "1"); // 91

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(+0 == -0); // true
console.log(+0 === -0); // true
console.log(Object.is(-0, +0)); // false
 
console.log(1/0); // Infinity
console.log(-1/0); // -Infinity

let A = "a"; 
let B = "a"; 
console.log(A===B); // true

let x = "a"; 
let y = "a";
console.log(x===y); // true

let a = 0;
let b = 0;
console.log(a === b);

// if condition for bubble sort best case tc : O(1)
