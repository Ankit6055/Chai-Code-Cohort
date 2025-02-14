// Remove all occurrences of 3 from [1, 3, 4, 3, 5, 3, 6]

const arr = [1, 3, 4, 3, 5, 3, 6];

let newArr = arr.filter(num => num !== 3);
console.log(newArr);