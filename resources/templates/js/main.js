
/*------------------------------------*\
    #jQuery UI (plug-in)
\*------------------------------------*/

/**
 * Accordion (jQuery UI)
 */ 

$(document).ready(function($) {
	
	$('.accordion').find('.accordion__toggle').click(function(){
		
		// Expand or collapse this panel
		$(this).next('.accordion__content').slideToggle(200);
		
		// Toggle class
		$(this).toggleClass('collapsed')
		
		// Hide the other panels
		//$(".collapsible__content").not($(this).next()).slideUp('200');
	});
	
});


/**
 * Datepicker (jQuery UI)
 */ 

$( function() {
	
	$( ".datepicker" ).datepicker({
		changeMonth: true,
		changeYear: true
	});

});





/*------------------------------------*\
    #RESPONSIVE-NAV.JS (plug-in)
\*------------------------------------*/

/**
 * Creates classes to enable responsive navigation.
 */ 

$(function(){
	
	var navigation = responsiveNav(".site-nav__list", {
		customToggle: "#site-nav__toggle",
		open: function(){
			$("#site-nav__toggle").addClass('open');
		},
		close: function(){
			$("#site-nav__toggle").removeClass('open');
		}
	});
	
});;





/*------------------------------------*\
    #UNIFORM.JS (plug-in)
\*------------------------------------*/

/**
 * Styling selects and file inputs.
 */ 

$("select, input[type='file'], input[type='checkbox'], input[type='radio']").uniform({selectAutoWidth: false, fileButtonClass: 'btn'});





/*------------------------------------*\
    #FANCYBOX.JS (plug-in)
\*------------------------------------*/

/**
 * For content displayed in overlays.
 */

$(document).ready(function() {

	$(".fancybox").fancybox({
		margin: [20,40,20,40],
		padding: [20,20,0,20],
		openEffect: 'fade',
		openEasing: 'easeInQuad',
		openSpeed: 400,
		title: false,
		//closeBtn: false,
		//autoCenter: false,
		scrolling : 'no',	// turns off scrolling in box.
		fitToView : false,	// allows box to overflow out of viewport.
		autoSize: false,	// needs to be turned on for width/maxWidth to work.
		height: 'auto',		// if autoSize is set to 'false', this needs to be 'auto' so height matches content.
		width: '100%',
		minHeight: 0,
		maxWidth: 900,
		helpers: {
	    	overlay: {
				showEarly : false,
			}
		}
	});
});





/*------------------------------------*\
    #TOOLTIPS
\*------------------------------------*/

/**
 * Generic form tooltips, triggered by anchor/button click.
 */
 
$(document).ready(function() {
	 
	$('.btn-tooltip').click(
	
		function () {
			var status = $(this).parent().find('.tooltip').is(":visible");
			if(!status) {
				
				var current_element = $(this).parent().find('.tooltip');
				
				$('.tooltip').each(function() {
						$(this).fadeOut(20);
				});
				
				current_element.fadeIn(400);
			
			}else{
				$(this).parent().find('.tooltip').fadeOut(50);
			}
		}	
	);
	
	$(".has-tooltips .tooltip").hide();
	
	$('.btn-close').click(function () {
		$(this).parent('.tooltip').fadeOut(50);
	});
});


/**
 * Tooltip triggered by waypoints.js (plug-in).
 */
 
$(document).ready(function() {
	
	$('.tooltip--waypoint').waypoint(function() {
		$('.tooltip--waypoint').toggleClass('show');
	},
	{offset: '65%'});
});

