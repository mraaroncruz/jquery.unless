(function (context, $, undefined) {
    $.unless = function (unless, then) {
        if (!unless()) then();
    };
}(window, jQuery));