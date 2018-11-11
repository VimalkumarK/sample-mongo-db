const Operations = require( "./src/db/Operations" );

( async () => {

    // Get the constructor for the operatoins.
    const operations = new Operations();
    let users = await operations.getAllUsersList();
    console.log( users );
    // await operations.insertUser( "Abdullah" );
    // let users = await operations.getAllUsersList();
    // console.log( users );
} )();
