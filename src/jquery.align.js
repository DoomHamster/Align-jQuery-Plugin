/*
 * Align jQuery Plugin v1.0.0
 *
 * The Align plugin builds off of the jQuery .animate() function to align one or more elements on a specified element.
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2012 Bradley Mountford
 */

(function($) {

	$.fn.align = function(options) {
		var container = window;
		var y = true;
		var x = true;
		var speed = 0;

		if (options) {
			if (options.container) container = $(options.container);
			if (options.y != undefined && options.y != null && typeof (options.y) == "boolean") y = options.y;
			if (options.x != undefined && options.x != null && typeof (options.x) == "boolean") horizontal = options.x;
			if (options.speed && !isNaN(options.speed)) speed = options.speed;
		}

		return this.each(function() {
			var h = $(this).outerHeight();
			var w = $(this).outerWidth();
			if (h < 1 || w < 1) return false; //exit if height or width is 0
			var ch; //container height
			var cw; //container width
			var top;
			var left;
			if (container == window || container == document) {
				ch = $(container).height();
				cw = $(container).width();
				top = (ch - h) / 2;
				left = (cw - w) / 2;
			}
			else {
				var offset = $(container).offset();
				ch = $(container).innerHeight();
				cw = $(container).innerWidth();
				top = ((ch - h) / 2) + offset.top;
				left = ((cw - w) / 2) + offset.left;
			}
			var axes = {};

			if (y) axes.top = top;
			if (x) axes.left = left;

			$(this).css("position", "absolute");
			$(this).animate(axes, speed);
		});
	};

})(jQuery);