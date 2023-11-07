(function ($) {
    "use strict";
	
	var $window = $(window); 
	
	/* Typed subtitle */
	/* $('.typed-title').typed({
		stringsElement: $('.typing-title'),
		backDelay: 2000,
		typeSpeed: 60,
		loop: true
	}); */

    if($('#comming-soon-subscriber').length) {
        $('#comming-soon-subscriber').on('submit', function() {
            alert('Thanks for submission our contact form. We\'ll rich you soon.')
        })
    }

})(jQuery);