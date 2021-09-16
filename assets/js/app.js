var main = function() {
	$('.nav-toggle').click(function() {
			console.log('icon clikced');
			$('nav.mobile').toggleClass('hidden');
	});
	$('img.cross').click(function() {
			console.log('icon clikced');
			$('nav.mobile').toggleClass('hidden');
	});
	
	$(window).on("scroll", function() {
		if($(window).scrollTop() > 50) {
			$('header[role="banner"]').addClass("scrolled");
		} else {
			//remove the background property so it comes transparent again (defined in your css)
		   $('header[role="banner"]').removeClass("scrolled");
		}
	});
};

//CURTAIN.JS

$(document).ready(main);
