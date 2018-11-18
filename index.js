const Operations = require( "./src/db/Operations" );
const express = require( "express" );
const app = express();

// ( async () => {

//     // Get the constructor for the operatoins.
//     const operations = new Operations();
//     await operations.initialize();


//     let users = await operations.getAllUsersList();
//     console.log( users );

//     await operations.insertUser( "Ramkumar" );
//     // await operations.deleteUser( "Ramkumar" );
//     // await operations.updateUser( "Sambu", "Sambuheshwaran" );

//     users = await operations.getAllUsersList();
//     console.log( users );
//     operations.finalize();
// } )();

// Hello world.
app.get( "/hello", ( req, res ) => {

    const wish = {
        wish: "Hello world"
    };

    // Send hello world.
    res.json( wish );
} );

app.get( "/users", ( req, res ) => {

    const operations = new Operations();
    operations.getAllUsersList().then( ( users ) => {
        res.json( users );
    } );
} );

// Run the server in the port 8081.
const server = app.listen( 8081, () => {
    const host = server.address().address
    const port = server.address().port
    
    console.log( "Example app listening at http://%s:%s", host, port )
} );
