/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$('#main_navigation .icon').on('click', function(e) {
	$('#main_navigation ul').toggleClass('responsive');
	$('.nav-blur').toggleClass('blurred');
  e.preventDefault();
});

$('#main_navigation ul li a').not('#main_navigation .icon a').on('click', function(e) {
	$('#main_navigation ul').removeClass('responsive');
  $('#main_navigation ul > li > a.icon > i').toggleClass('fa-bars fa-close');
  $('.nav-blur').removeClass('blurred');
  e.preventDefault();
});


/*  $('#main_navigation ul li a').on('click', function(e) {
  	console.log("close");
  	$('#main_navigation ul').removeClass('responsive');
    $('#main_navigation ul > li > a.icon > i').toggleClass('fa-bars fa-close');
  	$('.nav-blur').removeClass('blurred');
  	e.preventDefault();
  });
}*/



/*$('#main_navigation ul > li > a').on('click', function(e) {
	$('.nav-blur').removeClass('blurred');
});*/



$('.carousel').carousel({ pause: "false" });

$(document).ready(
	function carouselNormalization() {

		var items = $('#quote_carousel .item'), //grab all slides
			heights = [], //create empty array to store height values
			tallest; //create variable to make note of the tallest slide

		if (items.length) {
			function normalizeHeights() {
					items.each(function() { //add heights to array
						heights.push($(this).height()); 
					});
					tallest = Math.max.apply(null, heights); //cache largest value
					items.each(function() {
						$(this).css('min-height',tallest + 'px');
					});
			};
			normalizeHeights();

			$(window).on('resize orientationchange', function () {
				tallest = 0, heights.length = 0; //reset vars
				items.each(function() {
					$(this).css('min-height','0'); //reset min-height
				}); 
				normalizeHeights(); //run it again 
			});
		}
	}
)