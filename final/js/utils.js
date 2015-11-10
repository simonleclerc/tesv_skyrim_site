
E = {
    addHandler: function( element, type, handler ) {
        if ( element.addEventListener ) {
            element.addEventListener ( type, handler, false );
        } else if ( element.attachEvent ) {
            element.attachEvent ( "on" + type, handler );
        } else {
            element["on" + type] = handler;
        }
    },

    getEvent: function ( event ) {
        return event ? event : window.event;
    },

    getTarget: function ( event ) {
        return event.target || event.srcElement;
    },

    preventDefault: function ( event ) {
        if ( event.preventDefault ) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }
    },

    removeHandler: function( element, type, handler ) {
        if ( element.removeEventListener ) {
            element.removeEventListener ( type, handler, false );
        } else if ( element.detachEvent ) {
            element.detachEvent ( "on" + type, handler );
        } else {
            element["on" + type] = null;
        }
    },

    stopPropagation: function ( event ) {
        if ( event.stopPropagation ) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }
    }

};

function easeOutCubic(currentIteration, startValue, changeInValue, totalIterations) {
    return changeInValue * (Math.pow(currentIteration / totalIterations - 1, 3) + 1) + startValue;
}

function easeInExpo ( t, b, c, d) {
    return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
}
//Retourne un nombre aléatoire compris entre min et max
function rand(min, max) {
    return Math.random() * (max - min) + min;
}
// requestAnimationFrame polyfill for older browsers
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame    ||
    function( callback ){
        window.setTimeout(callback, 1000 / 60);
    };
})();

// Converts from degrees to radians.
degToRadians = function(degrees) {
    return degrees * Math.PI / 180;
};

// Converts from radians to degrees.
radToDegrees = function(radians) {
    return radians * 180 / Math.PI;
};