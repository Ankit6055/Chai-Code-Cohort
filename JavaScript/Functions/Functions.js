function sayMyName() {
    console.log("A");
    console.log("N");
    console.log("K");
    console.log("I");
    console.log("T");
}

// sayMyName();

function addTwoNumber(num1, num2) {
    // console.log(num1 + num2);

    // let result = num1 + num2;
    // return result;
    
    return num1 + num2;
}

// const result = addTwoNumber(10, 20);
// console.log("Result: ", result);

let user = "Ankit";
console.log(!user); // false

function loginUserMessage(username = "Ankit") {
    if (!username) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`;
}

console.log(loginUserMessage());
console.log(loginUserMessage("Rahul"));


function calculateCartPrice(val1, val2, ...num1) {
    return num1; // [ 30, 40, 50 ] returns an array
}

// console.log(calculateCartPrice(10, 20, 30, 40, 50));

const User = {
    username: "Ankit",
    prices: 199
}

function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
}

// handleObject(User);
handleObject({
    username: "Rahul",
    price: 69
});

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([10, 20, 20, 30]));