/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$('#main_navigation .icon').on('click', function(e) {
  $('#main_navigation li').toggleClass("visible-xs-inline-block visible-sm-inline-block visible-md-inline-block visible-lg-inline-block ");
  $('#main_navigation li.icon a i').toggleClass('fa-bars fa-close');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcInJlc3BvbnNpdmVcIiBjbGFzcyB0byB0b3BuYXYgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGljb24gKi9cbiQoJyNtYWluX25hdmlnYXRpb24gLmljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICQoJyNtYWluX25hdmlnYXRpb24gbGknKS50b2dnbGVDbGFzcyhcInZpc2libGUteHMtaW5saW5lLWJsb2NrIHZpc2libGUtc20taW5saW5lLWJsb2NrIHZpc2libGUtbWQtaW5saW5lLWJsb2NrIHZpc2libGUtbGctaW5saW5lLWJsb2NrIFwiKTtcbiAgJCgnI21haW5fbmF2aWdhdGlvbiBsaS5pY29uIGEgaScpLnRvZ2dsZUNsYXNzKCdmYS1iYXJzIGZhLWNsb3NlJyk7XG4gIC8vICBcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJy5jYXJvdXNlbCcpLmNhcm91c2VsKHsgcGF1c2U6IFwiZmFsc2VcIiB9KTtcblxuJChkb2N1bWVudCkucmVhZHkoXG5cdGZ1bmN0aW9uIGNhcm91c2VsTm9ybWFsaXphdGlvbigpIHtcblxuXHRcdHZhciBpdGVtcyA9ICQoJyNxdW90ZV9jYXJvdXNlbCAuaXRlbScpLCAvL2dyYWIgYWxsIHNsaWRlc1xuXHRcdFx0aGVpZ2h0cyA9IFtdLCAvL2NyZWF0ZSBlbXB0eSBhcnJheSB0byBzdG9yZSBoZWlnaHQgdmFsdWVzXG5cdFx0XHR0YWxsZXN0OyAvL2NyZWF0ZSB2YXJpYWJsZSB0byBtYWtlIG5vdGUgb2YgdGhlIHRhbGxlc3Qgc2xpZGVcblxuXHRcdGlmIChpdGVtcy5sZW5ndGgpIHtcblx0XHRcdGZ1bmN0aW9uIG5vcm1hbGl6ZUhlaWdodHMoKSB7XG5cdFx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHsgLy9hZGQgaGVpZ2h0cyB0byBhcnJheVxuXHRcdFx0XHRcdFx0aGVpZ2h0cy5wdXNoKCQodGhpcykuaGVpZ2h0KCkpOyBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0YWxsZXN0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7IC8vY2FjaGUgbGFyZ2VzdCB2YWx1ZVxuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsdGFsbGVzdCArICdweCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTtcblxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRhbGxlc3QgPSAwLCBoZWlnaHRzLmxlbmd0aCA9IDA7IC8vcmVzZXQgdmFyc1xuXHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0JywnMCcpOyAvL3Jlc2V0IG1pbi1oZWlnaHRcblx0XHRcdFx0fSk7IFxuXHRcdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7IC8vcnVuIGl0IGFnYWluIFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG4pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
