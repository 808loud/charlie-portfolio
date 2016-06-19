/* remove before client review */
$(window).load(function(){
  // $('#dfs').modal('show');
});

$("#booking").submit(function(event){
  // cancels the form submission
  event.preventDefault();
  submitForm();
});

function submitForm(){
  // initiate variables with form content
  var name = $("#name").val();
  var email = $("#email").val();
  var company = $("#company").val();
  var message = $("#message").val();

  // send AJAX request to PHP file for processing
  $.ajax({
    type: "POST",
    url: "php/form-process.php",
    data: "name=" + name + "&email=" + email + "&company=" + company + "&message=" + message,
    success : function(text){
      if (text == "success"){
        bookingSubmitted();
      }
    }
  });
}

function bookingSubmitted(){
  $('#booking button[type="submit"]').attr('disabled', 'disabled').html('Submitted');
}

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
$('#main_navigation a.toggle').on('click', function(e) {
	$('#main_navigation ul').toggleClass('expanded');
	$('.nav-blur').toggleClass('blurred');
	$('#main_navigation ul > li > a.toggle > span').toggleClass('hidden');
  e.preventDefault();
});

$('#main_navigation ul li a').not('#main_navigation a.toggle').on('click', function() {
	$('#main_navigation ul').removeClass('expanded');
  $('.nav-blur').removeClass('blurred');
  // this needs to explicitly remove and add (rather than toggle)
  // so that a click on .home doesn't change .icon to fa-close
  // $('#main_navigation ul > li > a.toggle > span').removeClass('fa-close').addClass('fa-bars');
  $('#main_navigation ul > li > a.toggle > span.hamburger').removeClass('hidden');
  $('#main_navigation ul > li > a.toggle > span.close').addClass('hidden');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcmVtb3ZlIGJlZm9yZSBjbGllbnQgcmV2aWV3ICovXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xuICAvLyAkKCcjZGZzJykubW9kYWwoJ3Nob3cnKTtcbn0pO1xuXG4kKFwiI2Jvb2tpbmdcIikuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KXtcbiAgLy8gY2FuY2VscyB0aGUgZm9ybSBzdWJtaXNzaW9uXG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIHN1Ym1pdEZvcm0oKTtcbn0pO1xuXG5mdW5jdGlvbiBzdWJtaXRGb3JtKCl7XG4gIC8vIGluaXRpYXRlIHZhcmlhYmxlcyB3aXRoIGZvcm0gY29udGVudFxuICB2YXIgbmFtZSA9ICQoXCIjbmFtZVwiKS52YWwoKTtcbiAgdmFyIGVtYWlsID0gJChcIiNlbWFpbFwiKS52YWwoKTtcbiAgdmFyIGNvbXBhbnkgPSAkKFwiI2NvbXBhbnlcIikudmFsKCk7XG4gIHZhciBtZXNzYWdlID0gJChcIiNtZXNzYWdlXCIpLnZhbCgpO1xuXG4gIC8vIHNlbmQgQUpBWCByZXF1ZXN0IHRvIFBIUCBmaWxlIGZvciBwcm9jZXNzaW5nXG4gICQuYWpheCh7XG4gICAgdHlwZTogXCJQT1NUXCIsXG4gICAgdXJsOiBcInBocC9mb3JtLXByb2Nlc3MucGhwXCIsXG4gICAgZGF0YTogXCJuYW1lPVwiICsgbmFtZSArIFwiJmVtYWlsPVwiICsgZW1haWwgKyBcIiZjb21wYW55PVwiICsgY29tcGFueSArIFwiJm1lc3NhZ2U9XCIgKyBtZXNzYWdlLFxuICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgIGlmICh0ZXh0ID09IFwic3VjY2Vzc1wiKXtcbiAgICAgICAgYm9va2luZ1N1Ym1pdHRlZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGJvb2tpbmdTdWJtaXR0ZWQoKXtcbiAgJCgnI2Jvb2tpbmcgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpLmh0bWwoJ1N1Ym1pdHRlZCcpO1xufVxuXG4vKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcInJlc3BvbnNpdmVcIiBjbGFzcyB0byB0b3BuYXYgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGljb24gKi9cbiQoJyNtYWluX25hdmlnYXRpb24gYS50b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcblx0JCgnLm5hdi1ibHVyJykudG9nZ2xlQ2xhc3MoJ2JsdXJyZWQnKTtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS50b2dnbGUgPiBzcGFuJykudG9nZ2xlQ2xhc3MoJ2hpZGRlbicpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnI21haW5fbmF2aWdhdGlvbiB1bCBsaSBhJykubm90KCcjbWFpbl9uYXZpZ2F0aW9uIGEudG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcbiAgJCgnLm5hdi1ibHVyJykucmVtb3ZlQ2xhc3MoJ2JsdXJyZWQnKTtcbiAgLy8gdGhpcyBuZWVkcyB0byBleHBsaWNpdGx5IHJlbW92ZSBhbmQgYWRkIChyYXRoZXIgdGhhbiB0b2dnbGUpXG4gIC8vIHNvIHRoYXQgYSBjbGljayBvbiAuaG9tZSBkb2Vzbid0IGNoYW5nZSAuaWNvbiB0byBmYS1jbG9zZVxuICAvLyAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLnRvZ2dsZSA+IHNwYW4nKS5yZW1vdmVDbGFzcygnZmEtY2xvc2UnKS5hZGRDbGFzcygnZmEtYmFycycpO1xuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLnRvZ2dsZSA+IHNwYW4uaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLnRvZ2dsZSA+IHNwYW4uY2xvc2UnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG59KTtcblxuXG4kKHdpbmRvdykubG9hZChcblx0ZnVuY3Rpb24gY2Fyb3VzZWxOb3JtYWxpemF0aW9uKCkge1xuXG5cdFx0dmFyIGl0ZW1zID0gJCgnI3F1b3RlX2Nhcm91c2VsIC5pdGVtJyksIC8vZ3JhYiBhbGwgc2xpZGVzXG5cdFx0XHRoZWlnaHRzID0gW10sIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIHN0b3JlIGhlaWdodCB2YWx1ZXNcblx0XHRcdHRhbGxlc3Q7IC8vY3JlYXRlIHZhcmlhYmxlIHRvIG1ha2Ugbm90ZSBvZiB0aGUgdGFsbGVzdCBzbGlkZVxuXG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0ZnVuY3Rpb24gbm9ybWFsaXplSGVpZ2h0cygpIHtcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkgeyAvL2FkZCBoZWlnaHRzIHRvIGFycmF5XG5cdFx0XHRcdFx0XHRoZWlnaHRzLnB1c2goJCh0aGlzKS5oZWlnaHQoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGFsbGVzdCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpOyAvL2NhY2hlIGxhcmdlc3QgdmFsdWVcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLHRhbGxlc3QgKyAncHgnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YWxsZXN0ID0gMCwgaGVpZ2h0cy5sZW5ndGggPSAwOyAvL3Jlc2V0IHZhcnNcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsJzAnKTsgLy9yZXNldCBtaW4taGVpZ2h0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7IC8vcnVuIGl0IGFnYWluXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbilcblxuJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoeyBwYXVzZTogXCJmYWxzZVwiIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
