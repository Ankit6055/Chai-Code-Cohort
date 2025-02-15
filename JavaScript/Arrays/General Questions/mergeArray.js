// Merge two arrays [1, 3, 5] and [2, 4, 6] into a single sorted array.

const arr1 = [1, 3, 5];
const arr2 = [2, 4, 6];

const newMergedArray = [...arr1, ...arr2];
console.log(newMergedArray);

newMergedArray.sort((a,b) => a - b);
console.log(newMergedArray);

let newConcatenatedArray = arr1.concat(arr2);
console.log(newConcatenatedArray);