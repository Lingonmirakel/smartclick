# smartclick

A better way to trigger clicks with jQuery.

(Super early version, only tested with Cmd + mouse 1 click thus far)

## Why

When triggering a click on another element with JS, you might (probably should) want to check if the user intended for it to open as a new window/tab (depending on their settings). With this "plugin" you may do so by exchanging `$('foo').click()` with `$('foo').smartklick(e)`.

## How

	$('tbody tr').click(function(e) {
		if (!$(e.target).is('a')) {
			$(this).find('a').smartclick(e);
		}
	});
