/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$('#main_navigation a.icon').on('click', function(e) {
	$('#main_navigation ul').toggleClass('expanded');
	$('.nav-blur').toggleClass('blurred');
	$('#main_navigation ul > li > a.icon > i').toggleClass('fa-bars fa-close');
  e.preventDefault();
});

$('#main_navigation ul li a').not('#main_navigation a.icon').on('click', function() {
	$('#main_navigation ul').removeClass('expanded');
  $('.nav-blur').removeClass('blurred');
  // this needs to explicitly remove and add (rather than toggle)
  // so that a click on .home doesn't change .icon to fa-close
  $('#main_navigation ul > li > a.icon > i').removeClass('fa-close').addClass('fa-bars');
});


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

$('.carousel').carousel({ pause: "false" });