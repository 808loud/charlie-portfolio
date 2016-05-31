/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$('#main_navigation .icon').on('click', function(e) {
	$('#main_navigation ul.topnav').toggleClass('responsive');
  //$('#main_navigation li').toggleClass("visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block ");
  $('#main_navigation li.icon a i').toggleClass('fa-bars fa-close');
  $('.nav-blur').toggleClass('blurred');
  //  
  e.preventDefault();
});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJyZXNwb25zaXZlXCIgY2xhc3MgdG8gdG9wbmF2IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uICovXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIC5pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsLnRvcG5hdicpLnRvZ2dsZUNsYXNzKCdyZXNwb25zaXZlJyk7XG4gIC8vJCgnI21haW5fbmF2aWdhdGlvbiBsaScpLnRvZ2dsZUNsYXNzKFwidmlzaWJsZS14cy1pbmxpbmUtYmxvY2sgdmlzaWJsZS1zbS1pbmxpbmUtYmxvY2sgdmlzaWJsZS1tZC1pbmxpbmUtYmxvY2sgdmlzaWJsZS1sZy1pbmxpbmUtYmxvY2sgXCIpO1xuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIGxpLmljb24gYSBpJykudG9nZ2xlQ2xhc3MoJ2ZhLWJhcnMgZmEtY2xvc2UnKTtcbiAgJCgnLm5hdi1ibHVyJykudG9nZ2xlQ2xhc3MoJ2JsdXJyZWQnKTtcbiAgLy8gIFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoeyBwYXVzZTogXCJmYWxzZVwiIH0pO1xuXG4kKGRvY3VtZW50KS5yZWFkeShcblx0ZnVuY3Rpb24gY2Fyb3VzZWxOb3JtYWxpemF0aW9uKCkge1xuXG5cdFx0dmFyIGl0ZW1zID0gJCgnI3F1b3RlX2Nhcm91c2VsIC5pdGVtJyksIC8vZ3JhYiBhbGwgc2xpZGVzXG5cdFx0XHRoZWlnaHRzID0gW10sIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIHN0b3JlIGhlaWdodCB2YWx1ZXNcblx0XHRcdHRhbGxlc3Q7IC8vY3JlYXRlIHZhcmlhYmxlIHRvIG1ha2Ugbm90ZSBvZiB0aGUgdGFsbGVzdCBzbGlkZVxuXG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0ZnVuY3Rpb24gbm9ybWFsaXplSGVpZ2h0cygpIHtcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkgeyAvL2FkZCBoZWlnaHRzIHRvIGFycmF5XG5cdFx0XHRcdFx0XHRoZWlnaHRzLnB1c2goJCh0aGlzKS5oZWlnaHQoKSk7IFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRhbGxlc3QgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTsgLy9jYWNoZSBsYXJnZXN0IHZhbHVlXG5cdFx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0Jyx0YWxsZXN0ICsgJ3B4Jyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpO1xuXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGFsbGVzdCA9IDAsIGhlaWdodHMubGVuZ3RoID0gMDsgLy9yZXNldCB2YXJzXG5cdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLCcwJyk7IC8vcmVzZXQgbWluLWhlaWdodFxuXHRcdFx0XHR9KTsgXG5cdFx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTsgLy9ydW4gaXQgYWdhaW4gXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbikiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
