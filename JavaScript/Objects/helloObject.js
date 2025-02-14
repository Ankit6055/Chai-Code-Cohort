const user = {
    name: "John",
    surname: "Smith"
};

user.name = "Pete";
console.log(user);

delete user.name;
console.log(user);

// let obj = { name: "Ankit", age: 21 };
// delete obj; // ❌ Does NOT delete the object
// delete obj.name; // ✅ Deletes only 'name' property
// console.log(obj); // { age: 21 }