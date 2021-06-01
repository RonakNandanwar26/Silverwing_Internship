(function ($) {
 "use strict";
//TOP Menu sticky
	//TOP Menu sticky
	var s = $("#sticky-menu");
	var pos = s.position();
	$(window).scroll(function() {
		var windowpos = $(window).scrollTop();
		if (windowpos > pos.top) {
		s.addClass("sticky");
		} else {
			s.removeClass("sticky");	
		}
	});
	
})(jQuery); 