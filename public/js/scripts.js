/* remove before client review */
$(window).load(function(){
  //$('#print').modal('show');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByZW1vdmUgYmVmb3JlIGNsaWVudCByZXZpZXcgKi9cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG4gIC8vJCgnI3ByaW50JykubW9kYWwoJ3Nob3cnKTtcbn0pO1xuXG4kKCcuc2Nyb2xsLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubW9kYWwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sICdzbG93Jyk7XG59KTtcblxuJChcIiNib29raW5nXCIpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gIC8vIGNhbmNlbHMgdGhlIGZvcm0gc3VibWlzc2lvblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBzdWJtaXRGb3JtKCk7XG59KTtcblxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpe1xuICAvLyBpbml0aWF0ZSB2YXJpYWJsZXMgd2l0aCBmb3JtIGNvbnRlbnRcbiAgdmFyIG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XG4gIHZhciBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XG4gIHZhciBjb21wYW55ID0gJChcIiNjb21wYW55XCIpLnZhbCgpO1xuICB2YXIgbWVzc2FnZSA9ICQoXCIjbWVzc2FnZVwiKS52YWwoKTtcblxuICAvLyBzZW5kIEFKQVggcmVxdWVzdCB0byBQSFAgZmlsZSBmb3IgcHJvY2Vzc2luZ1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogXCJwaHAvZm9ybS1wcm9jZXNzLnBocFwiLFxuICAgIGRhdGE6IFwibmFtZT1cIiArIG5hbWUgKyBcIiZlbWFpbD1cIiArIGVtYWlsICsgXCImY29tcGFueT1cIiArIGNvbXBhbnkgKyBcIiZtZXNzYWdlPVwiICsgbWVzc2FnZSxcbiAgICBzdWNjZXNzIDogZnVuY3Rpb24odGV4dCl7XG4gICAgICBpZiAodGV4dCA9PSBcInN1Y2Nlc3NcIil7XG4gICAgICAgIGJvb2tpbmdTdWJtaXR0ZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib29raW5nU3VibWl0dGVkKCl7XG4gICQoJyNib29raW5nIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5odG1sKCdTdWJtaXR0ZWQnKTtcbn1cblxuLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJyZXNwb25zaXZlXCIgY2xhc3MgdG8gdG9wbmF2IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uICovXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIGEudG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsJykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdCQoJy5uYXYtYmx1cicpLnRvZ2dsZUNsYXNzKCdibHVycmVkJyk7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEudG9nZ2xlID4gc3BhbicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJyNtYWluX25hdmlnYXRpb24gdWwgbGkgYScpLm5vdCgnI21haW5fbmF2aWdhdGlvbiBhLnRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsJykucmVtb3ZlQ2xhc3MoJ2V4cGFuZGVkJyk7XG4gICQoJy5uYXYtYmx1cicpLnJlbW92ZUNsYXNzKCdibHVycmVkJyk7XG4gIC8vIHRoaXMgbmVlZHMgdG8gZXhwbGljaXRseSByZW1vdmUgYW5kIGFkZCAocmF0aGVyIHRoYW4gdG9nZ2xlKVxuICAvLyBzbyB0aGF0IGEgY2xpY2sgb24gLmhvbWUgZG9lc24ndCBjaGFuZ2UgLmljb24gdG8gZmEtY2xvc2VcbiAgLy8gJCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS50b2dnbGUgPiBzcGFuJykucmVtb3ZlQ2xhc3MoJ2ZhLWNsb3NlJykuYWRkQ2xhc3MoJ2ZhLWJhcnMnKTtcbiAgJCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS50b2dnbGUgPiBzcGFuLmljb24taGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLnRvZ2dsZSA+IHNwYW4uaWNvbi1jbG9zZScpLmFkZENsYXNzKCdoaWRkZW4nKTtcbn0pO1xuXG5cbiQod2luZG93KS5sb2FkKFxuXHRmdW5jdGlvbiBjYXJvdXNlbE5vcm1hbGl6YXRpb24oKSB7XG5cblx0XHR2YXIgaXRlbXMgPSAkKCcjcXVvdGVfY2Fyb3VzZWwgLml0ZW0nKSwgLy9ncmFiIGFsbCBzbGlkZXNcblx0XHRcdGhlaWdodHMgPSBbXSwgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gc3RvcmUgaGVpZ2h0IHZhbHVlc1xuXHRcdFx0dGFsbGVzdDsgLy9jcmVhdGUgdmFyaWFibGUgdG8gbWFrZSBub3RlIG9mIHRoZSB0YWxsZXN0IHNsaWRlXG5cblx0XHRpZiAoaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRmdW5jdGlvbiBub3JtYWxpemVIZWlnaHRzKCkge1xuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7IC8vYWRkIGhlaWdodHMgdG8gYXJyYXlcblx0XHRcdFx0XHRcdGhlaWdodHMucHVzaCgkKHRoaXMpLmhlaWdodCgpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0YWxsZXN0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7IC8vY2FjaGUgbGFyZ2VzdCB2YWx1ZVxuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsdGFsbGVzdCArICdweCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTtcblxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRhbGxlc3QgPSAwLCBoZWlnaHRzLmxlbmd0aCA9IDA7IC8vcmVzZXQgdmFyc1xuXHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0JywnMCcpOyAvL3Jlc2V0IG1pbi1oZWlnaHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTsgLy9ydW4gaXQgYWdhaW5cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuKVxuXG4kKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7IHBhdXNlOiBcImhvdmVyXCIgfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
