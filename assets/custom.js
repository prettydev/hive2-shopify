custom.clickEvents = function(){
	$(".header-top .header-top--left .header-top--left--inner .site-nav__link").click(function(e){
		if(screen.width > 1024){
			e.preventDefault();
			$(this).parent().find("form.search-bar").addClass("active");
		}
	});
	$(".header-top form.search-bar .close_search").click(function(e){
		if(screen.width > 1024){
			e.preventDefault();
			$(this).parent().removeClass("active");
		}
	});
};

$(document).ready(function(){
	custom.clickEvents();
});