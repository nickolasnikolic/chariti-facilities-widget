var args = arguments[ 0 ] || {};

function myInit( args ){
	//get the passed params
	if( args ){
		//set the imageView to those values
		//send out notice if worked or not
		if( myIndoorMapsRoute( args.location ) ){
			Ti.App.fireEvent( 'indoorMap', true );
		}else{
			Ti.App.fireEvent( 'indoorMap', false );
		}
	}
}

function myIndoorMapsRoute( imageToDisplay ){
	try{
		var path = '/maps/' + imageToDisplay + '.jpg';
		$.image = WPATH( path );
		return true;
	}catch( e ){
		return false;
	}
}

exports.init = myInit;
