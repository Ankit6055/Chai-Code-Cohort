// Create a new Map
let myMap = new Map();

// Add key-value pairs
myMap.set("name", "Ankit");
myMap.set("age", 21);
myMap.set("country", "India");

// Get a value
console.log(myMap.get("name")); // Output: Ankit

// Check if a key exists
console.log(myMap.has("age")); // Output: true

// Delete a key
myMap.delete("country");

// Get size of the map
console.log(myMap.size); // Output: 2

// Iterate over a Map
for (let [key, value] of myMap) {
    console.log(`${key}: ${value}`);
}

// Clear the map
myMap.clear();
console.log(myMap.size); // Output: 0