/* remove before client review */
$(window).load(function(){
  $('#scout').modal('show');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJzY3JpcHRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogcmVtb3ZlIGJlZm9yZSBjbGllbnQgcmV2aWV3ICovXG4kKHdpbmRvdykubG9hZChmdW5jdGlvbigpe1xuICAkKCcjc2NvdXQnKS5tb2RhbCgnc2hvdycpO1xufSk7XG5cbiQoXCIjYm9va2luZ1wiKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAvLyBjYW5jZWxzIHRoZSBmb3JtIHN1Ym1pc3Npb25cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgc3VibWl0Rm9ybSgpO1xufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKXtcbiAgLy8gaW5pdGlhdGUgdmFyaWFibGVzIHdpdGggZm9ybSBjb250ZW50XG4gIHZhciBuYW1lID0gJChcIiNuYW1lXCIpLnZhbCgpO1xuICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICB2YXIgY29tcGFueSA9ICQoXCIjY29tcGFueVwiKS52YWwoKTtcbiAgdmFyIG1lc3NhZ2UgPSAkKFwiI21lc3NhZ2VcIikudmFsKCk7XG5cbiAgLy8gc2VuZCBBSkFYIHJlcXVlc3QgdG8gUEhQIGZpbGUgZm9yIHByb2Nlc3NpbmdcbiAgJC5hamF4KHtcbiAgICB0eXBlOiBcIlBPU1RcIixcbiAgICB1cmw6IFwicGhwL2Zvcm0tcHJvY2Vzcy5waHBcIixcbiAgICBkYXRhOiBcIm5hbWU9XCIgKyBuYW1lICsgXCImZW1haWw9XCIgKyBlbWFpbCArIFwiJmNvbXBhbnk9XCIgKyBjb21wYW55ICsgXCImbWVzc2FnZT1cIiArIG1lc3NhZ2UsXG4gICAgc3VjY2VzcyA6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgaWYgKHRleHQgPT0gXCJzdWNjZXNzXCIpe1xuICAgICAgICBib29raW5nU3VibWl0dGVkKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYm9va2luZ1N1Ym1pdHRlZCgpe1xuICAkKCcjYm9va2luZyBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuaHRtbCgnU3VibWl0dGVkJyk7XG59XG5cbi8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwicmVzcG9uc2l2ZVwiIGNsYXNzIHRvIHRvcG5hdiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaWNvbiAqL1xuJCgnI21haW5fbmF2aWdhdGlvbiBhLnRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCcpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuXHQkKCcubmF2LWJsdXInKS50b2dnbGVDbGFzcygnYmx1cnJlZCcpO1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLnRvZ2dsZSA+IHNwYW4nKS50b2dnbGVDbGFzcygnaGlkZGVuJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIHVsIGxpIGEnKS5ub3QoJyNtYWluX25hdmlnYXRpb24gYS50b2dnbGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCcpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuICAkKCcubmF2LWJsdXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xuICAvLyB0aGlzIG5lZWRzIHRvIGV4cGxpY2l0bHkgcmVtb3ZlIGFuZCBhZGQgKHJhdGhlciB0aGFuIHRvZ2dsZSlcbiAgLy8gc28gdGhhdCBhIGNsaWNrIG9uIC5ob21lIGRvZXNuJ3QgY2hhbmdlIC5pY29uIHRvIGZhLWNsb3NlXG4gIC8vICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEudG9nZ2xlID4gc3BhbicpLnJlbW92ZUNsYXNzKCdmYS1jbG9zZScpLmFkZENsYXNzKCdmYS1iYXJzJyk7XG4gICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEudG9nZ2xlID4gc3Bhbi5oYW1idXJnZXInKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEudG9nZ2xlID4gc3Bhbi5jbG9zZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcbn0pO1xuXG5cbiQod2luZG93KS5sb2FkKFxuXHRmdW5jdGlvbiBjYXJvdXNlbE5vcm1hbGl6YXRpb24oKSB7XG5cblx0XHR2YXIgaXRlbXMgPSAkKCcjcXVvdGVfY2Fyb3VzZWwgLml0ZW0nKSwgLy9ncmFiIGFsbCBzbGlkZXNcblx0XHRcdGhlaWdodHMgPSBbXSwgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gc3RvcmUgaGVpZ2h0IHZhbHVlc1xuXHRcdFx0dGFsbGVzdDsgLy9jcmVhdGUgdmFyaWFibGUgdG8gbWFrZSBub3RlIG9mIHRoZSB0YWxsZXN0IHNsaWRlXG5cblx0XHRpZiAoaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRmdW5jdGlvbiBub3JtYWxpemVIZWlnaHRzKCkge1xuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7IC8vYWRkIGhlaWdodHMgdG8gYXJyYXlcblx0XHRcdFx0XHRcdGhlaWdodHMucHVzaCgkKHRoaXMpLmhlaWdodCgpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0YWxsZXN0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7IC8vY2FjaGUgbGFyZ2VzdCB2YWx1ZVxuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsdGFsbGVzdCArICdweCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTtcblxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRhbGxlc3QgPSAwLCBoZWlnaHRzLmxlbmd0aCA9IDA7IC8vcmVzZXQgdmFyc1xuXHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0JywnMCcpOyAvL3Jlc2V0IG1pbi1oZWlnaHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTsgLy9ydW4gaXQgYWdhaW5cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuKVxuXG4kKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7IHBhdXNlOiBcImZhbHNlXCIgfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
