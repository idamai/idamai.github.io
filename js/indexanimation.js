$(document).ready(function(){
	$('#heyiggy-text').css('margin-left',-$(this).width())
	.css('opacity', 0)
    .animate({
        marginLeft:0,
		opacity:1
    }, 800);
	$('#heyiggy-img').css('opacity',0.5)
    .animate({
        opacity:1
    }, 800);
});