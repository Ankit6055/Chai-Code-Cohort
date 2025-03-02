const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`)
        // console.log(this) // It refers to the current context, In this case it refers to this object (user)
    }
}

// user.welcomeMessage(); // hitesh, welcome to website
// user.username = "Sam";
// user.welcomeMessage(); // Sam, welcome to website

// console.log(this); // {}, kyuki ham Node environment mein hai. But in browser it shows window object

// function chai() {
//     // console.log(this); // Object [global] {... kuch toh rehta h}

//     // let username = "Ankit";
//     // console.log(this.username); // undefined, this works in object
// }

// chai();

// const chai = function () {
//     let username = "Ankit";
//     console.log(this.username); // undefined
// }


const chai = () => {
    let username = "Ankit";
    console.log(this); // {}
    console.log(this.username); // undefined
}

// chai();

// {}, mein return keyword likhna hi parta hai and (), mein return keyword nahi likhna parega 

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// Implicit return
// const addTwo = (num1, num2) => num1 + num2;

//(), mein return keyword nahi likhna parega 
// const addTwo = (num1, num2) => (num1 + num2);


const addTwo = () => ({username: "Ankit"});
console.log(addTwo()); // { username: 'Ankit' }