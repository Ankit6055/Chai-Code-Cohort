// Remove duplicates from [1, 2, 2, 3, 4, 4, 5]
const arr = [1, 2, 2, 3, 4, 4, 5];

let myMap = new Set();

for (let num in arr) {
    myMap.add(arr[num]);
}

console.log(myMap);

let newArr = Array.from(myMap);
console.log(newArr);