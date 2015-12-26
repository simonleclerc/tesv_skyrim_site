
//@todo add description for each skill list below const
var skills = [
    {
        title: 'CSS',
        level: '76',
        levelProgress: 89,
        perkAbove: 'css',
        perks: [
            {
                title: 'Beginner',
                desc: 'Target your first class and id.',
                x: 5,
                y: 0,
                linkTo: [
                    {x: 5, y: 1, lock: false, title: 'novice'},
                    {x: 9, y: 0.5, lock: false, title: 'naming_convention'},
                    {x: 2, y: 0.7, lock: false, title: 'layout'}
                ],
                lock: false
            },
            {
                title: 'Novice',
                desc: 'Style basic interface.',
                x: 5,
                y: 1,
                linkTo: [
                    {x: 4, y: 3, lock: false, title: 'medium'},
                    {x: 6, y: 2, lock: false, title: 'animation'}
                ],
                lock: false
            },
            {
                title: 'Medium',
                desc: 'Discover pseudo selector and their power.',
                x: 4,
                y: 3,
                linkTo: [
                    {x: 3, y: 4, lock: false, title: 'expert'},
                    {x: 4.5, y: 3.5, lock: false, title: 'responsive'}
                ],
                lock: false
            },
            {
                title: 'Expert',
                desc: 'Test exotic properties and add fallback for old browser. ',
                x: 3,
                y: 4,
                linkTo: [
                    {x: 1, y: 5, lock: false, title: 'master'}
                ],
                lock: false
            },
            {
                title: 'Master',
                desc: 'Shape the world.',
                x: 1,
                y: 5,
                lock: false
            },
            {
                title: 'Layout',
                desc: 'Learn display, position and float property.',
                x: 2,
                y: 0.7,
                linkTo: [
                    {x: 2, y: 3, lock: false, title: 'advanced_layout'}
                ],
                lock: false
            },
            {
                title: 'Advanced layout',
                desc: 'Use flexbox and think of using grid layout.',
                x: 2,
                y: 3,
                lock: false
            },
            {
                title: 'Animation',
                desc: 'Unlock the power of transition.',
                x: 6,
                y: 2,
                lock: false
            },
            {
                title: 'Responsive',
                desc: 'Adapt your layout to any size.',
                x: 4.5,
                y: 3.5,
                lock: false
            },
            {
                title: 'Naming convention',
                desc: 'Name things with BEM, think atomic.',
                x: 9,
                y: 0.5,
                linkTo: [
                    {x: 6.5, y: 3, lock: false, title: 'preprocessor'}
                ],
                lock: false
            },
            {
                title: 'Preprocessor',
                desc: 'Add more tools to your gear.',
                x: 6.5,
                y: 3,
                lock: false
            }
        ]
    },
    {
        title: 'Javascript',
        level: '78',
        levelProgress: 50,
        perkAbove: 'javascript',
        perks: [
            {
                title: 'Beginner',
                desc: 'Know the difference between Java and JavaScript.',
                x: 5,
                y: 0,
                linkTo: [
                    {x: 4, y: 1, title: 'novice'},
                    {x: 1, y: 1.2, title: 'animation'},
                    {x: 8.5, y: 0.7, title: 'jquery'}
                ],
                lock: false
            },
            {
                title: 'Novice',
                desc: 'Write for loop and if statement.',
                x: 4,
                y: 1,
                linkTo: [
                    {x: 6, y: 2, title: 'medium'}
                ],
                lock: false
            },
            {
                title: 'Medium',
                desc: 'Discover the power of vanilla JS.\nBetter DOM manipulation.',
                x: 6,
                y: 2,
                linkTo: [
                    {x: 5, y: 3.5, title: 'expert'},
                    {x: 7, y: 2.8, title: 'closure'},
                    {x: 4, y: 3, lock: true, title: 'grunt'}
                ],
                lock: false
            },
            {
                title: 'Expert',
                desc: 'You can use Object.prototype.\n Use ES6 feature (or think about using it).',
                x: 5,
                y: 3.5,
                linkTo: [
                    {x: 6, y: 5, title: 'master', lock: true},
                    {x: 7, y: 4, title: 'flip_a_coin'}
                ],
                lock: false
            },
            {
                title: 'Master',
                desc: 'Rule the world.',
                x: 6,
                y: 5,
                lock: true
            },
            {
                title: 'jQuery',
                desc: 'Think JavaScript is easy.',
                x: 8.5,
                y:0.7,
                linkTo: [
                    {x: 8, y: 1.4, title: 'async'},
                    {x: 10, y: 3, title: 'reactjs'}
                ],
                lock: false
            },
            {
                title: 'Async',
                desc: 'Use jQuery Ajax and deferred object.',
                x: 8,
                y: 1.4,
                lock: false
            },
            {
                title: 'ReactJs',
                desc: 'Discover a new vision of manipulating the DOM. Rethink C in CSS.',
                x: 10,
                y: 3,
                linkTo: [
                    {x: 9, y: 4, title: 'react_form'}
                ],
                lock: false
            },
            {
                title: 'React Form',
                desc: 'Master React input.\nControlled or uncontrolled, you know the difference.',
                x: 9,
                y: 4,
                lock: false
            },
            {
                title: 'Animation',
                desc: 'Use a library for animation. GreenSock for the win.',
                x: 1,
                y: 1.2,
                linkTo: [
                    {x: 0, y: 3.2, title: 'canvas'}
                ],
                lock: false
            },
            {
                title: 'Canvas',
                desc: 'Draw circles or rectangles. But mainly particles.',
                x: 0,
                y: 3.2,
                linkTo: [
                    {x: 0, y: 4.5, lock: true, title: 'webgl'}
                ],
                lock: false
            },
            {
                title: 'WebGL',
                desc: 'Loose yourself in Euclidean Geometry.',
                x: 0,
                y: 4.5,
                lock: true
            },
            {
                title: 'Closure',
                desc: 'Finally understand how to pass "i" to your setTimeout function.',
                x: 7,
                y: 2.8,
                lock: false
            },
            {
                title: 'Grunt',
                desc: 'Or Gulp, or Cake, or Broccoli, or Brunch. Wait, what ?',
                x: 4,
                y: 3,
                lock: true
            },
            {
                title: 'Flip a coin',
                desc: 'Use Math.random() to know which pizza you want.\nBecause pseudo random is sometime okay.',
                x: 7,
                y: 4,
                lock: false
            }
        ]
    },
    {
        title: 'HTML',
        level: '83',
        levelProgress: 74,
        perkAbove: 'html',
        perks: [
            {
                title: 'Beginner',
                desc: 'Write your first HTML element',
                x: 5,
                y: 0,
                linkTo: [
                    {x: 4.5, y: 1, lock: false, title: 'novice'},
                    {x: 10, y: 1, lock: false, title: 'email'},
                    {x: 0, y: 1.8, lock: false, title: 'semantic'}
                ],
                lock: false
            },
            {
                title: 'Novice',
                desc: 'Create basic interface',
                x: 4.5,
                y: 1,
                linkTo: [
                    {x: 5.5, y: 2, lock: false, title: 'medium'}
                ],
                lock: false
            },
            {
                title: 'Medium',
                desc: 'Use new elements from HTML 5',
                x: 5.5,
                y: 2,
                linkTo: [
                    {x: 6.5, y: 4, lock: false, title: 'expert'},
                    {x: 7.5, y: 3, lock: false, title: 'svg'}
                ],
                lock: false
            },
            {
                title: 'Expert',
                desc: 'Create complex interface with unnecessary elements',
                x: 6.5,
                y: 4,
                linkTo: [
                    {x: 7, y: 5, lock: true, title: 'master'}
                ],
                lock: false
            },
            {
                title: 'Master',
                desc: 'Build your own world',
                x: 7,
                y: 5,
                lock: true
            },
            {
                title: 'Semantic',
                desc: 'Use HTML in a semantic way',
                x: 0,
                y: 1.8,
                linkTo: [
                    {x: 3, y: 3, lock: true, title: 'accessibility'}
                ],
                lock: false
            },
            {
                title: 'Accessibility',
                desc: 'Build accessible interface',
                x: 3,
                y: 3,
                lock: true
            },
            {
                title: 'Email',
                desc: 'Back to the table',
                x: 10,
                y: 1,
                linkTo: [
                    {x: 8, y: 2, lock: false, title: 'advanced_email'}
                ],
                lock: false
            },
            {
                title: 'Advanced Email',
                desc: 'Be responsive and hack more than ever',
                x: 8,
                y: 2,
                lock: false
            },
            {
                title: 'SVG',
                desc: 'Add SVG to your tool belt',
                x: 7.5,
                y: 3,
                linkTo: [
                    {x: 8.5, y: 4, lock: false, title: 'advanced_svg'}
                ],
                lock: false
            },
            {
                title: 'Advanced SVG',
                desc: 'Manipulate the svg after your export. Gradient, SMIL, Viewbox.',
                x: 8.5,
                y: 4,
                lock: false
            }
        ]
    },
    {
        title: 'Admin System',
        level: '1',
        levelProgress: 15,
        perkAbove: 'autre',
        perks: [
            {
                title: 'In coming',
                desc: 'In coming perk.',
                x: 5,
                y: 0,
                lock: false
            }
        ]
    },
    {
        title: 'BackEnd Dev',
        level: '1',
        levelProgress: 15,
        perkAbove: 'autre',
        perks: [
            {
                title: 'In coming',
                desc: 'In coming perk.',
                x: 5,
                y: 0,
                lock: false
            }
        ]
    },
    {
        title: 'Animation',
        level: '88',
        levelProgress: 23,
        perkAbove: 'animation',
        perks: [
            {
                title: 'Transition',
                desc: 'Transition from one state to another with css.',
                x: 5,
                y: 0,
                linkTo: [
                    {x: 2, y: 1.2, lock: false, title: 'animate'},
                    {x: 8, y: 1.4, lock: false, title: 'smil'}
                ],
                lock: false
            },
            {
                title: 'Animate',
                desc: 'Use jQuery to animate your css.',
                x: 2,
                y: 1.2,
                linkTo: [
                    {x: 4.7, y: 2.8, lock: false, title: 'keyframes'}
                ],
                lock: false
            },
            {
                title: 'SMIL',
                desc: 'Write SMIL to animate your SVG',
                x: 8,
                y: 1.4,
                linkTo: [
                    {x: 4.7, y: 2.8, lock: false, title: 'keyframes'}
                ],
                lock: false
            },
            {
                title: 'Keyframes',
                desc: 'Add multiple to your animation with keyframes in css',
                x: 4.7,
                y:2.8,
                linkTo: [
                    {x: 5.1, y: 3.8, lock: false, title: 'stop_animate'}
                ],
                lock: false
            },
            {
                title: 'Stop Animate',
                desc: 'Abandon jQuery animate',
                x: 5.1,
                y: 3.8,
                linkTo: [
                    {x: 5, y: 5, lock: false, title: 'tweenmax'}
                ],
                lock: false
            },
            {
                title: 'TweenMax',
                desc: 'Use an heavy lib to manage heavy animation',
                x: 5,
                y: 5,
                lock: false
            }
        ]
    },
    {
        title: 'Graphism',
        level: '42',
        levelProgress: 10,
        perkAbove: 'graphism',
        perks: [
            {
                title: 'Beginner',
                desc: 'Adjust colors on family photo.',
                x: 5,
                y: 0,
                linkTo: [
                    {x: 5.5, y: 1, lock: false, title: 'novice'},
                    {x: 2, y: 1, lock: false, title: 'software_manipulation'},
                    {x: 8, y: 1.3, lock: false, title: 'decline'}
                ],
                lock: false
            },
            {
                title: 'Novice',
                desc: 'Express a bit of creativity.',
                x: 5.5,
                y: 1,
                linkTo: [
                    {x: 4.2, y: 2.5, lock: false, title: 'medium'}
                ],
                lock: false
            },
            {
                title: 'Medium',
                desc: 'Have sense for motion.',
                x: 4.2,
                y: 2.5,
                linkTo: [
                    {x: 3, y: 3.8, lock: true, title: 'expert'}
                ],
                lock: false
            },
            {
                title: 'Expert',
                desc: 'Show us creativity and technical ability.',
                x: 3,
                y: 3.8,
                linkTo: [
                    {x: 2, y: 5, lock: true, title: 'master'}
                ],
                lock: true
            },
            {
                title: 'Master',
                desc: 'Sketch the world.',
                x: 2,
                y: 5,
                lock: true
            },
            {
                title: 'Software manipulation',
                desc: 'Have a large view of the possibility with graphism software.',
                x: 2,
                y: 1,
                linkTo: [
                    {x: 3, y: 2, lock: true, title: 'advanced_software'}
                ],
                lock: false
            },
            {
                title: 'Advanced software',
                desc: 'Have a large an detail view with graphism software.',
                x: 3,
                y: 2,
                lock: true
            },
            {
                title: 'Decline',
                desc: 'Decline a model.',
                x: 8,
                y: 1.3,
                linkTo: [
                    {x: 7.8, y: 2.3, lock: false, title: 'responsive'}
                ],
                lock: false
            },
            {
                title: 'Responsive',
                desc: 'Decline a model into responsive version.',
                x: 7.8,
                y: 2.3,
                lock: false
            }
        ]
    }
];
function addIdOnSkillsItem(skills){
    skills.map(function(skill, index_skill){
        skill.id = 'skill'+index_skill+'';
        skill.perks.map(function(perk, index_perk){
            perk.id = 'skill'+index_skill+'_'+index_perk;
            if(perk.linkTo) {
                perk.linkTo.map(function (link, index_link) {
                    link.id = 'skill'+index_skill + '_' + index_perk + '_' + index_link;
                });
            }
        });
    });
}
addIdOnSkillsItem(skills);
var skillsState = {
    zoomConstelation: false,
    centered: skills[0].id,
    movingConstelation: false
};

