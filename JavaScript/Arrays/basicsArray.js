// Create an array of numbers from 1 to 10 and print it.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr);

// Find the length of an array
console.log(arr.length);

// Access the third element of the array
console.log(arr[2]); // Array has zero based indexing

// Add "Banana" to the end of an array
arr.push("Banana");

//  Remove the first element from an array
arr.shift();
console.log(arr); // [ 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Banana' ]

// Check if the array includes 15
console.log(arr.includes(15)); // false

// Reverse an array 
console.log(arr.reverse()); // [ 'Banana', 10, 9, 8, 7, 6, 5, 4, 3, 2 ]

//  Join an array ["Hello", "World"] into a single string "Hello World"
const str = ["Hello", "World"];
let sentence = str.join(" ");
console.log(sentence); // Hello World

// Sort an array in ascending order
console.log(arr.sort());

// Find the index of 7 in Array
console.log(arr.indexOf(7)); // if its not present, then it return -1