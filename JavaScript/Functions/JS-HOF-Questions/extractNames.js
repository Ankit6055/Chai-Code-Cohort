// Extract names from an array of objects.
const arr = [{name: "Ankit"}, {name: "Rahul"}, {name: "Sumit"}];

let newArr = arr.map(prop => prop.name);
console.log(newArr);