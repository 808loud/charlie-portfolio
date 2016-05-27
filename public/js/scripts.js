
$('.carousel').carousel();

console.log("hi");

$(document).ready(
	function carouselNormalization() {

		var items = $('#quote_carousel .item'), //grab all slides
			heights = [], //create empty array to store height values
			tallest; //create variable to make note of the tallest slide

		if (items.length) {
			console.log("has length");
			function normalizeHeights() {
					console.log("normalize");
					items.each(function() { //add heights to array
						heights.push($(this).height()); 
					});
					tallest = Math.max.apply(null, heights); //cache largest value
					items.each(function() {
						$(this).css('min-height',tallest + 'px');
						console.log("set heights");
					});
			};
			normalizeHeights();
			console.log("ran the function");

			$(window).on('resize orientationchange', function () {
				tallest = 0, heights.length = 0; //reset vars
				items.each(function() {
					$(this).css('min-height','0'); //reset min-height
				}); 
				normalizeHeights(); //run it again 
				console.log("run on resize");
			});
		}
	}
)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiQoJy5jYXJvdXNlbCcpLmNhcm91c2VsKCk7XG5cbmNvbnNvbGUubG9nKFwiaGlcIik7XG5cbiQoZG9jdW1lbnQpLnJlYWR5KFxuXHRmdW5jdGlvbiBjYXJvdXNlbE5vcm1hbGl6YXRpb24oKSB7XG5cblx0XHR2YXIgaXRlbXMgPSAkKCcjcXVvdGVfY2Fyb3VzZWwgLml0ZW0nKSwgLy9ncmFiIGFsbCBzbGlkZXNcblx0XHRcdGhlaWdodHMgPSBbXSwgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gc3RvcmUgaGVpZ2h0IHZhbHVlc1xuXHRcdFx0dGFsbGVzdDsgLy9jcmVhdGUgdmFyaWFibGUgdG8gbWFrZSBub3RlIG9mIHRoZSB0YWxsZXN0IHNsaWRlXG5cblx0XHRpZiAoaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhcImhhcyBsZW5ndGhcIik7XG5cdFx0XHRmdW5jdGlvbiBub3JtYWxpemVIZWlnaHRzKCkge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwibm9ybWFsaXplXCIpO1xuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7IC8vYWRkIGhlaWdodHMgdG8gYXJyYXlcblx0XHRcdFx0XHRcdGhlaWdodHMucHVzaCgkKHRoaXMpLmhlaWdodCgpKTsgXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGFsbGVzdCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpOyAvL2NhY2hlIGxhcmdlc3QgdmFsdWVcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLHRhbGxlc3QgKyAncHgnKTtcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKFwic2V0IGhlaWdodHNcIik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpO1xuXHRcdFx0Y29uc29sZS5sb2coXCJyYW4gdGhlIGZ1bmN0aW9uXCIpO1xuXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGFsbGVzdCA9IDAsIGhlaWdodHMubGVuZ3RoID0gMDsgLy9yZXNldCB2YXJzXG5cdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLCcwJyk7IC8vcmVzZXQgbWluLWhlaWdodFxuXHRcdFx0XHR9KTsgXG5cdFx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTsgLy9ydW4gaXQgYWdhaW4gXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwicnVuIG9uIHJlc2l6ZVwiKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuKSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