var globalSkillUl = document.querySelector('.skills');


function moveConstellationsAway(){
    var leftSkill = Math.floor((skillsLength - 1)/2),
        rightSkill = skillsLength - leftSkill -1 ;
    var newId;
    for(var i = 0; i < leftSkill; i++) {
        newId = ((parseInt(skillsState.centered.substring(5,6)) - (leftSkill-i))%skillsLength);
        newId = newId < 0 ? skillsLength +newId : newId;
        TweenMax.to('#skill'+newId, 2, {x: '-=2000'});
    }
    for(var j = 0; j < rightSkill; j++) {
        newId = (parseInt(skillsState.centered.substring(5,6)) + j +1)%skillsLength;
        TweenMax.to('#skill'+newId, 2, {x: '+=2000'});
    }
}
function moveConstellationsCloser(){
    TweenMax.to('.skill', 1, {x: 0});
}
function moveConstellationToCenter(target) {
    skillsState.movingConstelation = true;
    var targetId = target.getAttribute('id'),
        targetNumId = parseInt(targetId.substring(5, 6)),
        centeredId = parseInt(skillsState.centered.substring(5, 6)),
        decalage = centeredId - targetNumId;
    var tl = new TimelineMax({
        onComplete: function () {
            var idFromWhereToBeginMove;
            skillsState.centered = targetId;
            if (decalage > 0) {
                idFromWhereToBeginMove = (parseInt(skillsState.centered.substring(5, 6)) + (skillsLength % 2 === 0 ? skillsLength / 2 + 1 : Math.ceil(skillsLength / 2))) % skillsLength;
                for (var i = 0; i < decalage; i++) {
                    TweenMax.to('#skill' + ((idFromWhereToBeginMove + i) % skillsLength), 0, {x: '-=' + (120 * skillsLength + 80) + '%'})
                }
            } else {
                idFromWhereToBeginMove = (parseInt(skillsState.centered.substring(5, 6)) - Math.floor(skillsLength / 2 + (skillsLength % 2 === 1 ? 1 : 0))) % skillsLength;
                idFromWhereToBeginMove = idFromWhereToBeginMove < 0 ? skillsLength + idFromWhereToBeginMove : idFromWhereToBeginMove;
                for (var j = 0; j < decalage * -1; j++) {
                    var newId = ((idFromWhereToBeginMove - j) % skillsLength);
                    newId = newId < 0 ? skillsLength + newId : newId;
                    TweenMax.to('#skill' + newId, 0, {x: '+=' + (120 * skillsLength + 80) + '%'})
                }
            }
            TweenMax.to(target.getElementsByClassName('perks--above'), .3, {autoAlpha: 1});
            skillsState.movingConstelation = false;
        }
    });
    TweenMax.to(document.getElementsByClassName('perks--above'), .3, {autoAlpha: 0});
    TweenMax.to(document.getElementsByClassName('skill--progress'), .5, {width: '60%'});
    TweenMax.to(document.getElementsByClassName('skill--title'),.5, {fontSize: '1.5vw'});
    tl.addLabel('start');
    if ((targetNumId > centeredId && Math.abs(decalage) > skillsLength / 2) || (targetNumId < centeredId && Math.abs(decalage) <= skillsLength / 2)) {
        if (targetNumId > centeredId && Math.abs(decalage) > skillsLength / 2) {
            decalage = (skillsLength + decalage);
        }

        tl.to('.skill', 1, {x: '+=' + (120 * decalage) + '%'}, 'start');
        for (var b = 0; b <= decalage; b++) {
            tl.to('#skill' + ((targetNumId + b) % skillsLength), 1, {x: '+=' + (120 * decalage + ((b === 0 || b === decalage) ? 40 : 80)) + '%'}, 'start');
        }
        skillsState.centered = targetId;
    } else {
        if (centeredId > targetNumId && Math.abs(decalage) > skillsLength / 2) {
            decalage = (skillsLength - decalage) * -1;
        }
        tl.to('.skill', 1, {x: '+=' + (120 * decalage) + '%'}, 'start');
        for (var b = 0; b <= decalage * -1; b++) {
            tl.to('#skill' + ((centeredId + b) % skillsLength), 1, {x: '+=' + (120 * decalage - ((b === 0 || b === decalage * -1) ? 40 : 80)) + '%'}, 'start');
        }
    }
    TweenMax.to(target.querySelector('.skill--progress'),.5, {width: '80%'});
    TweenMax.to(target.querySelector('.skill--title'),.5, {fontSize: '2vw'});
    TweenMax.to('.background-fullsize', 1, {backgroundPosition: '+=' + 100 * decalage + 'px 0'});
}
var skillsLength = skills.length;
function createSkills(){
    skills.map(function(skill, iterSkill){
        var skillLi = document.createElement('li');
        skillLi.classList.add('skill');
        skillLi.setAttribute('id', skill.id);
        var skillUl = document.createElement('ul');
        skillUl.classList.add('perks');
        var aboveDiv = document.createElement('div');
        aboveDiv.classList.add('perks--above');
        aboveDiv.style.backgroundImage = 'url(images/perkAbove/'+skill.perkAbove+'.png)';
        skillUl.appendChild(aboveDiv);
        var skillSeparator = document.createElement('div');
        skillSeparator.classList.add('skill--separator');
        var skillSpanTitle = document.createElement('span');
        skillSpanTitle.classList.add('skill--title');
        var skillSpanName = document.createElement('span');
        skillSpanName.classList.add('skill--name');
        var skillSpanLevel = document.createElement('span');
        skillSpanLevel.classList.add('skill--level');
        skillSpanName.innerHTML = skill.title;
        skillSpanLevel.innerHTML = skill.level;
        var skillDiv = document.createElement('div');
        skillDiv.classList.add('skill--progress');
        var progressWidth = (220.227-(2.20227*skill.levelProgress));
        skillDiv.innerHTML = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'+
        'width="100%" viewBox="0 0 290.99 25.5" enable-background="new 0 0 290.99 25.5" xml:space="preserve">'+
        '<defs>'+
        '<linearGradient id="level_bg_progress" gradientUnits="userSpaceOnUse" x1="0" y1="9" x2="0" y2="16">'+
        '<stop  offset="0.2" style="stop-color:#2d2b44;"/>'+
        '<stop  offset="0.65" style="stop-color:#3e3c4e;"/>'+
        '<stop  offset=".9" style="stop-color:#232135;"/>'+
        '</linearGradient>'+
        '<linearGradient id="level_progress" gradientUnits="userSpaceOnUse" x1="0" y1="9" x2="0" y2="16">'+
        '<stop  offset="0.2" style="stop-color:#777f97;"/>'+
        '<stop  offset="0.65" style="stop-color:#9aa0af;"/>'+
        '<stop  offset=".9" style="stop-color:#5c6274;"/>'+
        '</linearGradient>'+
        '<mask id="progress_mask" maskUnits="objectBoundingBox">'+
        '<polygon  fill="#ffffff" points="36.99,9 51.49,16.5 240.603,16.5 255.103,9 	"/>'+
        '</mask>'+
        '</defs>'+
        '<g id="progress">'+
        '<path id="mask_2_" fill="#101112" opacity="0.9" d="M290.99,0H0l46.656,25.5h198.417L290.99,0L290.99,0z"/>'+
        '<path fill="#858A89" d="M15.157,4.318l32.071,17.016h197.096l31.938-17.016H15.157z M243.574,18.334h-195.6L27.212,7.318H264.25 L243.574,18.334z"/>'+
        '<polygon fill="url(#level_bg_progress)" points="36.99,9 51.49,16.5 240.603,16.5 255.103,9 	"/>'+
        '<g mask="url(#progress_mask)">'+
        '<polygon transform="translate(-'+progressWidth+',0)" fill="url(#level_progress)" points="36.99,9 51.49,16.5 240.603,16.5 255.103,9 	"/>'+
        '</g>'+
        '</g>'+
        '</svg>';
        skillSpanTitle.appendChild(skillSpanName);
        skillSpanTitle.appendChild(document.createTextNode(' '));
        skillSpanTitle.appendChild(skillSpanLevel);
        skillLi.appendChild(skillUl);
        skillLi.appendChild(skillSeparator);
        skillLi.appendChild(skillSpanTitle);
        skillLi.appendChild(skillDiv);

        var coeff = 120*iterSkill +40;
        if(skillsLength/2 < iterSkill) {
            coeff = (skillsLength - iterSkill)*-120 -40;
        } else if(iterSkill === 0 ) {
            coeff = 0;
        }

        TweenMax.to(skillLi, 0, {x: coeff+'%'});
        E.addHandler(skillLi, 'click', function(e){
            if(skillsState.movingConstelation) {
                return;
            }
            var target = e.target;
            while(!target.classList.contains('skill')) {
                target = target.parentElement;
            }
            if(skillsState.centered === skill.id ) {
                if(skillsState.zoomConstelation) {
                    return;
                }
                skillsState.zoomConstelation = true;
                zoomInConstelation(skillLi);
                moveConstellationsAway();
                TweenMax.to(document.getElementById('dezoomConst'),.3, {autoAlpha: 1});

            } else {
                moveConstellationToCenter(target);
            }
        });


        createPerks(skill.perks, skillUl);

        globalSkillUl.appendChild(skillLi);
    });
    var perkImg = document.getElementsByClassName('perk--img');
    for(var i = 0, pkl = perkImg.length; i < pkl; i++) {
        var obj = {bright: .5};
        var tl = new TimelineMax({repeat: -1, repeatDelay:getRandomArbitrary(0.45,0.55), delay: Math.random()});
        tl
            .fromTo(obj,.08, {bright:1.1}, {bright: 1.05,onUpdateParams: [i], onUpdate: function(i){
                perkImg[i].style.WebkitFilter = 'brightness('+this.target.bright+')';
            }})
            .fromTo(obj,.15, {bright:1.05}, {bright:1.1,onUpdateParams: [i], onUpdate: function(i){
                perkImg[i].style.WebkitFilter = 'brightness('+this.target.bright+')';
            }});
    }
}
createSkills();
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
window.onresize = onResize;
var SCREEN_H = window.innerHeight;
var SCREEN_W = window.innerWidth;
function onResize() {
    SCREEN_H = window.innerHeight;
    SCREEN_W = window.innerWidth;
    var perks = document.getElementsByClassName('perks');
    for(var i = 0; i < perks.length; i++) {
        resizePerkToPerk(perks[i]);
    }
}
var perks = document.getElementsByClassName('perks');
for(var i = 0; i < perks.length; i++){
    resizePerkToPerk(perks[i]);
}
var style = document.createElement('style');
style.innerHTML = '.perks.transform {transform: rotateX(50deg) translate3d(0,50%,0);';
document.head.appendChild(style);

