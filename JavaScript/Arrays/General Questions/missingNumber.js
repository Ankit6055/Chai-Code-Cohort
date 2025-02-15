// Find the missing number in [1, 2, 4, 5, 6] (assuming one number is missing)

const arr = [1, 2, 4, 5, 6];

let n = arr[arr.length - 1];
let totalSumOfArr = (n * (n + 1)) / 2;

let totalLoopSum = 0;
for (let i = 0; i < arr.length; i++) {
    totalLoopSum += arr[i];
}

let result = totalSumOfArr - totalLoopSum;
console.log(result);
