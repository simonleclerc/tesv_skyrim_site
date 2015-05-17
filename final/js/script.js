
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

var svgMenu = document.getElementById('menu');

var canvas = document.getElementById('canvas');
var c = canvas.getContext("2d");

canvas.setAttribute('height', window.innerHeight);
canvas.setAttribute('width', window.innerWidth);

function randomRand(rand1, rand2) {
    if (Math.random() >= .5){
        return rand(rand1[0], rand1[1]);
    } else {
        return rand(rand2[0], rand2[1]);
    }
}
function getPercentage(base, percent) {
    return (base/100)*(percent);
}

var particles = {},
    particleIndex = 0;
function Particle() {

    particleIndex ++;
    particles[particleIndex] = this;

    this.x = particlesData.position[0];
    this.y = particlesData.position[1];
    this.id = particleIndex;
    this.size = rand(2,3);
    this.life = 0;
    this.maxLife = 40;
    this.way = Math.random() > .8 ? -1 : 1;

    this.angle = particlesData.angle;
    this.modifyAngle = rand(getPercentage(2*Math.PI, -1.5), getPercentage(2*Math.PI, 1.5))

    if(this.way < 0) {
        this.initialVx =  rand(-2, 2);
        this.initialVy =  rand(-2, 2);
//            this.initialVy = randomRand([-2,-0.5],[.5,2]);
    } else {
        if(Math.random() > .35) {
            this.initialVx = Math.round((rand(canvas.width/300, canvas.width/70) * Math.cos(this.angle + this.modifyAngle)));
            this.initialVy = Math.round((rand(canvas.width/300, canvas.width/130) * Math.sin(this.angle + this.modifyAngle)));
            this.specialGradient = true;
            this.size++;
        } else {
            this.initialVx = Math.round((rand(3, 6) * Math.cos(this.angle+(Math.PI) + this.modifyAngle*5)));
            this.initialVy = Math.round((rand(3, 6) * Math.sin(this.angle+(Math.PI) + this.modifyAngle*5)));
        }
//            this.initialVy = this.initialVx / randomRand([.9, 50], [-50, -0.9]);
    }

//        this.initialVx =  this.way < 0 ? rand(-5,5) : rand(10, 25);
//        this.initialVy = this.way < 0 ? randomRand([-2,-0.5],[.5,2]) : this.initialVx / randomRand([.9, 50], [-50, -0.9]);
    this.vx = this.initialVx;
    this.vy = this.initialVy;



    this.totalIteration = 100;
    this.startValueX = this.initialVx /5;
    this.startValueY = this.initialVy /5;
    this.currentiteration = 0;
    this.changeInValueX = this.initialVx;
    this.changeInValueY = this.initialVy;

}
Particle.prototype.draw = function() {
    this.x += this.vx;
    this.y += this.vy;

    this.vx = this.initialVx - easeOutCubic(this.currentiteration, this.startValueX, this.changeInValueX, this.totalIteration);
    this.vy = this.initialVy - (easeOutCubic(this.currentiteration, this.startValueY , this.changeInValueY, this.totalIteration))/1.5;

    this.currentiteration++;

    this.life ++;

    if (this.life >= this.maxLife) {
        delete particles[this.id];
    }
    if((this.life / this.maxLife)>.7){
        this.size = this.size/1.1
    }


    var gradient = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
    if(this.specialGradient) {
        gradient.addColorStop(0, "rgba(250,250,250,.8)");
        gradient.addColorStop(0.2, "rgba(250,250,250,.8)");
        gradient.addColorStop(1, 'rgba(250,250,250,0)');
    } else {
        gradient.addColorStop(0, "rgba(200,200,200,.8)");
        gradient.addColorStop(0.2, "rgba(200,200,200,.8)");
        gradient.addColorStop(1, 'rgba(200,200,200,0)');
    }
    // Create the shapes
    c.fillStyle= gradient;
    c.beginPath();
    c.arc(this.x, this.y, this.size, 0, Math.PI*2, true);
    c.closePath();
    c.fill();

}

var fixeParticle = function () {
    this.x = particlesData.position[0];
    this.y = particlesData.position[1];
    var gradient = c.createRadialGradient(this.x, this.y, 0, this.x, this.y, 4);
    gradient.addColorStop(0, "rgba(200,200,200,.8)");
    gradient.addColorStop(0.2, "rgba(200,200,200,.8)");
    gradient.addColorStop(1, 'rgba(200,200,200,0)');

    // Create the shapes
    c.fillStyle= gradient;
    c.beginPath();
    c.arc(this.x, this.y, 4, 0, Math.PI*2, true);
    c.closePath();
    c.fill();
};
var particlesData = {
    visible: false,
    angle: Math.PI*2
}
function render() {
    c.clearRect(0, 0, canvas.width, canvas.height);
    if(particlesData.visible) {
        if(Math.random() > .75) {
            new Particle();
        }
        fixeParticle();
    }
    for (var i in particles) {
        particles[i].draw();
    }

}
(function animloop(){
    requestAnimFrame(animloop);
    render();
})();

var menuElm = document.getElementById('menu');
var menuItemElm = document.querySelector('.menuItems');
var menuItemRightElm = menuItemElm.querySelector('.right');
var menuItemLeftElm = menuItemElm.querySelector('.left');
var menuItemTopElm = menuItemElm.querySelector('.top');
var menuItemBottomElm = menuItemElm.querySelector('.bottom');
var menuSelectorSvgElm = document.getElementById('menuSelectorSvg');
var menuElmSize = menuElm.getBoundingClientRect();
function resize () {
    canvas.setAttribute('height', window.innerHeight);
    canvas.setAttribute('width', window.innerWidth);
    menuElmSize = menuElm.getBoundingClientRect();
}

