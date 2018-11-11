const Connection = require( "./Connection" );

class Operations {

	// Constructor.
	constructor() {
		this.connection  = new Connection();
	}

	/**
	 * Get the list of all the users.
	 *
	 * @returns {Array} - The users list array.
	 */
	async getAllUsersList() {

		try {

			// Connect to the db.
			await this.connection.connect();

			// Get the collection info.
			const userCollection = this.connection.db.collection( "users" );

			// Show the list of users.
			const itemsResult = await userCollection.find( {} ).toArray();

			const items = [];
			itemsResult.forEach( ( item ) => {
				items.push( item.name );
			} );

			// Close the connection.
			this.connection.close();

			// Return the list users.
			return items;

		} catch( exception ) {

			// Log the error.
			console.log( exception.stack );

			// Close the connection.
			this.connection.close();
		};
	}

	/**
	 * Insert one record.
	 * 
	 * @param {String} userName - The username.
	 */
	async insertUser( userName ) {

		// Validate the use name.
		if( userName ) {

			try {

			// Connect to the db.
			await this.connection.connect();

			// Get the collection info.
			const userCollection = this.connection.db.collection( "users" );

			// Insert a single document.
			await userCollection.insertOne( {
				name: userName
			} );

			// Close the connection.
			this.connection.close();

		} catch( exception ) {

			// Log the error.
			console.log( exception.stack );

			// Close the connection.
			this.connection.close();
		}
		}
	}
}

module.exports = Operations;
