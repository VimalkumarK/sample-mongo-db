import Connection from "./Connection";

export default class Operations {

	// Constructor.
	constructor() {
		this.connectoin  = new Connection();
	}

	// Get all the list of users.
	getAllUsersName() {

		// Connect to the db.
		this.connectoin.connect().then( ( dbconnection ) => {

			// Get the collection info.
			const userCollection = dbconnection.collection( "users" );

			// Show the list of users.
			userCollection.find( {} ).toArray()
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

		} ).catch( ( excepion ) => {

			// Log the error.
			console.log( excepion );
		} );
	}
}
