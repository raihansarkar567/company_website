function runExample3() {
    $("#custom-places").mapsed({
		showOnLoad: 	
		[
			// City Varieties
			{
				// flag that this place should have the tooltip shown when the map is first loaded
				autoShow: true,
				// flags the user can edit this place
				lat: 23.851483,
				lng:90.411524,
				name: "SEO Offce",
				street: "Over the rainbow, Up high way",
				userData: 99
			},
			// Random made up CUSTOM place

		]
		
	});									
}


$(document).ready(function() {
	runExample3();
});


