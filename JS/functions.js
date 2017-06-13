$( document ).ready(function() {
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll > 420) {
			$('.nav-bar').animate(
                        {
                            'margin-left':'100px'
                            // to move it towards the right and, probably, off-screen.
                        }, 1000;
		} else {
			
		}
	})

});