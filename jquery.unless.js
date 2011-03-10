(function ($, undefined) {
    $.unless = function (unless, then) {
        if (!unless()) then();
    };
}(jQuery));