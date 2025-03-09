const accountId = 144553;
let accountEmail = "mario@thenetninja.co.uk";
var accountPassword = "supersecret";
accountCity = "London";
let accountState;

// accountId = 2; // error
accountEmail = "mario@ninja.co.uk";
accountPassword = "ultrasecret";
accountCity = "Manchester";
accountState = "UK";

console.table(accountId, accountEmail, accountPassword, accountCity, accountState);

/* Prefer not to uuse var becasuse of issue in block scope and functional scope */