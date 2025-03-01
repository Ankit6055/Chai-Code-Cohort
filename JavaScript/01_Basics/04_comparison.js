// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1); // true
console.log("02" > 1); // true

console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true
// Comparisons convert null to a number, treating it as 0.
// That's why null >= 0 is true and null > 0 is false.

// We should avoid these type of comparison in production code
// We should prefer to write clean code 
 
console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// comparison and equality check are 2 diff things 

console.log(undefined == null); // true
console.log(undefined === null); // false

// Strict Check => ===
console.log("2" == 2); // true
console.log("2" === 2); // false