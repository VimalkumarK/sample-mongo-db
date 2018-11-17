const MongoClient = require( "mongodb" ).MongoClient;

// Connection url.
// Enter password.
const url = "mongodb://viimaladmin:**@vimalcluster-shard-00-00-bxkmy.mongodb.net:27017,vimalcluster-shard-00-01-bxkmy.mongodb.net:27017,vimalcluster-shard-00-02-bxkmy.mongodb.net:27017/test?ssl=true&replicaSet=VimalCluster-shard-0&authSource=admin&retryWrites=true";

// Database Name.
const dbName = "first_app_db";
const client = new MongoClient(  url, { useNewUrlParser: true, ssl: true }  );

class Connection {

	// Constructor.
	constructor() {
		this.db = null;
	}

	/**
	 * Connect to the database.
	 */
	async connect() {

		try {

			// Connect using MongoClient.
			await client.connect();

			// Set the connection.
			this.db = client.db( dbName );

		} catch( exception ) {

				// Log the error message.
				console.log( exception.stack );
			};
		}

	/**
	 * Close the connection to db.
	 */
	async close() {

		// Ensure the connection object is available.
		if( client ) {
			await client.close();
		}
	}
}

module.exports = Connection;
