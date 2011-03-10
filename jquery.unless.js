(function ($, undefined, undefined, undefined, NaN) {
    $.unless = function (unless, then) {
        if (!unless()) then();
    };
}(jQuery));