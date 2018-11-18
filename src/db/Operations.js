const Connection = require( "./Connection" );
const assert = require( "assert" );

class Operations {

	// Constructor.
	constructor() {
		this.connection  = new Connection();
	}

	/**
	 * Initialize the connection.
	 */
	async initialize() {

		// Connect to the db.
		if( !this.connection.db ) {
			await this.connection.connect();
		}
	}

	/**
	 * Get the list of all the users.
	 *
	 * @returns {Array} - The users list array.
	 */
	async getAllUsersList() {

		try {

			// Connect to the db.
			await this.initialize();

			assert.ok( this.connection.db, "DB isn't connected!" );

			// Get the collection info.
			const userCollection = this.connection.db.collection( "users" );

			// Show the list of users.
			const itemsResult = await userCollection.find( {} ).toArray();

			const items = [];
			itemsResult.forEach( ( item ) => {
				items.push( item.name );
			} );

			// await this.finalize();

			// Return the list users.
			return items;

		} catch( exception ) {

			// Log the error.
			console.log( exception.stack );
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
				await this.initialize();
				
				assert.ok( this.connection.db, "DB isn't connected!" );

				// Get the collection info.
				const userCollection = this.connection.db.collection( "users" );

				// Insert a single document.
				await userCollection.insertOne( {
					name: userName
				} );

			} catch( exception ) {

				// Log the error.
				console.log( exception.stack );
			}
		}
	}

	/**
	 * Delete one record.
	 * 
	 * @param {String} userName - The username.
	 */
	async deleteUser( userName ) {

		// Validate the use name.
		if( userName ) {

			try {

				// Connect to the db.
				await this.initialize();
				
				assert.ok( this.connection.db, "DB isn't connected!" );

				// Get the collection info.
				const userCollection = this.connection.db.collection( "users" );

				// Delete a single document.
				await userCollection.deleteOne( {
					name: userName
				} );

			} catch( exception ) {

				// Log the error.
				console.log( exception.stack );
			}
		}
	}

	/**
	 * Update one record.
	 * 
	 * @param {String} oldUserName - The exist username.
	 * @param {String} newUserName - The new username.
	 */
	async updateUser( oldUserName, newUserName ) {

		// Validate the use name.
		if( oldUserName && newUserName ) {

			try {

				// Connect to the db.
				await this.initialize();
				
				assert.ok( this.connection.db, "DB isn't connected!" );

				// Get the collection info.
				const userCollection = this.connection.db.collection( "users" );

				// Update a single document.
				await userCollection.updateOne( {
					name: oldUserName
				}, {
					$set: { name: newUserName }
				} );

			} catch( exception ) {

				// Log the error.
				console.log( exception.stack );
			}
		}
	}

	/**
	 * Finalize the database connection.
	 */
	async finalize() {

		// Close the connection.
		await this.connection.close();
	}
}

module.exports = Operations;
