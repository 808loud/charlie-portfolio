/* remove before client review */
$(window).load(function(){
   $('#buzz').modal('show');
});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcmVtb3ZlIGJlZm9yZSBjbGllbnQgcmV2aWV3ICovXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xuICAgJCgnI2J1enonKS5tb2RhbCgnc2hvdycpO1xufSk7XG5cbi8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwicmVzcG9uc2l2ZVwiIGNsYXNzIHRvIHRvcG5hdiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaWNvbiAqL1xuJCgnI21haW5fbmF2aWdhdGlvbiBhLmljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcblx0JCgnLm5hdi1ibHVyJykudG9nZ2xlQ2xhc3MoJ2JsdXJyZWQnKTtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS5pY29uID4gaScpLnRvZ2dsZUNsYXNzKCdmYS1iYXJzIGZhLWNsb3NlJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIHVsIGxpIGEnKS5ub3QoJyNtYWluX25hdmlnYXRpb24gYS5pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcbiAgJCgnLm5hdi1ibHVyJykucmVtb3ZlQ2xhc3MoJ2JsdXJyZWQnKTtcbiAgLy8gdGhpcyBuZWVkcyB0byBleHBsaWNpdGx5IHJlbW92ZSBhbmQgYWRkIChyYXRoZXIgdGhhbiB0b2dnbGUpXG4gIC8vIHNvIHRoYXQgYSBjbGljayBvbiAuaG9tZSBkb2Vzbid0IGNoYW5nZSAuaWNvbiB0byBmYS1jbG9zZVxuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLmljb24gPiBpJykucmVtb3ZlQ2xhc3MoJ2ZhLWNsb3NlJykuYWRkQ2xhc3MoJ2ZhLWJhcnMnKTtcbn0pO1xuXG5cbiQod2luZG93KS5sb2FkKFxuXHRmdW5jdGlvbiBjYXJvdXNlbE5vcm1hbGl6YXRpb24oKSB7XG5cblx0XHR2YXIgaXRlbXMgPSAkKCcjcXVvdGVfY2Fyb3VzZWwgLml0ZW0nKSwgLy9ncmFiIGFsbCBzbGlkZXNcblx0XHRcdGhlaWdodHMgPSBbXSwgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gc3RvcmUgaGVpZ2h0IHZhbHVlc1xuXHRcdFx0dGFsbGVzdDsgLy9jcmVhdGUgdmFyaWFibGUgdG8gbWFrZSBub3RlIG9mIHRoZSB0YWxsZXN0IHNsaWRlXG5cblx0XHRpZiAoaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRmdW5jdGlvbiBub3JtYWxpemVIZWlnaHRzKCkge1xuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7IC8vYWRkIGhlaWdodHMgdG8gYXJyYXlcblx0XHRcdFx0XHRcdGhlaWdodHMucHVzaCgkKHRoaXMpLmhlaWdodCgpKTsgXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGFsbGVzdCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpOyAvL2NhY2hlIGxhcmdlc3QgdmFsdWVcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLHRhbGxlc3QgKyAncHgnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YWxsZXN0ID0gMCwgaGVpZ2h0cy5sZW5ndGggPSAwOyAvL3Jlc2V0IHZhcnNcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsJzAnKTsgLy9yZXNldCBtaW4taGVpZ2h0XG5cdFx0XHRcdH0pOyBcblx0XHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpOyAvL3J1biBpdCBhZ2FpbiBcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuKVxuXG4kKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7IHBhdXNlOiBcImZhbHNlXCIgfSk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
