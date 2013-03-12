(function ($) {
	'use strict';
	
	$.fn.smartclick = function (event) {
		var t = $(this);

		if (event.ctrlKey || event.metaKey || event.which === 2) {
			window.open(t.attr('href'), '');
		} else {
			window.location = t.attr('href');
		}
	}
}(jQuery));