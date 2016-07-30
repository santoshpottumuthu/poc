var scrolled=0;
$(document).ready(function(){

	// Accordion
	$(".accordion-holder a").prepend("<span class='pointer'></span>");
	$(".accordion-holder a:first .pointer").addClass("active");

	// Keyboard Navigation for Main menu
	$('.tabs').keydown(function (e) {
		if([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
			e.preventDefault();		
			var loc = parseInt($('ul.tabs li.active').index());			
			if(e.which == 39 || e.which == 40){
				if(loc==5)
					loc = -1;
				loc++;
				if($('ul.tabs li').hasClass('active')){
					$('ul.tabs li').removeClass('active');
					$('ul.tabs li').eq(loc).addClass('active').find('a').focus();
					$('.main_container article').hide();
					var activeTab = $('ul.tabs li.active').find('a').attr('href');
					$(activeTab).show();
				}
			}
			else if(e.which == 37 || e.which == 38){
				if(loc == -1)
					loc = 5;
				loc--;
				if($('ul.tabs li').hasClass('active')){
					$('ul.tabs li').removeClass('active');
					$('ul.tabs li').eq(loc).addClass('active').find('a').focus();
					$('.main_container article').hide();
					var activeTab = $('ul.tabs li.active').find('a').attr('href');
					$(activeTab).show();
				}
			}	
		}
	});	
});

// Tab Navigation
$(function(){
  $('ul.tabs li:first').addClass('active');
  $('.main_container article').hide();
  $('.main_container article:first').show();
  $('ul.tabs li').on('click',function(){
    $('ul.tabs li').removeClass('active');
    $(this).addClass('active')
    $('.main_container article').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).show();
    return false;
  });
});