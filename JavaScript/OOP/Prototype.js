let myHeros = ["Thor", "Spiderman"];

let heroPower = {
    Thor: "hammer",
    Spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.Spiderman}`);
    }
}

Object.prototype.Ankit = function() {
    console.log(`Ankit is present in all objects`);
}

Array.prototype.heyAnkit = function() {
    console.log(`Ankit says hello`);
}

myHeros.heyAnkit();
myHeros.Ankit();
// heroPower.heyAnkit(); // Error
heroPower.Ankit();

// Inheritance

const User = {
    name: "Chai",
    email: "Chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignments: 'JS Assignments',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User;

// Modern Syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode   ";

String.prototype.trueLength = function() {
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength();
"Ankit   ".trueLength(); // True length is: 5