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
  $('#main_navigation ul > li > a.icon > i').removeClass('fa-close');
  $('#main_navigation ul > li > a.icon > i').addClass('fa-bars');
});


/*
$('#main_navigation a').on('click', function() {
	switch () {

	}

	if( $(this).hasClass('icon') ) {
		console.log("icon clicked");
	} else if( $(this).hasClass('home') ) {
		console.log("home icon clicked");
	} else {
		console.log("other icon clicked");
	}
});
*/

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJyZXNwb25zaXZlXCIgY2xhc3MgdG8gdG9wbmF2IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uICovXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIGEuaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCcpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuXHQkKCcubmF2LWJsdXInKS50b2dnbGVDbGFzcygnYmx1cnJlZCcpO1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLmljb24gPiBpJykudG9nZ2xlQ2xhc3MoJ2ZhLWJhcnMgZmEtY2xvc2UnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJyNtYWluX25hdmlnYXRpb24gdWwgbGkgYScpLm5vdCgnI21haW5fbmF2aWdhdGlvbiBhLmljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCcpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuICAkKCcubmF2LWJsdXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLmljb24gPiBpJykucmVtb3ZlQ2xhc3MoJ2ZhLWNsb3NlJyk7XG4gICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEuaWNvbiA+IGknKS5hZGRDbGFzcygnZmEtYmFycycpO1xufSk7XG5cblxuLypcbiQoJyNtYWluX25hdmlnYXRpb24gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHRzd2l0Y2ggKCkge1xuXG5cdH1cblxuXHRpZiggJCh0aGlzKS5oYXNDbGFzcygnaWNvbicpICkge1xuXHRcdGNvbnNvbGUubG9nKFwiaWNvbiBjbGlja2VkXCIpO1xuXHR9IGVsc2UgaWYoICQodGhpcykuaGFzQ2xhc3MoJ2hvbWUnKSApIHtcblx0XHRjb25zb2xlLmxvZyhcImhvbWUgaWNvbiBjbGlja2VkXCIpO1xuXHR9IGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKFwib3RoZXIgaWNvbiBjbGlja2VkXCIpO1xuXHR9XG59KTtcbiovXG5cbi8qICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gIFx0Y29uc29sZS5sb2coXCJjbG9zZVwiKTtcbiAgXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsJykucmVtb3ZlQ2xhc3MoJ3Jlc3BvbnNpdmUnKTtcbiAgICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLmljb24gPiBpJykudG9nZ2xlQ2xhc3MoJ2ZhLWJhcnMgZmEtY2xvc2UnKTtcbiAgXHQkKCcubmF2LWJsdXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xuICBcdGUucHJldmVudERlZmF1bHQoKTtcbiAgfSk7XG59Ki9cblxuXG5cbi8qJCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0JCgnLm5hdi1ibHVyJykucmVtb3ZlQ2xhc3MoJ2JsdXJyZWQnKTtcbn0pOyovXG5cblxuXG4kKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7IHBhdXNlOiBcImZhbHNlXCIgfSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KFxuXHRmdW5jdGlvbiBjYXJvdXNlbE5vcm1hbGl6YXRpb24oKSB7XG5cblx0XHR2YXIgaXRlbXMgPSAkKCcjcXVvdGVfY2Fyb3VzZWwgLml0ZW0nKSwgLy9ncmFiIGFsbCBzbGlkZXNcblx0XHRcdGhlaWdodHMgPSBbXSwgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gc3RvcmUgaGVpZ2h0IHZhbHVlc1xuXHRcdFx0dGFsbGVzdDsgLy9jcmVhdGUgdmFyaWFibGUgdG8gbWFrZSBub3RlIG9mIHRoZSB0YWxsZXN0IHNsaWRlXG5cblx0XHRpZiAoaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRmdW5jdGlvbiBub3JtYWxpemVIZWlnaHRzKCkge1xuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7IC8vYWRkIGhlaWdodHMgdG8gYXJyYXlcblx0XHRcdFx0XHRcdGhlaWdodHMucHVzaCgkKHRoaXMpLmhlaWdodCgpKTsgXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGFsbGVzdCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpOyAvL2NhY2hlIGxhcmdlc3QgdmFsdWVcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLHRhbGxlc3QgKyAncHgnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YWxsZXN0ID0gMCwgaGVpZ2h0cy5sZW5ndGggPSAwOyAvL3Jlc2V0IHZhcnNcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsJzAnKTsgLy9yZXNldCBtaW4taGVpZ2h0XG5cdFx0XHRcdH0pOyBcblx0XHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpOyAvL3J1biBpdCBhZ2FpbiBcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
