function greet(name) {
    console.log(`Hello, I am ${name}`);
}

// greet("Ankit");

let globalVar = "I am global";

function modifyGlobal() {
    globalVar = "I am modified";
    let blockScopedVar = "I am blocked-scoped";
}

modifyGlobal();

let config = function(){
    let setting = {
        theme: "dark"
    }
    return setting;
}()  // IIFE

// (()=>{})() // Use and throw function hote hai


let person1 = {
    name: "ravi",
    greet: function() {
        console.log(`Hello ${this.name}`); // this is used to point the current context
    }
}

let person2 = {
    name: "hitesh"
}

// person1.greet.call(person2); // context change karke keliye call use karte h
// person1.greet.call({ name: "Mukul" });

const bindGreet = person1.greet.bind(person2); // bind returns a new function
bindGreet(); // Hello hitesh
// console.log(bindGreet()); // Hello hitesh '\n' undefined