function resizePerkToPerk (ul) {
    var ulH = ul.offsetHeight,
        ulW = ul.offsetWidth,
        skillElm = ul.parentElement,
        skillId = skillElm.getAttribute('id');
    skills[skillId.substring(5)].perks.map(function (elm, index) {
        if (elm.linkTo) {
            elm.linkTo.map(function (elm2, index) {
                var verticalLength = (ulH / 100) * (elm2.y * 10 - elm.y * 10),
                    horizontalLength = (ulW / 100) * (elm2.x * 10 - elm.x * 10),
                    elmToTween = document.getElementById(elm2.id);
                TweenMax.to(elmToTween, 0, {
                    bottom: elm.y * 10 + '%',
                    left: elm.x * 10 + '%',
                    rotationZ: radToDegrees(Math.atan(horizontalLength / verticalLength)),
                    height: Math.sqrt(verticalLength * verticalLength + horizontalLength * horizontalLength)/100*95
                });
            });
        }
    });
}
function createPerks(perks, ul) {
    var ulH = ul.offsetHeight,
        ulW = ul.offsetWidth;
    perks.map(function(elm, index){
        var title = document.createElement('div');
        var img = document.createElement('div');
        var desc = document.createElement('div');
        title.classList.add('perk--title');
        img.classList.add('perk--img');
        if(elm.lock) {
            img.classList.add('lock');
        }
        desc.classList.add('perk--desc');
        title.innerHTML = elm.title;
        desc.innerHTML = elm.desc;
        var li = document.createElement('li');
        li.classList.add('perk');
        li.setAttribute('id', elm.id);
        li.setAttribute('data-x', elm.x);
        li.setAttribute('data-y', elm.y);
        li.appendChild(title);
        li.appendChild(img);
        li.appendChild(desc);
        TweenMax.to(li, 0, {bottom: elm.y * 10+'%', left: elm.x * 10+'%'});
        E.addHandler(li, 'click', function(){
            if(skillsState.zoomConstelation) {
                skillsState.zoomConstelationDeepPerk = true;
                TweenMax.to(ul.getElementsByClassName('perkToPerk'),.3, {autoAlpha: 1});
                TweenMax.to(ul.getElementsByClassName('to'+elm.title.toLowerCase().replace(/ /g, '_')), 1, {autoAlpha: 0});
                TweenMax.to(ul.getElementsByClassName('perk--desc'),.3, {autoAlpha: 0});
                TweenMax.to(li.getElementsByClassName('perk--desc'),.3, {autoAlpha: 1});
                style.innerHTML = '.perks.transform {transform: rotateX(50deg) translate3d(' + (elm.x * -10 + 50) + '%,' + (elm.y * 10) + '%,0);';
                ul.classList.add('transform');
            }
        });
        ul.appendChild(li);
//        ul.insertBefore(li, ul.firstChild);
        if(elm.linkTo) {
            elm.linkTo.map(function (elm2, index) {
//                ul.appendChild(createPerkToPerk(elm, elm2, ulH, ulW))
                ul.insertBefore(createPerkToPerk(elm, elm2, ulH, ulW), ul.firstChild);
            });
        }
    });
}
function createPerkToPerk(elm, elm2, ulH, ulW) {
    var verticalLength = (ulH/100)*(elm2.y*10 - elm.y*10),
        horizontalLength = (ulW/100)*(elm2.x*10 - elm.x*10),
        li2 = document.createElement('li');
    li2.setAttribute('id', elm2.id);
    li2.classList.add('perkToPerk');
    li2.classList.add('to'+elm2.title);
    li2.appendChild(document.createElement('li'));
    li2.appendChild(document.createElement('li'));
    li2.appendChild(document.createElement('li'));
//    li2.appendChild(document.createElement('li'));
//    li2.appendChild(document.createElement('li'));
    if(elm2.lock){
        li2.classList.add('lock');
    }
    var height = Math.sqrt(verticalLength*verticalLength + horizontalLength*horizontalLength);
    TweenMax.to(li2, 0, {
        bottom: elm.y * 10 + '%',
        left: elm.x * 10 + '%',
        rotationZ: radToDegrees(Math.atan(horizontalLength/verticalLength)),
        height: (height/100)*95
    });
    return li2;
}

