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
        var alignY = true;
        var alignX = true;
        var animateOptions = {};
        
        if (options) {
            if (typeof(options.alignY) == "boolean") alignY = options.alignY;
            if (typeof(options.alignX) == "boolean") alignX = options.alignX;
            if (options.duration || options.duration === 0) animateOptions.duration = options.duration;
            if (options.easing) animateOptions.easing = options.easing;
            if (options.complete) animateOptions.complete = options.complete;
            if (options.step) animateOptions.step = options.step;
            if (typeof(options.queue) == "boolean") animateOptions.queue = options.queue;
            if (options.specialEasing) animateOptions.specialEasing = options.specialEasing;
        }

        return this.each(function() {
            var offsetParent = $(this).offsetParent();
            var container;
            if (options && options.container) container = $(options.container);
            else container = $(this).parent();
            
            var h = $(this).outerHeight();
            var w = $(this).outerWidth();
            if (h < 1 || w < 1) return false; //exit if height or width is 0
            
            var ch; //container height
            var cw; //container width
            var top;
            var left;
            
            if (container[0] == window || container[0] == document || offsetParent[0] == container[0]) {
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
            
            var properties = {};
            if (alignY) properties.top = top;
            if (alignX) properties.left = left;
            
            $(this).css("position", "absolute");
            $(this).animate(properties, animateOptions);
        });
    };

})(jQuery);