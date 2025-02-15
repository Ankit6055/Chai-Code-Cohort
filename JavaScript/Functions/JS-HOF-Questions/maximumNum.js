//  Find the maximum number in an array.
let numbers = [3, 7, 1, 9, 5];

let maxNumber = numbers.reduce((max, num) => (num > max ? num : max), numbers[0]);
console.log(maxNumber);