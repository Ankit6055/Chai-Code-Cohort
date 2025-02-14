function isEmpty(obj) {
    if (Object.keys(obj).length === 0) {
        return true;
    }
    else {
        return false;
    }
}

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

myObj = {
    name: "Ankit",
    age: 21
};
console.log(Object.keys(myObj)); // [ 'name', 'age' ]
console.log(Object.values(myObj)); // [ 'Ankit', 21 ]
console.log(Object.entries(myObj)); // [ [ 'name', 'Ankit' ], [ 'age', 21 ] ]

myNewObj = {};

console.log(isEmpty(myObj)); // false
console.log(isEmpty(myNewObj)); // true