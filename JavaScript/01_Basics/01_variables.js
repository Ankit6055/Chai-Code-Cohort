const accountId = 98531; // Cannot change
let accountEmail = "Ankit@google.com";
var accountPassword = "12345";
accountCity = "Jamshedpur"; // Can also declare variable like this, but not preferred
let accountState;

// accountId = 2; // Not Allowed
accountEmail = "hc@hc.com";
accountPassword = "79036";
accountCity = "BBSR";

/* 
Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);