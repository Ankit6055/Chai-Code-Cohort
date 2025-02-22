function prepareChai(type) {
    if (typeof type !== "string") {
        console.log("Invalid Input");
        return;
    }
    if (type.toLowerCase() === "masala chai") {
        console.log("Adding Spices to the Chai");
    }
    else {
        console.log("Preparing regular Chai");
    }
}

// prepareChai("Masala Chai");
// prepareChai("Ginger Chai");
// prepareChai(87);

/*
Ek online store mein, agar customer ka total bill amount 1000 sen zada hai, toh 10% discount milta
hai. Nahi toh, full amount pay karna padta hai.
*/

function calculateTotal(amount) { // Parameters
    // Convert to number
    // let amt = Number(amount);

    // if (amt > 1000) {
    //     return amt * 0.9;
    // }

    // return amt;

    return amount > 1000 ? amount * 0.9 : amount; // Ternary Operator
}

let finalBill = calculateTotal(900); // Will store the returned value

/*
Ek traffic light system meinn, agar light "red" hai, toh "Stop" print karo. Agar "yellow" 
hai, toh "Slow Down" print karo. Agar "green" hai, toh "Go" print karo.
*/

// Control Flow Statement - Switch Case
function trafficLight(color) {
    let clr = String(color).toLowerCase();
    switch(clr) {
        case "red": 
            console.log("Stop");
            break;
        case "yellow": 
            console.log("Slow Down");
            break;
        case "green": 
            console.log("Go");
            break;
        default:
            console.log("Chalan kaat do");
    }
}

trafficLight("Yellow");


function checkTruthyValue(value) {
    if (value) {
        console.log("Truthy");
    }
    else {
        console.log("Falsy");
    }
}

checkTruthyValue(1); // Truthy
checkTruthyValue(0); // Falsy
checkTruthyValue("Ankit"); // Truthy
checkTruthyValue(""); // Falsy
checkTruthyValue([]); // Truthy
checkTruthyValue({}); // Truthy
checkTruthyValue([1, 2, 3]); // Truthy


// Parenthesis are your best friend for production grade code!
function login(username, password) {
    if (username === "admin" && (password === "123" || loginIp === "127")) {
        console.log("Loggin Successful");
    }
    else {
        console.log("Invalid Credentials");
    }
}