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
	}else{
		//@todo maybe go to a default map view?
		Ti.App.fireEvent( 'indoorMap', false );
		return false;
	}
}

function myIndoorMapsRoute( imageToDisplay ){
	try{
		var path = '/maps/' + imageToDisplay;
		$.image = WPATH( path );
		return true;
	}catch{
		return false;
	}
}

exports.init = myInit;
