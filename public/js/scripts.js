
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4kKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7IHBhdXNlOiBcImZhbHNlXCIgfSk7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KFxuXHRmdW5jdGlvbiBjYXJvdXNlbE5vcm1hbGl6YXRpb24oKSB7XG5cblx0XHR2YXIgaXRlbXMgPSAkKCcjcXVvdGVfY2Fyb3VzZWwgLml0ZW0nKSwgLy9ncmFiIGFsbCBzbGlkZXNcblx0XHRcdGhlaWdodHMgPSBbXSwgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gc3RvcmUgaGVpZ2h0IHZhbHVlc1xuXHRcdFx0dGFsbGVzdDsgLy9jcmVhdGUgdmFyaWFibGUgdG8gbWFrZSBub3RlIG9mIHRoZSB0YWxsZXN0IHNsaWRlXG5cblx0XHRpZiAoaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRmdW5jdGlvbiBub3JtYWxpemVIZWlnaHRzKCkge1xuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7IC8vYWRkIGhlaWdodHMgdG8gYXJyYXlcblx0XHRcdFx0XHRcdGhlaWdodHMucHVzaCgkKHRoaXMpLmhlaWdodCgpKTsgXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGFsbGVzdCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpOyAvL2NhY2hlIGxhcmdlc3QgdmFsdWVcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLHRhbGxlc3QgKyAncHgnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YWxsZXN0ID0gMCwgaGVpZ2h0cy5sZW5ndGggPSAwOyAvL3Jlc2V0IHZhcnNcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsJzAnKTsgLy9yZXNldCBtaW4taGVpZ2h0XG5cdFx0XHRcdH0pOyBcblx0XHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpOyAvL3J1biBpdCBhZ2FpbiBcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
