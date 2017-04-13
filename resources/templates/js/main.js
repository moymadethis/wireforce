
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