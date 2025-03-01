// Singleton => jab constructor se banate hai 
// Object.create()

// object literals

const mySymbol = Symbol("key1");
const mySymbol2 = Symbol("key2");

const jsUser = {
    name: "Ankit",
    "Full Name": "Ankit Kanwar",
    // mySymbol: "mykey1",
    [mySymbol]: "mykey1",
    [mySymbol2]: "mykey2",
    age: 21,
    location: "BBSR",
    email: "Ankit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
};

// console.log(jsUser.email); // Ankit@google.com
// // console.log(jsUser[email]); // ReferenceError: email is not defined
// console.log(jsUser["email"]); // Ankit@google.com
// console.log(jsUser["Full Name"]); // Ankit Kanwar. cannot access using dot(.)

// console.log(jsUser.mySymbol); // mykey1
// console.log(typeof jsUser.mySymbol); // string

// console.log(jsUser[mySymbol]);
// console.log(typeof jsUser[mySymbol]);

// console.log(typeof mySymbol); // symbol

// console.log(Object.keys(jsUser)); // symbol will not be present in the Op, coz it's not a string
/*[
  'name',
  'Full Name',
  'age',
  'location',
  'email',
  'isLoggedIn',
  'lastLoginDays'
] */

jsUser.email = "Ankit@openAI.com"; // we can overwrite the object
// Object.freeze(jsUser);
Object.email = "Ankit@Apple.com"; // Will not be overwritten, coz object is freezed


jsUser.greeting = function() {
    console.log(`Hello JS user, ${this["Full Name"]}`);
    return "hello guys"; // if we dont write this return statement, then in the op screen it will show an extra undefined
}
console.log(jsUser.greeting); // [Function (anonymous)], function ka reference aaya h
console.log(jsUser.greeting()); // Hello JS user, Ankit Kanwar