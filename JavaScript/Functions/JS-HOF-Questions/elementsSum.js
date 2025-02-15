// Find the sum of all elements in an array.
let numbers = [1, 2, 3, 4, 5];

let sumNumbers = numbers.reduce((acc, num) => acc + num, 0);
console.log(sumNumbers);