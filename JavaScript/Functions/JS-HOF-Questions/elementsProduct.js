// Find the product of all elements in an array.

let numbers = [1, 2, 3, 4, 5];

let productNumbers = numbers.reduce((acc, num) => acc * num, 1);
console.log(productNumbers);