// console.log("Hello from JS");

// const a = 1;
// const b = 2;

// console.log("SUM", a + b);

// console.log("Bye Bye");

// setTimeout( () => console.log('HEHEHEHE'), 5 * 1000); // 5 Seconds ka delay

// const obj = {
//     personName: "Ankit",
//     greet: function() {
//         console.log(`Hello, ${this.personName}`);
//     }
// }

// console.log("Hello from JS"); // 1st

// // (setTimeout(obj.greet), 2 * 1000); Hello, undefined

// console.log("Bye Bye"); // 2nd


// console.log("Hello from JS"); // 1st

// setTimeout( () => console.log('HEHEHEHE'), 0); // 3rd

// console.log("Bye Bye"); // 2nd


// function xyz() {
//     // Create
//     const abc = 1;

//     // .
//     // . 

//     // destroy -> abc
// }

const obj = {
    personName: "Ankit",
    greet: function() {
        console.log(`Hello, ${this.personName}`);
    }
}

// console.log("HI");

// setTimeout(obj.greet(), 5 * 1000); 
// // setTimeout(obj.greet.bind(obj), 5 * 1000); // Hello, Ankit

// console.log("BYE");


// Promise.resolve().then(() => console.log('Promise Resolve Hogaya'));

// console.log(a); // undefined

// var a = 10;

// console.log(b); //ReferenceError: Cannot access 'b' before initialization

// let b = 20;
