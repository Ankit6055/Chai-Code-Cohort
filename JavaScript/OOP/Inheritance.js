class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username);
        this.email = email;
        this.password = password;
    }

    addCouse() {
        console.log(`A new couse was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai", "Chai@teacher.com", "123");
chai.logMe();

const masalaChai = new User("MasalaChai");
masalaChai.logMe();

console.log(chai instanceof Teacher); // true
console.log(chai instanceof User); // true
console.log(masalaChai instanceof User); // true
console.log(masalaChai instanceof Teacher); // false

console.log(Teacher instanceof User); // false


class Student extends Teacher {
    constructor(username, roll) {
        super(username);
        this.roll = roll;
    }

    getRoll() {
        console.log(`Your Roll is ${this.roll}`);
    }
}

const child = new Student("Ankit", 34);
child.getRoll();