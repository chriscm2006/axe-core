axe.log = function () {
    'use strict';
    if (typeof console === 'object' && console.log) {
        Function.prototype.apply.call(console.log, console, arguments);
    }
};
