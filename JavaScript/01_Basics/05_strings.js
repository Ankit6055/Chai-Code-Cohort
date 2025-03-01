const name = "Ankit";
const repoCount = 13;

// Not to use this type of syntax
// console.log(name + repoCount + " Value"); // Ankit13 Value

// String Interpolation (backticks)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('hiteshhc');

console.log(gameName[0]); // h
console.log(gameName.__proto__); // {}, browser mein iske protoyype ke andar ke methods access kar skte h

console.log(gameName.length); // 8
console.log(gameName.toUpperCase()); // HITESHHC
console.log(gameName.charAt(4)); // s, it follows 0 based indexing
console.log(gameName.indexOf('s')); // 4

const newString = gameName.substring(0, 4); // last index is excluded
console.log(newString); // hite

const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // hite

const newStringOne = "    Ankit    ";
console.log(newStringOne); //     Ankit    
console.log(newStringOne.trim()); // Ankit    
console.log(newStringOne.trimStart());
console.log(newStringOne.trimEnd());

const url = "https://hitesh.com/hitesh%20choudhary";
console.log(url.replace('%20', '-')); // https://hitesh.com/hitesh-choudhary
console.log(url.includes('ankit')); // false

console.log(gameName.split('-')); // [ 'hiteshhc' ]
console.log(gameName.split('e')); // [ 'hit', 'shhc' ]