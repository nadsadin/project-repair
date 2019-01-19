$(window).scroll(function() {
	if ($(this).scrollTop() > 100){
		if($('.navbar').hasClass('sticky')){
			$('.navbar').addClass("bg-white");
		}
	}
	else{
		if($('.navbar').hasClass('sticky')){
			$('.navbar').removeClass("bg-white");
		}
	}
});