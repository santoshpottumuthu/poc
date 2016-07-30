// Image animation
$(".next").click(function (e) {
	$(".prev").removeClass("disabled");
	if ($(".slider-holder ul li:visible").nextAll().length != 0) {
		if ($(".slider-holder ul li:visible").index() == $(".slider-holder ul li").length - 2) {
			$(".next").addClass("disabled");
		}
		$(".slider-holder ul li:visible").fadeOut();
		$(".slider-holder ul li:visible").next().fadeIn("slow");
	}
   
});

$(".prev").click(function (e) {
	$(".next").removeClass("disabled");
	if ($(".slider-holder ul li:visible").prevAll().length != 0) {
		if ($(".slider-holder ul li:visible").index() == $(".slider-holder ul li").length - 3) {
			$(".prev").addClass("disabled");
		}
		$(".slider-holder ul li:visible").fadeOut();
		$(".slider-holder ul li:visible").prev().fadeIn("slow");
	}
});