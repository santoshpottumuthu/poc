function cssAddedHere(){
	if($("#firstCSSContainer").val().length > 0){
		$("#minifyMe").removeClass("disableMe");
	}
	else {
		$("#minifyMe,#downloadMe").addClass("disableMe");
		$("#secondCSSContainer").attr("disabled","true");
	}
}
function minifyHere(){
	var str = $("#firstCSSContainer").val();
	if($("#firstCSSContainer").val().length > 0){
		$("#secondCSSContainer").val(str.replace(/\s/g,"")).removeAttr("disabled");
		download($("#secondCSSContainer").val(), 'myfilename.css', 'text/css');
	}
	else {
		
	}
}
function download(text1, name, type) {
	if(text1.length > 0)
	{	
		$("#downloadMe").removeClass("disableMe");
		var a = document.getElementById("downloadMe");
		var file = new Blob([text1], {type: type});
		a.href = URL.createObjectURL(file);
		a.download = name;
	}
	else{
		$("#downloadMe").addClass("disableMe");
	}
}
