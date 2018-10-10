const Connection = require( "./Connection" );

class Operations {

	// Constructor.
	constructor() {
		this.connectoin  = new Connection();
	}

	// Get all the list of users.
	getAllUsersName() {

		// Connect to the db.
		this.connectoin.connect().then( ( client ) => {

			// Get the collection info.
			const userCollection = client.collection( "users" );

			// Show the list of users.
			userCollection.find( {} ).toArray()
			.then( ( itemsResult ) => {

				const items = [];
				itemsResult.forEach( ( item ) => {
					items.push( item );
				} );

				console.log( items );

				// Close the connection.
				this.connectoin.close();
			} )
			.catch( ( exception ) => {

				// Log the error.
				console.log( exception );

				// Close the connection.
				this.connectoin.close();
			} );

		} ).catch( ( excepion ) => {

			// Log the error.
			console.log( excepion );
		} );
	}
}

module.exports = Operations;
