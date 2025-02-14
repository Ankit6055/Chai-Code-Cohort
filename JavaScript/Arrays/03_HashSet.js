let mySet = new Set();

mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(10); // Duplicate (ignored)

console.log(mySet); // Output: Set(3) { 10, 20, 30 }

console.log(mySet.has(20)); // Output: true
console.log(mySet.has(50)); // Output: false

mySet.delete(20);
console.log(mySet); // Output: Set(2) { 10, 30 }

console.log(mySet.size); // Output: 2

// Using forEach
mySet.forEach(value => console.log(value));

// Using for...of
for (let value of mySet) {
    console.log(value);
}

let arr = Array.from(mySet);
console.log(arr); // Output: [10, 30]

mySet.clear();
console.log(mySet.size); // Output: 0
