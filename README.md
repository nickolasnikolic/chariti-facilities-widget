# The following is a widget for the facilities portion of a project for VisitMilwaukee.

Usage of this widget is fairly straightforward. It is an imageView at this time:

Be sure to place a reference in your config.json file:

	...
    "dependencies": {
        "com.nickolasnikolic.facilities":"0.1"
    }
    
And include it where you wish for it appear as follows below.
Pay special attention to the **Widget tag.**
The location parameter may be set to any compatible image file in the maps directory:

	<Alloy>
	    <Window id="win">
	        <Widget src="com.nickolasnikolic.facilities" location="image-FileName-From-Widget-Map-Directory" />
	    </Window>
	</Alloy>

