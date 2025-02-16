const user = {
    username: "Ankit",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, Welcome to Website`);
    }
}

// user.welcomeMessage(); // Ankit, Welcome to Website
// user.username = "Sam";
// user.welcomeMessage(); // Sam, Welcome to Website

// console.log(this); // {}

// function chai() {
//     let username = "Ankit";
//     // console.log(this); // username is not present inside "this". eg: Object [global]... 
//     // console.log(username); // Ankit
//     // console.log(this.username); // undefined
// }

// chai();

// const chai = function() {
//     let username = "Ankit";
//     console.log(this); // Object [global]...
// }

const chai = () => {
    let username = "Ankit";
    console.log(this); // {}
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => ( num1 + num2 ); // returns 30

// const addTwo = (num1, num2) => ({username: "Ankit"}); // returns { username: 'Ankit' }

// const addTwo = (num1, num2) => { num1 + num2 }; // returns nothing when we use {}
// const addTwo = (num1, num2) => ( num1 + num2 ); // returns 30

console.log(addTwo(10, 20));
