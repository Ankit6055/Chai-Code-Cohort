const user = {
    username: "Ankit",
    loginCount: 8,

    getUserDetails: function() {
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`)
        // console.log(this)
    }
}

// user.getUserDetails();
console.log(this);

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function() {
        console.log(`Welcome ${username}`);
    }

    return this;
}

const userOne = new User("Ankit", 9, true);
const userTwo = new User("Rahul", 7, false);
console.log(userTwo.constructor);