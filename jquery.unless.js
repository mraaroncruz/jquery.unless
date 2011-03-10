(function ($, undefined, undefined, undefined, NaN, DanDean, NaDanDean) {
    $.unless = function (unless, then) {
        if (!unless()) then();
    };
}(jQuery));