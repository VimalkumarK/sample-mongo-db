const MongoClient = require( "mongodb" ).MongoClient;

// Connection url.
// Enter password.
const url = "mongodb://viimaladmin:<PASSWORD>@vimalcluster-shard-00-00-bxkmy.mongodb.net:27017,vimalcluster-shard-00-01-bxkmy.mongodb.net:27017,vimalcluster-shard-00-02-bxkmy.mongodb.net:27017/test?ssl=true&replicaSet=VimalCluster-shard-0&authSource=admin&retryWrites=true";

// Database Name.
const dbName = "first_app_db";

// Connect to the database.
function connect() {

	// Log.
	console.log( "Connecting to the database...!" );

	// Connect using MongoClient
	MongoClient.connect( url, { useNewUrlParser: true } )
	.then( ( client ) => {

		// Log the succeed result.
		console.log( "Connected successfully...!" );

		// Create a collection we want to drop later
		const col = client.db( dbName ).collection( "users" );

		// Show the list of users.
		col.find( {} ).toArray()
		.then( ( itemsResult ) => {

			const items = [];
			itemsResult.forEach( ( item ) => {
				items.push( item );
			} );

			console.log( items );
		} )
		.catch( ( exception ) => {
			console.log( exception );
		} );
	} )
	.catch( ( exception ) => {
		console.log( exception );
	} );	
}

connect();