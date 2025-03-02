// ************************* Nested Function ****************************

function one() {
    const username = "Ankit";
    function two() {
        const website = "youtube";
        console.log(username);
    }
    console.log(website); // ReferenceError: website is not defined

    two();
}

// one();

if (true) {
    const username = "Ankit";
    if (username === "Ankit") {
        const website = " Youtube";
        // console.log(username + website);
    }
    // console.log(website); // ReferenceError: website is not defined
}

// console.log(username); // ReferenceError: username is not defined

// ********************************* Interesting *********************************

addOne(5); // function will be executed 

function addOne(num) {
    return num + 1;
}

addOne(5);



addTwo(5); // ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num) {
    return num + 2;
}

addTwo(5);