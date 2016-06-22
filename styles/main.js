$(function() {
  $('figcaption').on('click', function() {
      if ( $(this).find('.reveal').hasClass('show') ) {
        $('figcaption .show').slideUp(500).removeClass('show');
      }

		else {
			$('figcaption .show').slideUp(500).removeClass('show');
			$(this).find('.reveal').slideDown(500).addClass('show');
		}
	});


  	$('.fa-bars').on('click', function(){
	  	$('.main-nav').toggleClass('show');
  	});
});

