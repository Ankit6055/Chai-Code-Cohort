class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const Ankit = new User("Ankit");
// console.log(Ankit.createId()); // Ankit.createId is not a function(Coz it's static)

class Teacher extends User {
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const iphone = new Teacher("Iphone", "I@phone.com");
console.log(iphone.createId()); // iphone.createId is not a function(Coz it's static)