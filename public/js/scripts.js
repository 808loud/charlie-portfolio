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
    $('#booking button[type="submit"]').attr('disabled', 'disabled').html('Submitted');
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiByZW1vdmUgYmVmb3JlIGNsaWVudCByZXZpZXcgKi9cbi8qJCh3aW5kb3cpLmxvYWQoZnVuY3Rpb24oKXtcbiAgICQoJyNidXp6JykubW9kYWwoJ3Nob3cnKTtcbn0pOyovXG5cbiQoXCIjYm9va2luZ1wiKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpe1xuICAgIC8vIGNhbmNlbHMgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc3VibWl0Rm9ybSgpO1xufSk7XG5cbmZ1bmN0aW9uIHN1Ym1pdEZvcm0oKXtcbiAgICAvLyBpbml0aWF0ZSB2YXJpYWJsZXMgd2l0aCBmb3JtIGNvbnRlbnRcbiAgICB2YXIgbmFtZSA9ICQoXCIjbmFtZVwiKS52YWwoKTtcbiAgICB2YXIgZW1haWwgPSAkKFwiI2VtYWlsXCIpLnZhbCgpO1xuICAgIHZhciBjb21wYW55ID0gJChcIiNjb21wYW55XCIpLnZhbCgpO1xuICAgIHZhciBtZXNzYWdlID0gJChcIiNtZXNzYWdlXCIpLnZhbCgpO1xuXG4gICAgLy8gc2VuZCBBSkFYIHJlcXVlc3QgdG8gUEhQIGZpbGUgZm9yIHByb2Nlc3NpbmdcbiAgICAkLmFqYXgoe1xuICAgICAgICB0eXBlOiBcIlBPU1RcIixcbiAgICAgICAgdXJsOiBcInBocC9mb3JtLXByb2Nlc3MucGhwXCIsXG4gICAgICAgIGRhdGE6IFwibmFtZT1cIiArIG5hbWUgKyBcIiZlbWFpbD1cIiArIGVtYWlsICsgXCImY29tcGFueVwiICsgY29tcGFueSArIFwiJm1lc3NhZ2U9XCIgKyBtZXNzYWdlLFxuICAgICAgICBzdWNjZXNzIDogZnVuY3Rpb24odGV4dCl7XG4gICAgICAgICAgICBpZiAodGV4dCA9PSBcInN1Y2Nlc3NcIil7XG4gICAgICAgICAgICAgICAgYm9va2luZ1N1Ym1pdHRlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGJvb2tpbmdTdWJtaXR0ZWQoKXtcbiAgICAkKCcjYm9va2luZyBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJykuaHRtbCgnU3VibWl0dGVkJyk7XG59XG5cbi8qIFRvZ2dsZSBiZXR3ZWVuIGFkZGluZyBhbmQgcmVtb3ZpbmcgdGhlIFwicmVzcG9uc2l2ZVwiIGNsYXNzIHRvIHRvcG5hdiB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiB0aGUgaWNvbiAqL1xuJCgnI21haW5fbmF2aWdhdGlvbiBhLmljb24nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcblx0JCgnLm5hdi1ibHVyJykudG9nZ2xlQ2xhc3MoJ2JsdXJyZWQnKTtcblx0JCgnI21haW5fbmF2aWdhdGlvbiB1bCA+IGxpID4gYS5pY29uID4gaScpLnRvZ2dsZUNsYXNzKCdmYS1iYXJzIGZhLWNsb3NlJyk7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbn0pO1xuXG4kKCcjbWFpbl9uYXZpZ2F0aW9uIHVsIGxpIGEnKS5ub3QoJyNtYWluX25hdmlnYXRpb24gYS5pY29uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdCQoJyNtYWluX25hdmlnYXRpb24gdWwnKS5yZW1vdmVDbGFzcygnZXhwYW5kZWQnKTtcbiAgJCgnLm5hdi1ibHVyJykucmVtb3ZlQ2xhc3MoJ2JsdXJyZWQnKTtcbiAgLy8gdGhpcyBuZWVkcyB0byBleHBsaWNpdGx5IHJlbW92ZSBhbmQgYWRkIChyYXRoZXIgdGhhbiB0b2dnbGUpXG4gIC8vIHNvIHRoYXQgYSBjbGljayBvbiAuaG9tZSBkb2Vzbid0IGNoYW5nZSAuaWNvbiB0byBmYS1jbG9zZVxuICAkKCcjbWFpbl9uYXZpZ2F0aW9uIHVsID4gbGkgPiBhLmljb24gPiBpJykucmVtb3ZlQ2xhc3MoJ2ZhLWNsb3NlJykuYWRkQ2xhc3MoJ2ZhLWJhcnMnKTtcbn0pO1xuXG5cbiQod2luZG93KS5sb2FkKFxuXHRmdW5jdGlvbiBjYXJvdXNlbE5vcm1hbGl6YXRpb24oKSB7XG5cblx0XHR2YXIgaXRlbXMgPSAkKCcjcXVvdGVfY2Fyb3VzZWwgLml0ZW0nKSwgLy9ncmFiIGFsbCBzbGlkZXNcblx0XHRcdGhlaWdodHMgPSBbXSwgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gc3RvcmUgaGVpZ2h0IHZhbHVlc1xuXHRcdFx0dGFsbGVzdDsgLy9jcmVhdGUgdmFyaWFibGUgdG8gbWFrZSBub3RlIG9mIHRoZSB0YWxsZXN0IHNsaWRlXG5cblx0XHRpZiAoaXRlbXMubGVuZ3RoKSB7XG5cdFx0XHRmdW5jdGlvbiBub3JtYWxpemVIZWlnaHRzKCkge1xuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7IC8vYWRkIGhlaWdodHMgdG8gYXJyYXlcblx0XHRcdFx0XHRcdGhlaWdodHMucHVzaCgkKHRoaXMpLmhlaWdodCgpKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR0YWxsZXN0ID0gTWF0aC5tYXguYXBwbHkobnVsbCwgaGVpZ2h0cyk7IC8vY2FjaGUgbGFyZ2VzdCB2YWx1ZVxuXHRcdFx0XHRcdGl0ZW1zLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHQkKHRoaXMpLmNzcygnbWluLWhlaWdodCcsdGFsbGVzdCArICdweCcpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0fTtcblx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTtcblxuXHRcdFx0JCh3aW5kb3cpLm9uKCdyZXNpemUgb3JpZW50YXRpb25jaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHRhbGxlc3QgPSAwLCBoZWlnaHRzLmxlbmd0aCA9IDA7IC8vcmVzZXQgdmFyc1xuXHRcdFx0XHRpdGVtcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdCQodGhpcykuY3NzKCdtaW4taGVpZ2h0JywnMCcpOyAvL3Jlc2V0IG1pbi1oZWlnaHRcblx0XHRcdFx0fSk7XG5cdFx0XHRcdG5vcm1hbGl6ZUhlaWdodHMoKTsgLy9ydW4gaXQgYWdhaW5cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuKVxuXG4kKCcuY2Fyb3VzZWwnKS5jYXJvdXNlbCh7IHBhdXNlOiBcImZhbHNlXCIgfSk7XG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
