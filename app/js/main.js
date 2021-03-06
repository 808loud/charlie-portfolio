/* remove before client review */
$(window).load(function(){
  // $('#dfs').modal('show');
});

$(document).ready(function () {
  $('.modal').on('show.bs.modal', function () {
    if ($(document).height() > $(window).height()) {
      // no-scroll
      $('body').addClass("modal-open-noscroll");
    }
    else {
      $('body').removeClass("modal-open-noscroll");
    }
  })
  $('.modal').on('hide.bs.modal', function () {
    $('body').removeClass("modal-open-noscroll");
  })
})

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
