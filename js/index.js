
// TITLE FADEIN

$(document).ready(function(){
	$('.title').fadeIn(500);
	$('.title').css('display','table-cell');
});

$(window).scroll(function(){
	if ($(window).scrollTop() > 150) {
		$('.home').slideDown(100);
	}
	if ($(window).scrollTop() < 149) {
		$('.home').slideUp(100);
	}
});

// AUTO SCROLLING

$('.next').on('click', function (event){
	event.preventDefault();
	$('html, body').animate({
		scrollTop: $( $( this ).attr('href') ).offset().top
	}, 500);
});

// HAMBURGER

$('.hamburger').on('click', function() {
	$('nav li').each(function() {
		$(this).slideToggle(200);
		$(this).attr('display','block');
		});
	$('.hamburger .line').first().toggleClass('rotate-cw');
	$('.hamburger .line:eq(1)').fadeToggle(50);
	$('.hamburger .line').last().toggleClass('rotate-ccw');
});
