/* remove before client review */
/*$(window).load(function(){
   $('#buzz').modal('show');
});*/

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


$(window).load(
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcmVtb3ZlIGJlZm9yZSBjbGllbnQgcmV2aWV3ICovXG4vKiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG4gICAkKCcjYnV6eicpLm1vZGFsKCdzaG93Jyk7XG59KTsqL1xuXG4vKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcInJlc3BvbnNpdmVcIiBjbGFzcyB0byB0b3BuYXYgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGljb24gKi9cbiQoJyNtYWluX25hdmlnYXRpb24gYS5pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsJykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdCQoJy5uYXYtYmx1cicpLnRvZ2dsZUNsYXNzKCdibHVycmVkJyk7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEuaWNvbiA+IGknKS50b2dnbGVDbGFzcygnZmEtYmFycyBmYS1jbG9zZScpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnI21haW5fbmF2aWdhdGlvbiB1bCBsaSBhJykubm90KCcjbWFpbl9uYXZpZ2F0aW9uIGEuaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG4gICQoJy5uYXYtYmx1cicpLnJlbW92ZUNsYXNzKCdibHVycmVkJyk7XG4gIC8vIHRoaXMgbmVlZHMgdG8gZXhwbGljaXRseSByZW1vdmUgYW5kIGFkZCAocmF0aGVyIHRoYW4gdG9nZ2xlKVxuICAvLyBzbyB0aGF0IGEgY2xpY2sgb24gLmhvbWUgZG9lc24ndCBjaGFuZ2UgLmljb24gdG8gZmEtY2xvc2VcbiAgJCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS5pY29uID4gaScpLnJlbW92ZUNsYXNzKCdmYS1jbG9zZScpLmFkZENsYXNzKCdmYS1iYXJzJyk7XG59KTtcblxuXG4kKHdpbmRvdykubG9hZChcblx0ZnVuY3Rpb24gY2Fyb3VzZWxOb3JtYWxpemF0aW9uKCkge1xuXG5cdFx0dmFyIGl0ZW1zID0gJCgnI3F1b3RlX2Nhcm91c2VsIC5pdGVtJyksIC8vZ3JhYiBhbGwgc2xpZGVzXG5cdFx0XHRoZWlnaHRzID0gW10sIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIHN0b3JlIGhlaWdodCB2YWx1ZXNcblx0XHRcdHRhbGxlc3Q7IC8vY3JlYXRlIHZhcmlhYmxlIHRvIG1ha2Ugbm90ZSBvZiB0aGUgdGFsbGVzdCBzbGlkZVxuXG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0ZnVuY3Rpb24gbm9ybWFsaXplSGVpZ2h0cygpIHtcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkgeyAvL2FkZCBoZWlnaHRzIHRvIGFycmF5XG5cdFx0XHRcdFx0XHRoZWlnaHRzLnB1c2goJCh0aGlzKS5oZWlnaHQoKSk7IFxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRhbGxlc3QgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTsgLy9jYWNoZSBsYXJnZXN0IHZhbHVlXG5cdFx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0Jyx0YWxsZXN0ICsgJ3B4Jyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpO1xuXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGFsbGVzdCA9IDAsIGhlaWdodHMubGVuZ3RoID0gMDsgLy9yZXNldCB2YXJzXG5cdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLCcwJyk7IC8vcmVzZXQgbWluLWhlaWdodFxuXHRcdFx0XHR9KTsgXG5cdFx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTsgLy9ydW4gaXQgYWdhaW4gXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbilcblxuJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoeyBwYXVzZTogXCJmYWxzZVwiIH0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
