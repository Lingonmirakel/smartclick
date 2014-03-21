/*

	Use when making otherwise non-clickable elements clickable with JavaScript.
	Will respect the user's will to open links in new tabs/windows.

	Example usage:

	$(document).on('click mouseup', '.teaser', function(e) {
		if (!$(e.target).is('a')) {
			$(this).find('a').smartclick(e);
		}
	});

	You probably want something like this in your CSS too:

	.js .teaser {
		cursor: pointer;
	}

	.js .teaser:hover a {
		text-decoration: underline;
	}

*/

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