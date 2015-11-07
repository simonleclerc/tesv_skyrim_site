var d = new Date();

var footerDateElm = document.getElementById('footer-date');
var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function realTimeDate() {
    d = new Date();
    var day = d.getDate();
    var dateTxt;
    if (day ===1) {
        dateTxt = 'st';
    }else if (day ===2) {
        dateTxt = 'nd';
    }else if (day ===3) {
        dateTxt = 'rd';
    } else {
        dateTxt = 'th';
    }
    footerDateElm.innerHTML = d.getHours() +':'+d.getMinutes()+', '+ day+dateTxt + ' of ' + month[d.getMonth()]+', '+ d.getFullYear();
    setTimeout(realTimeDate, 60000);
}
realTimeDate();

var birthDate = new Date(1991, 4, 1);

var oneDay = 24*60*60*1000;	// hours*minutes*seconds*milliseconds
var today = new Date();

var diffDays = Math.abs((today.getTime() - birthDate.getTime())/(oneDay));

var footerAgeElm = document.getElementById('footer-age');
if(footerAgeElm) {
    footerAgeElm.innerHTML = Math.floor(diffDays/365.25);
    var footerBarSvg = document.getElementById('footerBarSvg');
    var footerLevelBar = footerBarSvg.getElementsByClassName('levelBar');
    var footerLevelBarWidth = (diffDays/365.25 - Math.floor(diffDays/365.25)) * 263.756;
    for(var i= 0, fl =footerLevelBar.length; i<fl;i++) {
        footerLevelBar[i].setAttributeNS(null, 'width', footerLevelBarWidth);
    }
}


