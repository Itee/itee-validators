'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function isEventTarget ( data ) {
    return ( data instanceof EventTarget )
}
function isNotEventTarget ( data ) {
    return !isEventTarget( data )
}

exports.isEventTarget = isEventTarget;
exports.isNotEventTarget = isNotEventTarget;
