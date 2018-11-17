const Operations = require( "./src/db/Operations" );

( async () => {

    // Get the constructor for the operatoins.
    const operations = new Operations();
    await operations.initialize();


    let users = await operations.getAllUsersList();
    console.log( users );

    await operations.insertUser( "Ramkumar" );
    // await operations.deleteUser( "Ramkumar" );
    // await operations.updateUser( "Sambu", "Sambuheshwaran" );

    users = await operations.getAllUsersList();
    console.log( users );
    operations.finalize();
} )();
