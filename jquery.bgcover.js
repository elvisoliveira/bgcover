// final background image dimentions
var definedHeight;
var definedWidth;

//
var imageWidth;
var imageHeight;

/**
 * Make all selected images to behave simulating as
 * background-size: covers
 */
(function($) {
    $.fn.bgcover = function(options) {
        
        imageWidth = parseFloat(this.css('width'), 10);
        imageHeight = parseFloat(this.css('height'), 10);
        
        // default param
        var settings = $.extend({
            containerWidth: $(window).width(),
            containerHeight: $(window).height()
        }, options);

        // calculate window ratio
        var containerRatio = settings.containerHeight / settings.containerWidth;

        // calculate image ratio
        var imageRatio = imageHeight / imageWidth;

        // calculate the image dimentions according
        // to the ratio
        if (imageRatio > containerRatio) {
            definedHeight = (settings.containerWidth / imageWidth) * imageHeight;
            definedWidth = settings.containerWidth;
        }
        // 
        else {
            definedWidth = (settings.containerHeight / imageHeight) * imageWidth;
            definedHeight = settings.containerHeight;
        }

        // define left and top postions
        nTop = 0 - ((definedHeight - settings.containerHeight) / 2);
        nLeft = 0 - ((definedWidth - settings.containerWidth) / 2);

        // define the background cover to every image backgrounds
        this.css({
            height: definedHeight,
            width: definedWidth,
            top: nTop,
            left: nLeft
        });

        return true;
    };
}(jQuery));