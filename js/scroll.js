// Scrolling 
$(".down-pointer").click(function (e) {
    $('html, body').animate({ scrollTop: $(window).height() }, 3000);
});
$(".up-pointer").click(function (e) {
	$('html, body').animate({ scrollTop: 0 }, 3000);
});