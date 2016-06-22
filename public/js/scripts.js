/* remove before client review */
$(window).load(function(){
  $('#print').modal('show');
});

$('.scroll-top').on('click', function () {
    $('.modal').animate({ scrollTop: 0 }, 'slow');
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
  $('#main_navigation ul > li > a.toggle > span.icon-hamburger').removeClass('hidden');
  $('#main_navigation ul > li > a.toggle > span.icon-close').addClass('hidden');
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

$('.carousel').carousel({ pause: "hover" });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByZW1vdmUgYmVmb3JlIGNsaWVudCByZXZpZXcgKi9cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG4gICQoJyNwcmludCcpLm1vZGFsKCdzaG93Jyk7XG59KTtcblxuJCgnLnNjcm9sbC10b3AnKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnLm1vZGFsJykuYW5pbWF0ZSh7IHNjcm9sbFRvcDogMCB9LCAnc2xvdycpO1xufSk7XG5cbiQoXCIjYm9va2luZ1wiKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAvLyBjYW5jZWxzIHRoZSBmb3JtIHN1Ym1pc3Npb25cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc3VibWl0Rm9ybSgpO1xufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKXtcbiAgLy8gaW5pdGlhdGUgdmFyaWFibGVzIHdpdGggZm9ybSBjb250ZW50XG4gIHZhciBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xuICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICB2YXIgY29tcGFueSA9ICQoXCIjY29tcGFueVwiKS52YWwoKTtcbiAgdmFyIG1lc3NhZ2UgPSAkKFwiI21lc3NhZ2VcIikudmFsKCk7XG5cbiAgLy8gc2VuZCBBSkFYIHJlcXVlc3QgdG8gUEhQIGZpbGUgZm9yIHByb2Nlc3NpbmdcbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IFwicGhwL2Zvcm0tcHJvY2Vzcy5waHBcIixcbiAgICBkYXRhOiBcIm5hbWU9XCIgKyBuYW1lICsgXCImZW1haWw9XCIgKyBlbWFpbCArIFwiJmNvbXBhbnk9XCIgKyBjb21wYW55ICsgXCImbWVzc2FnZT1cIiArIG1lc3NhZ2UsXG4gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgaWYgKHRleHQgPT0gXCJzdWNjZXNzXCIpe1xuICAgICAgICBib29raW5nU3VibWl0dGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYm9va2luZ1N1Ym1pdHRlZCgpe1xuICAkKCcjYm9va2luZyBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuaHRtbCgnU3VibWl0dGVkJyk7XG59XG5cbi8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwicmVzcG9uc2l2ZVwiIGNsYXNzIHRvIHRvcG5hdiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaWNvbiAqL1xuJCgnI21haW5fbmF2aWdhdGlvbiBhLnRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCcpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuXHQkKCcubmF2LWJsdXInKS50b2dnbGVDbGFzcygnYmx1cnJlZCcpO1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLnRvZ2dsZSA+IHNwYW4nKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIHVsIGxpIGEnKS5ub3QoJyNtYWluX25hdmlnYXRpb24gYS50b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCcpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuICAkKCcubmF2LWJsdXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xuICAvLyB0aGlzIG5lZWRzIHRvIGV4cGxpY2l0bHkgcmVtb3ZlIGFuZCBhZGQgKHJhdGhlciB0aGFuIHRvZ2dsZSlcbiAgLy8gc28gdGhhdCBhIGNsaWNrIG9uIC5ob21lIGRvZXNuJ3QgY2hhbmdlIC5pY29uIHRvIGZhLWNsb3NlXG4gIC8vICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEudG9nZ2xlID4gc3BhbicpLnJlbW92ZUNsYXNzKCdmYS1jbG9zZScpLmFkZENsYXNzKCdmYS1iYXJzJyk7XG4gICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEudG9nZ2xlID4gc3Bhbi5pY29uLWhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgJCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS50b2dnbGUgPiBzcGFuLmljb24tY2xvc2UnKS5hZGRDbGFzcygnaGlkZGVuJyk7XG59KTtcblxuXG4kKHdpbmRvdykubG9hZChcblx0ZnVuY3Rpb24gY2Fyb3VzZWxOb3JtYWxpemF0aW9uKCkge1xuXG5cdFx0dmFyIGl0ZW1zID0gJCgnI3F1b3RlX2Nhcm91c2VsIC5pdGVtJyksIC8vZ3JhYiBhbGwgc2xpZGVzXG5cdFx0XHRoZWlnaHRzID0gW10sIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIHN0b3JlIGhlaWdodCB2YWx1ZXNcblx0XHRcdHRhbGxlc3Q7IC8vY3JlYXRlIHZhcmlhYmxlIHRvIG1ha2Ugbm90ZSBvZiB0aGUgdGFsbGVzdCBzbGlkZVxuXG5cdFx0aWYgKGl0ZW1zLmxlbmd0aCkge1xuXHRcdFx0ZnVuY3Rpb24gbm9ybWFsaXplSGVpZ2h0cygpIHtcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkgeyAvL2FkZCBoZWlnaHRzIHRvIGFycmF5XG5cdFx0XHRcdFx0XHRoZWlnaHRzLnB1c2goJCh0aGlzKS5oZWlnaHQoKSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0dGFsbGVzdCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGhlaWdodHMpOyAvL2NhY2hlIGxhcmdlc3QgdmFsdWVcblx0XHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLHRhbGxlc3QgKyAncHgnKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdH07XG5cdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7XG5cblx0XHRcdCQod2luZG93KS5vbigncmVzaXplIG9yaWVudGF0aW9uY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR0YWxsZXN0ID0gMCwgaGVpZ2h0cy5sZW5ndGggPSAwOyAvL3Jlc2V0IHZhcnNcblx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsJzAnKTsgLy9yZXNldCBtaW4taGVpZ2h0XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRub3JtYWxpemVIZWlnaHRzKCk7IC8vcnVuIGl0IGFnYWluXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cbilcblxuJCgnLmNhcm91c2VsJykuY2Fyb3VzZWwoeyBwYXVzZTogXCJob3ZlclwiIH0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
