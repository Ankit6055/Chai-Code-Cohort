// Find the second largest number in [12, 35, 1, 10, 34, 1]

const arr = [12, 35, 1, 10, 34, 1];

let highest = -Infinity;
let secondHighest = -Infinity;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highest) {
        secondHighest = highest; 
        highest = arr[i]; 
    }
    else if (arr[i] > secondHighest && arr[i] < highest) {
        secondHighest = arr[i];
    }
}

console.log(secondHighest);