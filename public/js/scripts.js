/* remove before client review */
/*$(window).load(function(){
   $('#buzz').modal('show');
});*/

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
        data: "name=" + name + "&email=" + email + "&company" + company + "&message=" + message,
        success : function(text){
            if (text == "success"){
                bookingSubmitted();
            }
        }
    });
}

function bookingSubmitted(){
    $('#msgSubmit').removeClass('hidden');
    $('#booking button[type="submit"]').attr('disabled', 'disabled');
}

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHJlbW92ZSBiZWZvcmUgY2xpZW50IHJldmlldyAqL1xuLyokKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xuICAgJCgnI2J1enonKS5tb2RhbCgnc2hvdycpO1xufSk7Ki9cblxuJChcIiNib29raW5nXCIpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gICAgLy8gY2FuY2VscyB0aGUgZm9ybSBzdWJtaXNzaW9uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzdWJtaXRGb3JtKCk7XG59KTtcblxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpe1xuICAgIC8vIGluaXRpYXRlIHZhcmlhYmxlcyB3aXRoIGZvcm0gY29udGVudFxuICAgIHZhciBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xuICAgIHZhciBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XG4gICAgdmFyIGNvbXBhbnkgPSAkKFwiI2NvbXBhbnlcIikudmFsKCk7XG4gICAgdmFyIG1lc3NhZ2UgPSAkKFwiI21lc3NhZ2VcIikudmFsKCk7XG5cbiAgICAvLyBzZW5kIEFKQVggcmVxdWVzdCB0byBQSFAgZmlsZSBmb3IgcHJvY2Vzc2luZ1xuICAgICQuYWpheCh7XG4gICAgICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgICAgICB1cmw6IFwicGhwL2Zvcm0tcHJvY2Vzcy5waHBcIixcbiAgICAgICAgZGF0YTogXCJuYW1lPVwiICsgbmFtZSArIFwiJmVtYWlsPVwiICsgZW1haWwgKyBcIiZjb21wYW55XCIgKyBjb21wYW55ICsgXCImbWVzc2FnZT1cIiArIG1lc3NhZ2UsXG4gICAgICAgIHN1Y2Nlc3MgOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgICAgICAgIGlmICh0ZXh0ID09IFwic3VjY2Vzc1wiKXtcbiAgICAgICAgICAgICAgICBib29raW5nU3VibWl0dGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYm9va2luZ1N1Ym1pdHRlZCgpe1xuICAgICQoJyNtc2dTdWJtaXQnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgJCgnI2Jvb2tpbmcgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xufVxuXG4vKiBUb2dnbGUgYmV0d2VlbiBhZGRpbmcgYW5kIHJlbW92aW5nIHRoZSBcInJlc3BvbnNpdmVcIiBjbGFzcyB0byB0b3BuYXYgd2hlbiB0aGUgdXNlciBjbGlja3Mgb24gdGhlIGljb24gKi9cbiQoJyNtYWluX25hdmlnYXRpb24gYS5pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsJykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdCQoJy5uYXYtYmx1cicpLnRvZ2dsZUNsYXNzKCdibHVycmVkJyk7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEuaWNvbiA+IGknKS50b2dnbGVDbGFzcygnZmEtYmFycyBmYS1jbG9zZScpO1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG59KTtcblxuJCgnI21haW5fbmF2aWdhdGlvbiB1bCBsaSBhJykubm90KCcjbWFpbl9uYXZpZ2F0aW9uIGEuaWNvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG4gICQoJy5uYXYtYmx1cicpLnJlbW92ZUNsYXNzKCdibHVycmVkJyk7XG4gIC8vIHRoaXMgbmVlZHMgdG8gZXhwbGljaXRseSByZW1vdmUgYW5kIGFkZCAocmF0aGVyIHRoYW4gdG9nZ2xlKVxuICAvLyBzbyB0aGF0IGEgY2xpY2sgb24gLmhvbWUgZG9lc24ndCBjaGFuZ2UgLmljb24gdG8gZmEtY2xvc2VcbiAgJCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS5pY29uID4gaScpLnJlbW92ZUNsYXNzKCdmYS1jbG9zZScpLmFkZENsYXNzKCdmYS1iYXJzJyk7XG59KTtcblxuXG4kKHdpbmRvdykubG9hZChcblx0ZnVuY3Rpb24gY2Fyb3VzZWxOb3JtYWxpemF0aW9uKCkge1xuXG5cdFx0dmFyIGl0ZW1zID0gJCgnI3F1b3RlX2Nhcm91c2VsIC5pdGVtJyksIC8vZ3JhYiBhbGwgc2xpZGVzXG5cdFx0XHRoZWlnaHRzID0gW10sIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIHN0b3JlIGhlaWdodCB2YWx1ZXNcblx0XHRcdHRhbGxlc3Q7IC8vY3JlYXRlIHZhcmlhYmxlIHRvIG1ha2Ugbm90ZSBvZiB0aGUgdGFsbGVzdCBzbGlkZVxuXG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0ZnVuY3Rpb24gbm9ybWFsaXplSGVpZ2h0cygpIHtcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkgeyAvL2FkZCBoZWlnaHRzIHRvIGFycmF5XG5cdFx0XHRcdFx0XHRoZWlnaHRzLnB1c2goJCh0aGlzKS5oZWlnaHQoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGFsbGVzdCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpOyAvL2NhY2hlIGxhcmdlc3QgdmFsdWVcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLHRhbGxlc3QgKyAncHgnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YWxsZXN0ID0gMCwgaGVpZ2h0cy5sZW5ndGggPSAwOyAvL3Jlc2V0IHZhcnNcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsJzAnKTsgLy9yZXNldCBtaW4taGVpZ2h0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7IC8vcnVuIGl0IGFnYWluXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbilcblxuJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoeyBwYXVzZTogXCJmYWxzZVwiIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
