$(".accordion-holder a").click(function (e) {
	$(this).attr("href", "javascript:void(0)");
	if ($(this).parent().next().css("display") != "block") {
		$(".accordion-header a").removeClass("active");
		$(".accordion-holder a .pointer").removeClass("active");
		$(this).parent().find("a").addClass("active");
		$(this).parent().find(".pointer").addClass("active");
		$(".accordion-body").slideUp();
		$(this).parent().next().slideToggle();
	}
});