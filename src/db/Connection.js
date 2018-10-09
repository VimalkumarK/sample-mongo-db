const MongoClient = require( "mongodb" ).MongoClient;

// Connection url.
// Enter password.
const url = "mongodb://viimaladmin:<PASSWORD>@vimalcluster-shard-00-00-bxkmy.mongodb.net:27017,vimalcluster-shard-00-01-bxkmy.mongodb.net:27017,vimalcluster-shard-00-02-bxkmy.mongodb.net:27017/test?ssl=true&replicaSet=VimalCluster-shard-0&authSource=admin&retryWrites=true";

// Database Name.
const dbName = "first_app_db";

export default class Connection {

	// Constructor.
	constructor() {
		this.connection = null;
	}

	/**
	 * Connect to the database.
	 */
	connect() {

		// Connect using MongoClient
		MongoClient.connect( url, { useNewUrlParser: true } )
		.then( ( connection ) => {

			// Set the connection.
			this.connection = connection.db( dbName );

			// Return the connection object.
			return this.connection;
		} )
		.catch( ( exception ) => {

			// Log the error message.
			console.log( exception );
		} );
	}

	/**
	 * Close the connection to db.
	 */
	close() {

		// Ensure the connection object is available.
		if( this.connection ) {
			this.connection.close();
		}
	}
}