var hoverblureffectPath = document.querySelectorAll('.hoverblureffect');
var hoverblureffectPathLength = hoverblureffectPath.length;

function hoverCanvas(e){
    //RIGHT
    c.beginPath();
    c.moveTo(canvas.width/2,canvas.height/2);
    c.lineTo(canvas.width/100*65,canvas.height/100*38);
    c.lineTo(canvas.width/100*75,canvas.height/100*38);
    c.lineTo(canvas.width/100*75,canvas.height/100*62);
    c.lineTo(canvas.width/100*65,canvas.height/100*62);
    c.moveTo(canvas.width/2,canvas.height/2);

    if (c.isPointInPath(e.clientX, e.clientY)) {
        particlesData.angle = Math.PI*2;
        particlesData.position = [Math.floor(svgMenu.getBoundingClientRect().width/100*7 + canvas.width/2), Math.floor(svgMenu.getBoundingClientRect().height/100*-0.5 + canvas.height/2)];
        particlesData.visible = true;
        for(var i = 0; i < hoverblureffectPathLength; i++) {
            hoverblureffectPath[i].style.opacity = "0";
        }
        var elemToDisplay = document.querySelector('.hoverblureffectRight');
        elemToDisplay.style.opacity = ".4";
        menuItemRightElm.
        menuSelectorSvgElm.style.opacity = '1';
        menuSelectorSvgElm.style.transform = 'translateX('+menuElmSize.width/2+'px) rotate(-90deg)';
        return;
    }
    //LEFT
    c.beginPath();
    c.moveTo(canvas.width/2,canvas.height/2);
    c.lineTo(canvas.width/100*35,canvas.height/100*38);
    c.lineTo(canvas.width/100*25,canvas.height/100*38);
    c.lineTo(canvas.width/100*25,canvas.height/100*62);
    c.lineTo(canvas.width/100*35,canvas.height/100*62);
    c.moveTo(canvas.width/2,canvas.height/2);

    if (c.isPointInPath(e.clientX, e.clientY)) {
        particlesData.angle = Math.PI;
        particlesData.position = [Math.floor(svgMenu.getBoundingClientRect().width/100*-7 + canvas.width/2), Math.floor(svgMenu.getBoundingClientRect().height/100*-0.5 + canvas.height/2)];
        particlesData.visible = true;
        for(var i = 0; i < hoverblureffectPathLength; i++) {
            hoverblureffectPath[i].style.opacity = "0";
        }
        var elemToDisplay = document.querySelector('.hoverblureffectLeft');
        elemToDisplay.style.opacity = ".4";
        menuSelectorSvgElm.style.opacity = '1';
        menuSelectorSvgElm.style.transform = 'translateX(-'+menuElmSize.width/2+'px) rotate(90deg)';
        return;
    }
    //BOTTOM
    c.beginPath();
    c.moveTo(canvas.width/2,canvas.height/2);
    c.lineTo(canvas.width/100*38,canvas.height/100*35);
    c.lineTo(canvas.width/100*38,canvas.height/100*75);
    c.lineTo(canvas.width/100*62,canvas.height/100*75);
    c.lineTo(canvas.width/100*62,canvas.height/100*65);
    c.moveTo(canvas.width/2,canvas.height/2);

    if (c.isPointInPath(e.clientX, e.clientY)) {
        particlesData.angle = Math.PI*0.5;
        particlesData.position = [Math.floor(svgMenu.getBoundingClientRect().width/100* -.2 + canvas.width/2), Math.floor(svgMenu.getBoundingClientRect().width/100*7 + canvas.height/2)];
        particlesData.visible = true;
        for(var i = 0; i < hoverblureffectPathLength; i++) {
            hoverblureffectPath[i].style.opacity = "0";
        }
        var elemToDisplay = document.querySelector('.hoverblureffectBottom');
        elemToDisplay.style.opacity = ".4";
        menuSelectorSvgElm.style.opacity = '1';
        menuSelectorSvgElm.style.transform = 'translateY('+menuElmSize.height/2+'px) rotate(0deg)';
        return;
    }
    //TOP
    c.beginPath();
    c.moveTo(canvas.width/2,canvas.height/2);
    c.lineTo(canvas.width/100*38,canvas.height/100*35);
    c.lineTo(canvas.width/100*38,canvas.height/100*25);
    c.lineTo(canvas.width/100*62,canvas.height/100*25);
    c.lineTo(canvas.width/100*62,canvas.height/100*65);
    c.moveTo(canvas.width/2,canvas.height/2);

    if (c.isPointInPath(e.clientX, e.clientY)) {
        particlesData.angle = Math.PI*1.5;
        particlesData.position = [Math.floor(svgMenu.getBoundingClientRect().width/100* -.2 + canvas.width/2), Math.floor(svgMenu.getBoundingClientRect().width/100*-7.5 + canvas.height/2)];
        particlesData.visible = true;
        for(var i = 0; i < hoverblureffectPathLength; i++) {
            hoverblureffectPath[i].style.opacity = "0";
        }
        var elemToDisplay = document.querySelector('.hoverblureffectTop');
        elemToDisplay.style.opacity = ".4";
        menuSelectorSvgElm.style.opacity = '1';
        menuSelectorSvgElm.style.transform = 'translateY(-'+menuElmSize.height/2+'px) rotate(180deg)';
        return;
    }

    particlesData.visible = false;
    for(var i = 0; i < hoverblureffectPathLength; i++) {
        hoverblureffectPath[i].style.opacity = '0';
        menuSelectorSvgElm.style.opacity = '0';
    }
}

E.addHandler(window, 'resize', resize);
E.addHandler(canvas, 'mousemove', function(e){hoverCanvas(e)});