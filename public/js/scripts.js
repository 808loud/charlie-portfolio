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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcInJlc3BvbnNpdmVcIiBjbGFzcyB0byB0b3BuYXYgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGljb24gKi9cbiQoJyNtYWluX25hdmlnYXRpb24gLmljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS50b2dnbGVDbGFzcygncmVzcG9uc2l2ZScpO1xuXHQkKCcubmF2LWJsdXInKS50b2dnbGVDbGFzcygnYmx1cnJlZCcpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnI21haW5fbmF2aWdhdGlvbiB1bCBsaSBhJykubm90KCcjbWFpbl9uYXZpZ2F0aW9uIC5pY29uIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS5yZW1vdmVDbGFzcygncmVzcG9uc2l2ZScpO1xuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLmljb24gPiBpJykudG9nZ2xlQ2xhc3MoJ2ZhLWJhcnMgZmEtY2xvc2UnKTtcbiAgJCgnLm5hdi1ibHVyJykucmVtb3ZlQ2xhc3MoJ2JsdXJyZWQnKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cblxuLyogICQoJyNtYWluX25hdmlnYXRpb24gdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgXHRjb25zb2xlLmxvZyhcImNsb3NlXCIpO1xuICBcdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS5yZW1vdmVDbGFzcygncmVzcG9uc2l2ZScpO1xuICAgICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEuaWNvbiA+IGknKS50b2dnbGVDbGFzcygnZmEtYmFycyBmYS1jbG9zZScpO1xuICBcdCQoJy5uYXYtYmx1cicpLnJlbW92ZUNsYXNzKCdibHVycmVkJyk7XG4gIFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9KTtcbn0qL1xuXG5cblxuLyokKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHQkKCcubmF2LWJsdXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xufSk7Ki9cblxuXG5cbiQoJy5jYXJvdXNlbCcpLmNhcm91c2VsKHsgcGF1c2U6IFwiZmFsc2VcIiB9KTtcblxuJChkb2N1bWVudCkucmVhZHkoXG5cdGZ1bmN0aW9uIGNhcm91c2VsTm9ybWFsaXphdGlvbigpIHtcblxuXHRcdHZhciBpdGVtcyA9ICQoJyNxdW90ZV9jYXJvdXNlbCAuaXRlbScpLCAvL2dyYWIgYWxsIHNsaWRlc1xuXHRcdFx0aGVpZ2h0cyA9IFtdLCAvL2NyZWF0ZSBlbXB0eSBhcnJheSB0byBzdG9yZSBoZWlnaHQgdmFsdWVzXG5cdFx0XHR0YWxsZXN0OyAvL2NyZWF0ZSB2YXJpYWJsZSB0byBtYWtlIG5vdGUgb2YgdGhlIHRhbGxlc3Qgc2xpZGVcblxuXHRcdGlmIChpdGVtcy5sZW5ndGgpIHtcblx0XHRcdGZ1bmN0aW9uIG5vcm1hbGl6ZUhlaWdodHMoKSB7XG5cdFx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHsgLy9hZGQgaGVpZ2h0cyB0byBhcnJheVxuXHRcdFx0XHRcdFx0aGVpZ2h0cy5wdXNoKCQodGhpcykuaGVpZ2h0KCkpOyBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0YWxsZXN0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7IC8vY2FjaGUgbGFyZ2VzdCB2YWx1ZVxuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsdGFsbGVzdCArICdweCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTtcblxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRhbGxlc3QgPSAwLCBoZWlnaHRzLmxlbmd0aCA9IDA7IC8vcmVzZXQgdmFyc1xuXHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0JywnMCcpOyAvL3Jlc2V0IG1pbi1oZWlnaHRcblx0XHRcdFx0fSk7IFxuXHRcdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7IC8vcnVuIGl0IGFnYWluIFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG4pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
