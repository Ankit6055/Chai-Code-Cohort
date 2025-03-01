let score = "33a";

console.log(typeof score); // string
console.log(typeof(score)); // string

let valueInNumber = Number(score);

console.log(valueInNumber); // NaN
console.log(typeof valueInNumber); // number

console.log(typeof NaN); // number

// "33" => 33
// "33abc" => NaN
// true => 1, false => 0

let isLoggedIn = "Yes";

let booleanIsLoggedIn = Boolean(isLoggedIn);

console.log(booleanIsLoggedIn); // true

// 1 => true, 0 => false, -75 => true
// "" => false, "Ankit" => true

let someNumber = 33;

let stringNumber = String(someNumber);

console.log(typeof stringNumber); // string

// *************************** Operations **************************

let value = 3;
let negValue = -value;
// console.log(negValue); // -3

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/2);
// console.log(2%2);

let str1 = "Hello";
let str2 = " Ankit";

let str3 = str1 + str2;
console.log(str3);

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log(1 + "2" + 1); // 121
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32

console.log(true); // true
console.log(+true); // 1 
console.log(true+1); // 2
console.log(""); // 
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 2+2; // Readability is imp, and this type of code is not preferred!

// Prefix and Postfix Operation
let gameCounter = 100;
gameCounter++;
console.log(gameCounter); // 101
console.log(gameCounter++); // 101
console.log(++gameCounter); // 103