function zoomOutConstelation(ul){
    skillsState.movingConstelation = true;
    TweenMax.to('.background-fullsize',1, {height: '100%', width: '100%', x: '0%', y : '0%'});
    TweenMax.to(ul, 1, {perspective: 10000, ease: Power4.easeIn});
    TweenMax.to(ul.querySelectorAll('.perk'), 1, {transform: 'rotateX(-50deg) translateY(2vw)'});
    TweenMax.to(ul.querySelectorAll('.perk--img'), 1, {width: '4vw', height: '4vw'});
    TweenMax.to(ul.querySelectorAll('.skill--separator'), 1, {marginTop: '7vw', autoAlpha: 0});
    TweenMax.to(ul.querySelectorAll('.perk--title, .perk--desc, .perkToPerk'),.1, { autoAlpha: 0});
    TweenMax.to(ul, 1, {height: '6vw', width: '16vw', ease: Power2.easeInOut, onUpdate: function(){
        if(parseInt(this.target.offsetWidth) > SCREEN_W) {
            TweenMax.to(this.target, 0, {x: '-'+(this.target.offsetWidth-SCREEN_W)/2+'px' });
        } else {
            TweenMax.to(this.target, 0, {x: '0px' });
        }
    }, onComplete: function(){
        for(var i = 0; i < this.target.length; i++){
            this.target[i].style.height = this.vars.css.height;
            this.target[i].style.width = this.vars.css.width;
        }

        skillsState.perkToPerkAnimation.map(function(animation){
            animation.kill();
        });
//        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li:nth-child(1), .perkToPerk:not(.lock) li:nth-child(2)'),0, {autoAlpha: 0});
        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li:nth-child(2), .perkToPerk:not(.lock) li:nth-child(3)'),0, {autoAlpha: 0});
        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li'),0, {filter: 'brightness(1.5) blur(1px)', WebkitFilter: 'brightness(1.4) blur(0px)'});
        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li:nth-child(1)'),0, {boxShadow: '0 -10px 0px 1px #ffffff, 0 -10px 1px 1px rgba(0,173,255,1), 0 -10px 3px 3px rgba(32, 82, 193, 0.8)', width: 1, autoAlpha: 1});
        TweenMax.to('.perkToPerk.lock li:nth-child(1)',0, {autoAlpha:1, boxShadow: '0 -10px 3px 1px rgba(155, 178, 206, .2)'});

        var perks = ul.getElementsByClassName('perks');
        for(var i = 0; i < perks.length; i++){
            resizePerkToPerk(perks[i]);
        }
        TweenMax.to([ul.querySelectorAll('.perkToPerk'), '.skill--progress'],.1, { autoAlpha: 1, onComplete: function(){
            skillsState.movingConstelation = false;
            TweenMax.to(ul.getElementsByClassName('perks--above'),.3, {autoAlpha: 1});
        }});
    }});
}
function zoomInConstelation(ul){
    skillsState.movingConstelation = true;
    skillsState.zoomedConstelation = ul;
    TweenMax.to(ul.getElementsByClassName('perks--above'),.3, {autoAlpha: 0});
    TweenMax.to('.background-fullsize',1, {height: '115%', width: '115%', x: '-7.5%', y : '-7.5%'});
    TweenMax.to(ul, 1, {perspective: 650, ease: Power4.easeOut});
    TweenMax.to(ul.querySelectorAll('.perk'), 1, {transform: 'rotateX(-50deg) translateY(10vw)'});
    TweenMax.to(ul.querySelectorAll('.perk--img'), 1, {width: '20vw', height: '20vw'});
    TweenMax.to(ul.querySelectorAll('.skill--separator'), 1, {marginTop: '35vw', autoAlpha: 1});
    TweenMax.to([ul.querySelectorAll('.perkToPerk li'), ul.querySelectorAll('.skill--progress')],.1, { autoAlpha: 0});
    TweenMax.to(ul, 1, {height: '40vw', width: '130vw', ease: Power2.easeInOut, onUpdate: function(){
        if(parseInt(this.target.offsetWidth) > SCREEN_W) {
            TweenMax.to(this.target, 0, {x: '-'+(this.target.offsetWidth-SCREEN_W)/2+'px' });
        }
    }, onComplete: function(){
        for(var i = 0; i < this.target.length; i++){
            this.target[i].style.height = this.vars.css.height;
            this.target[i].style.width = this.vars.css.width;
        }
        TweenMax.to(ul.querySelector('.perk--desc'),.3, { autoAlpha: 1});
        TweenMax.to(ul.querySelectorAll('.perk--title'),.5, { autoAlpha: 1});

        var perkToPerk = ul.querySelectorAll('.perkToPerk:not(.lock)');
        skillsState.perkToPerkAnimation = [];
        for(var i = 0; i < perkToPerk.length; i++){
            var perkObj ={taille:0, taille2: 200};
            skillsState.perkToPerkAnimation.push(TweenMax.fromTo(perkObj, Math.random()+.8, {taille: 0}, {taille:200, yoyo: true, repeat: -1, ease: Power1.easeInOut, onUpdateParams:[i], onUpdate: function(i){
                var newElm = perkToPerk[i].querySelectorAll('li:nth-child(2)');
                newElm[0].style.transform = 'translateY('+this.target.taille+'%)';
            }}));
            skillsState.perkToPerkAnimation.push(TweenMax.fromTo(perkObj, Math.random()+.8, {taille2: 200}, {taille2:0, yoyo: true, repeat: -1, ease: Power1.easeInOut, onUpdateParams:[i], onUpdate: function(i){
                var newElm = perkToPerk[i].querySelectorAll('li:nth-child(3)');
                newElm[0].style.transform = 'translateY('+this.target.taille2+'%)';
            }}));
        }

//        TweenMax.fromTo(ul.querySelectorAll('.perkToPerk li:nth-child(2)'), 1,{transform: 'translateY(0)'}, {transform: 'translateY(210px)', yoyo: true, repeat: -1});
//        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li:nth-child(1), .perkToPerk:not(.lock) li:nth-child(2)'),0, {autoAlpha: 1});
        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li:nth-child(2), .perkToPerk:not(.lock) li:nth-child(3)'),0, {autoAlpha: 1});
        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li'),0, {filter: 'brightness(1.5) blur(1px)', WebkitFilter: 'brightness(1.5) blur(1px)'});
        TweenMax.to(ul.querySelectorAll('.perkToPerk:not(.lock) li:nth-child(1)'),.5, {boxShadow: '0 -20px 2px 1px #ffffff, 0 -20px 9px 3px rgba(0,173,255,1), 0 -20px 7px 9px rgba(32, 82, 193, 0.8)', width: 1, autoAlpha: 1});
        TweenMax.to(ul.querySelectorAll('.perkToPerk.lock li:nth-child(1)'),.5, {autoAlpha:1, boxShadow: '0 -10px 50px 5px rgba(155, 178, 206, 1), 0 -10px 5px 2px rgba(155, 178, 206, .3)'});
        TweenMax.to(ul.querySelectorAll('.perkToPerk.lock'),.5, {autoAlpha:1, onComplete: function(){
            skillsState.movingConstelation = false;
        }});
        var perks = ul.getElementsByClassName('perks');
        for(var i = 0; i < perks.length; i++){
            resizePerkToPerk(perks[i]);
        }
    }});
}
var navigation = {
    previousDezoomState: function(){
        if(skillsState.zoomConstelationDeepPerk) {
            skillsState.zoomConstelationDeepPerk = false;
            TweenMax.to(skillsState.zoomedConstelation.getElementsByClassName('perk--desc'),.3, {autoAlpha: 0});
            TweenMax.to([document.getElementsByClassName('perkToPerk'), skillsState.zoomedConstelation.getElementsByClassName('perk--desc:first-child')],.3, {autoAlpha: 1});
            var transformedPerk = skillsState.zoomedConstelation.querySelector('.perks.transform');
            transformedPerk.classList.remove('transform');
        } else if(skillsState.zoomConstelation) {
            zoomOutConstelation(skillsState.zoomedConstelation);
            skillsState.zoomedConstelation = undefined;
            skillsState.zoomConstelation = false;
            moveConstellationsCloser();
            TweenMax.to(document.getElementById('dezoomConst'),.3, {autoAlpha: 0});
        }
    },
    nextZoomState: function(){
        if(!skillsState.zoomConstelation && !skillsState.movingConstelation) {
            skillsState.zoomConstelation = true;
            zoomInConstelation(document.getElementById(skillsState.centered));
            moveConstellationsAway();
            TweenMax.to(document.getElementById('dezoomConst'),.3, {autoAlpha: 1});
        }
    },
    goToLeftConstelation: function(){
        if(!skillsState.zoomConstelation && !skillsState.movingConstelation) {
            var target,
                centered = document.getElementById(skillsState.centered);
            if(centered.previousSibling) {
                target = centered.previousSibling;
            } else {
                target = centered;
                while(target.nextSibling) {
                    target = target.nextSibling;
                }
            }
            moveConstellationToCenter(target);
        }
    },
    goTorightConstelation: function(){
        if(!skillsState.zoomConstelation && !skillsState.movingConstelation) {
            var target,
                centered = document.getElementById(skillsState.centered);
            if(centered.nextSibling) {
                target = centered.nextSibling;
            } else {
                target = centered;
                while(target.previousSibling) {
                    target = target.previousSibling;
                }
            }
            moveConstellationToCenter(target);
        }
    }
};
E.addHandler(document.getElementById('dezoomConst'), 'click', navigation.previousDezoomState);
E.addHandler(document, 'keyup', function(e) {
    switch(e.which) {
        case 27:
        case 40:
            navigation.previousDezoomState();
            break;
        case 38:
            navigation.nextZoomState();
            break;
        case 37:
            navigation.goToLeftConstelation();
            break;
        case 39:
            navigation.goTorightConstelation();
            break;
    }
});