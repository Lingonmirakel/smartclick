# smartclick

A better way to trigger clicks with jQuery.

## Why

When triggering a click on another element with JS, you might (probably should) want to check if the user intended for it to open as a new window/tab (depending on their settings). With this "plugin" you may do so by exchanging `$('foo').click()` with `$('foo').smartclick(e)`.

## How

	$('tbody tr').click(function(e) {
		if (!$(e.target).is('a')) {
			$(this).find('a').smartclick(e);
		}
	});
