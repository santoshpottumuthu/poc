// Rotating image
$(".rotate-control").change(function (e) {
	var degrees = parseInt($(this).val());
	$(".degrees").text(degrees)
	$(".rotate_this").css("transform", "rotate(" + degrees + "deg)");
});