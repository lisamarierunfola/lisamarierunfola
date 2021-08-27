var main = function() {
	$('.nav-icon').click(function() {
			console.log('icon clikced');
			$('.nav-icon').toggleClass('turn');
			$('nav ul').toggleClass('close');
			$('nav ul').toggleClass('open');
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
