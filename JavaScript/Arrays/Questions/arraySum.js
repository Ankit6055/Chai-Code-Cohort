//  Find the sum of all elements in [1, 2, 3, 4, 5]
const arr = [1, 2, 3, 4, 5];

let sum = 0;
for (let val in arr) {
    sum += arr[val];
}

console.log(sum);