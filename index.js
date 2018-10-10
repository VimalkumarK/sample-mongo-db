const Operations = require( "./src/db/Operations" );

console.log( Operations );

// Get the constructor for the operatoins.
const operations = new Operations();
operations.getAllUsersName();