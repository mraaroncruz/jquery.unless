(function ($, undefined, undefined, undefined, NaN, DanDean) {
    $.unless = function (unless, then) {
        if (!unless()) then();
    };
}(jQuery));