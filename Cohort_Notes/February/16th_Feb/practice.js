// function user(username = "Ankit",roll = 123) {
//     this.username = username;
//     this.roll = roll;
// };

// console.log(user.prototype);

// user.prototype.value = function() {
//     console.log(`${this.username}`);
// };

// user.value();

function Robot(name, batteryLevel) {
    // Initialize name and batteryLevel properties
    this.name = name;
    this.batteryLevel = batteryLevel;
}

Robot.prototype.charge = function() {
  this.batteryLevel = Math.min(this.batteryLevel + 20, 100);
}

Robot("Ankit", 20);
Robot.charge();