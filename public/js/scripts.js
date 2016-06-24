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
	$('#main_navigation nav').toggleClass('expanded');
	$('.nav-blur').toggleClass('blurred');
	$('#main_navigation a.toggle > span').toggleClass('hidden');
  e.preventDefault();
});

$('#main_navigation ul li a').not('#main_navigation a.toggle').on('click', function() {
	$('#main_navigation nav').removeClass('expanded');
  $('.nav-blur').removeClass('blurred');
  // this needs to explicitly remove and add (rather than toggle)
  // so that a click on .home doesn't change .icon to fa-close
  // $('#main_navigation ul > li > a.toggle > span').removeClass('fa-close').addClass('fa-bars');
  $('#main_navigation a.toggle > span.icon-hamburger').removeClass('hidden');
  $('#main_navigation a.toggle > span.icon-close').addClass('hidden');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByZW1vdmUgYmVmb3JlIGNsaWVudCByZXZpZXcgKi9cbiQod2luZG93KS5sb2FkKGZ1bmN0aW9uKCl7XG4gIC8vJCgnI3ByaW50JykubW9kYWwoJ3Nob3cnKTtcbn0pO1xuXG4kKCcuc2Nyb2xsLXRvcCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAkKCcubW9kYWwnKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sICdzbG93Jyk7XG59KTtcblxuJChcIiNib29raW5nXCIpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG4gIC8vIGNhbmNlbHMgdGhlIGZvcm0gc3VibWlzc2lvblxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBzdWJtaXRGb3JtKCk7XG59KTtcblxuZnVuY3Rpb24gc3VibWl0Rm9ybSgpe1xuICAvLyBpbml0aWF0ZSB2YXJpYWJsZXMgd2l0aCBmb3JtIGNvbnRlbnRcbiAgdmFyIG5hbWUgPSAkKFwiI25hbWVcIikudmFsKCk7XG4gIHZhciBlbWFpbCA9ICQoXCIjZW1haWxcIikudmFsKCk7XG4gIHZhciBjb21wYW55ID0gJChcIiNjb21wYW55XCIpLnZhbCgpO1xuICB2YXIgbWVzc2FnZSA9ICQoXCIjbWVzc2FnZVwiKS52YWwoKTtcblxuICAvLyBzZW5kIEFKQVggcmVxdWVzdCB0byBQSFAgZmlsZSBmb3IgcHJvY2Vzc2luZ1xuICAkLmFqYXgoe1xuICAgIHR5cGU6IFwiUE9TVFwiLFxuICAgIHVybDogXCJwaHAvZm9ybS1wcm9jZXNzLnBocFwiLFxuICAgIGRhdGE6IFwibmFtZT1cIiArIG5hbWUgKyBcIiZlbWFpbD1cIiArIGVtYWlsICsgXCImY29tcGFueT1cIiArIGNvbXBhbnkgKyBcIiZtZXNzYWdlPVwiICsgbWVzc2FnZSxcbiAgICBzdWNjZXNzIDogZnVuY3Rpb24odGV4dCl7XG4gICAgICBpZiAodGV4dCA9PSBcInN1Y2Nlc3NcIil7XG4gICAgICAgIGJvb2tpbmdTdWJtaXR0ZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib29raW5nU3VibWl0dGVkKCl7XG4gICQoJyNib29raW5nIGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKS5odG1sKCdTdWJtaXR0ZWQnKTtcbn1cblxuLyogVG9nZ2xlIGJldHdlZW4gYWRkaW5nIGFuZCByZW1vdmluZyB0aGUgXCJyZXNwb25zaXZlXCIgY2xhc3MgdG8gdG9wbmF2IHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIHRoZSBpY29uICovXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIGEudG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIG5hdicpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xuXHQkKCcubmF2LWJsdXInKS50b2dnbGVDbGFzcygnYmx1cnJlZCcpO1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIGEudG9nZ2xlID4gc3BhbicpLnRvZ2dsZUNsYXNzKCdoaWRkZW4nKTtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSk7XG5cbiQoJyNtYWluX25hdmlnYXRpb24gdWwgbGkgYScpLm5vdCgnI21haW5fbmF2aWdhdGlvbiBhLnRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQkKCcjbWFpbl9uYXZpZ2F0aW9uIG5hdicpLnJlbW92ZUNsYXNzKCdleHBhbmRlZCcpO1xuICAkKCcubmF2LWJsdXInKS5yZW1vdmVDbGFzcygnYmx1cnJlZCcpO1xuICAvLyB0aGlzIG5lZWRzIHRvIGV4cGxpY2l0bHkgcmVtb3ZlIGFuZCBhZGQgKHJhdGhlciB0aGFuIHRvZ2dsZSlcbiAgLy8gc28gdGhhdCBhIGNsaWNrIG9uIC5ob21lIGRvZXNuJ3QgY2hhbmdlIC5pY29uIHRvIGZhLWNsb3NlXG4gIC8vICQoJyNtYWluX25hdmlnYXRpb24gdWwgPiBsaSA+IGEudG9nZ2xlID4gc3BhbicpLnJlbW92ZUNsYXNzKCdmYS1jbG9zZScpLmFkZENsYXNzKCdmYS1iYXJzJyk7XG4gICQoJyNtYWluX25hdmlnYXRpb24gYS50b2dnbGUgPiBzcGFuLmljb24taGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIGEudG9nZ2xlID4gc3Bhbi5pY29uLWNsb3NlJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xufSk7XG5cblxuJCh3aW5kb3cpLmxvYWQoXG5cdGZ1bmN0aW9uIGNhcm91c2VsTm9ybWFsaXphdGlvbigpIHtcblxuXHRcdHZhciBpdGVtcyA9ICQoJyNxdW90ZV9jYXJvdXNlbCAuaXRlbScpLCAvL2dyYWIgYWxsIHNsaWRlc1xuXHRcdFx0aGVpZ2h0cyA9IFtdLCAvL2NyZWF0ZSBlbXB0eSBhcnJheSB0byBzdG9yZSBoZWlnaHQgdmFsdWVzXG5cdFx0XHR0YWxsZXN0OyAvL2NyZWF0ZSB2YXJpYWJsZSB0byBtYWtlIG5vdGUgb2YgdGhlIHRhbGxlc3Qgc2xpZGVcblxuXHRcdGlmIChpdGVtcy5sZW5ndGgpIHtcblx0XHRcdGZ1bmN0aW9uIG5vcm1hbGl6ZUhlaWdodHMoKSB7XG5cdFx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHsgLy9hZGQgaGVpZ2h0cyB0byBhcnJheVxuXHRcdFx0XHRcdFx0aGVpZ2h0cy5wdXNoKCQodGhpcykuaGVpZ2h0KCkpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRhbGxlc3QgPSBNYXRoLm1heC5hcHBseShudWxsLCBoZWlnaHRzKTsgLy9jYWNoZSBsYXJnZXN0IHZhbHVlXG5cdFx0XHRcdFx0aXRlbXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0Jyx0YWxsZXN0ICsgJ3B4Jyk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9O1xuXHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpO1xuXG5cdFx0XHQkKHdpbmRvdykub24oJ3Jlc2l6ZSBvcmllbnRhdGlvbmNoYW5nZScsIGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0dGFsbGVzdCA9IDAsIGhlaWdodHMubGVuZ3RoID0gMDsgLy9yZXNldCB2YXJzXG5cdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0JCh0aGlzKS5jc3MoJ21pbi1oZWlnaHQnLCcwJyk7IC8vcmVzZXQgbWluLWhlaWdodFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0bm9ybWFsaXplSGVpZ2h0cygpOyAvL3J1biBpdCBhZ2FpblxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG4pXG5cbiQoJy5jYXJvdXNlbCcpLmNhcm91c2VsKHsgcGF1c2U6IFwiaG92ZXJcIiB9KTtcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
