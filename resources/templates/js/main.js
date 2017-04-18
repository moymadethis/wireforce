
/*------------------------------------*\
    #RESPONSIVE-NAV.JS (plug-in)
\*------------------------------------*/

/**
 * Creates classes to enable responsive navigation.
 */

jQuery(function($){
	if ($(".site-nav ul")) {
		var navigation = responsiveNav(".site-nav ul", {
			customToggle: "#site-nav__toggle",
			open: function(){
				$("#site-nav__toggle").addClass('open');
			},
			close: function(){
				$("#site-nav__toggle").removeClass('open');
			}
		});
	}
});



/*------------------------------------*\
    #UNIFORM.JS (plug-in)
\*------------------------------------*/

/**
 * Styling selects and file inputs.
 */
 
jQuery(function($){
	$("select, input[type='file'], input[type='checkbox'], input[type='radio']").uniform({selectAutoWidth: false, fileButtonClass: 'btn'});
});





/* ==========================================================================
   #GOOGLE MAP
   ========================================================================== */

/* 
 * When the window has finished loading create our google map below.
 *
 * 1. IF Statement to only run script if map is present. Otherwise it causes
 *    console errors.
 */
 
if (document.getElementById('map')) {
	google.maps.event.addDomListener(window, 'load', init);
}

/* 
 * Basic options for a simple Google Map. For more options see:
 * https://developers.google.com/maps/documentation/javascript/reference#MapOptions
 *
 * 1. How zoomed in you want the map to start at (always required)
 * 2. The latitude and longitude to center the map (always required).
 * 3. How you would like to style the map. This is where you would paste any
 *    style found on Snazzy Maps.
 * 4. Prevent map from being draggable.
 * 5. Hide map/satellite toggle.
 * 6. Hide "Street View" button.
 */
 
function init() {
	
	var mapOptions = {
		zoom: 15, /* [1] */ 
		center: new google.maps.LatLng(54.969056, -1.627551), /* [2] */ 
		//draggable: false, /* [4] */
		mapTypeControl: false, /* [5] */
		streetViewControl: false, /* [6] */
		styles: /* [3] */
		/* Tweaked version of: https://snazzymaps.com/style/8097/wy */
		// Hide 'Road > Highway > Labels' then re-enabled 'Road > Controlled Access > Labels. Due to Google Map default colouring, turning the labels to grey made the Highway road labels illegible.
		[{"featureType":"all","elementType":"geometry.fill","stylers":[{"weight":"2.00"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"color":"#9c9c9c"}]},{"featureType":"all","elementType":"labels.text","stylers":[{"visibility":"on"},{"color":"#404546"},{"weight":".25"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":"2"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape.man_made","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#eeeeee"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#7b7b7b"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff"},{"weight":"3"},{"visibility":"on"}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.highway.controlled_access","elementType":"labels","stylers":[{"visibility":"on"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"all","stylers":[{"visibility":"on"},{"weight":".75"},{"color":"#b1b6b7"}]},{"featureType":"transit.station","elementType":"labels.text","stylers":[{"visibility":"simplified"},{"color":"#404546"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"visibility":"on"},{"hue":"#ff7400"},{"gamma":"1.00"},{"saturation":"0"},{"lightness":"0"},{"weight":"1"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#c8d7d4"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#070707"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#ffffff" }]}]
	};

	/* 
	 * Get the HTML DOM element that will contain your map. We are using a div with
	 * id="map" seen below in the <body>
	 */
	
	 var mapElement = document.getElementById('map');
	
	/* 
	 * Create the Google Map using our element and options defined above.
	 *
	 * 1. Map varible.
	 * 2. Marker variable so we can specify a retina image and resize.
	 */
	 
	var map = new google.maps.Map(mapElement, mapOptions); /* [1] */
	var mapIcon = new google.maps.MarkerImage("img/interface/map-marker@2x.png", null, null, null, new google.maps.Size(100,78)); /* [2] */
	
	/* 
	 * Let's also add a marker while we're at it.
	 */
	 
	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(54.969056, -1.627551),
		map: map,
		flat: true,
		title: 'Future&Co.',
		icon: mapIcon,
		//animation: google.maps.Animation.DROP
	});
	
	/* 
	 * Center Google map on browser resize.
	 */
	
	google.maps.event.addDomListener(window, "resize", function() {
	    var center = map.getCenter();
	    google.maps.event.trigger(map, "resize");
	    map.setCenter(center); 
	});
}