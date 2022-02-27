// =========================================================================================================
// RESIZE SCREEN IF UNDER 800px
// =========================================================================================================
var myWidth = screen.width;
//var myHeight = screen.height
//document.t.t3.value = screen.colorDepth
//document.t.t4.value = screen.pixelDepth
//var myWidth = screen.availWidth;
//var myHeight = screen.availHeight;
if (myWidth <= 800) {
    document.body.style.overflow = "auto";
}



// =========================================================================================================
// COOLIRIS SETTINGS
// =========================================================================================================
var flashvars = {
    feed: "/global/assets/code/xml/portfolio_web.xml",
    numRows: 2,
    backgroundColor: "0x03070b",
    backgroundImage: "/global/assets/objects/images/global/wallBG.jpg",
    style: "dark",
    font: "Verdana",
    showReflections: false,
    showChrome: false,
    glowColor: "0x000000",
    cellWidth: 350,
    cellHeight: 300,
    tilt: 1,
    showEmbed: false,
    showItemEmbed: false,
    showSearch: false,
    showTutorial: false,
    showFullScreen: false,
    showNavArrows: false
    //icons: "http://www.robertcaretta.com/global/assets/objects/images/global/"
    //backgroundAlpha: 0.0
};
var params = {
    allowFullScreen: "false",
    allowscriptaccess: "always",
    wmode: "transparent"
};

if (swfobject.hasFlashPlayerVersion("9.0.0")) {  // has Flash
    swfobject.embedSWF("http://apps.cooliris.com/embed/cooliris.swf",
            "wall", "975", "400", "9.0.0", "",
            flashvars, params);
}
else {  // no Flash
    document.getElementById("wall").innerHTML = "<h2 style='margin-top:80px;'><a href='/mobile/'><img src='/global/assets/objects/images/icons/cell.png' border='0' /><br/>Give the mobile version of my site a try.</a></h2><h3 style='margin-top:40px;'>Your Flash plugin is missing or it is not supported.</h3><p><a href='http://get.adobe.com/flashplayer/' target='_blank'><img src='/global/assets/objects/images/icons/get_adobe_flash_player.png' alt='Get Adobe Flash' title='Get Adobe Flash' border='0' /></a></p>";
}


// =========================================================================================================
// COOLIRIS COVER ANIMATION
// =========================================================================================================
//function setOpacity(level) {
//    element = document.getElementById("wallCover");
//    element.style.opacity = level;
//    element.style.MozOpacity = level;
//    element.style.KhtmlOpacity = level;
//    element.style.filter = "alpha(opacity=" + (level * 100) + ");";
//}

//var duration = 1500; /* 1000 millisecond fade = 1 sec */
//var steps = 30; /* number of opacity intervals */
//function fadeOut() {
//    for (i = 0; i <= 1; i += (1 / steps)) {
//        setTimeout("setOpacity(" + i + ")", i * duration);
//    }
//}
//setTimeout("fadeOut()", 5000);


// =========================================================================================================
// GOOGLE ANALYTICS
// ========================================================================================================= 
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-239580-1']);
_gaq.push(['_trackPageview']);

(function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();