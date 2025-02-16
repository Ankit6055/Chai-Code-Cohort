var c = 300; // It has a Scope problem that's why we don't use it anymore!
let a = 300;
if (true) {
    let a = 10;
    const b = 20;
    var c = 99;
    console.log("Inner: ", a); // Inner:  10
}

// console.log(a); // 300
// console.log(b); // b is not defined
// console.log(c); // 99

// Bacche bare se le skte hai, but bare bacche se nhi le skte
function one() {
    const username = "Ankit";

    function two() {
        const website = "youtube";
        console.log(username); // Ankit
    } 

    // console.log(website); // website is not defined

    two();
}

// one();

if (true) {
    const username = "Ankit";
    if (username === "Ankit") {
        const website = " Youtube";
        console.log(username + website); // Ankit Youtube
    }

    // console.log(website); // website is not defined
}

// console.log(username); // username is not defined

// ****************Interesting******************

console.log(addone(5)); // 6

function addone(num) {
    return num + 1;
}

console.log(addone(5)); // 6


// addTwo(5); // Cannot access 'addTwo' before initialization

// const addTwo = function(num) { 
//     return num + 2;
// }

const addTwo = (num) => { 
    return num + 2;
}

addTwo(5); // It can be after Initialization