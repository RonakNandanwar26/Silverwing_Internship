$(document).ready(function() {
"use strict";

/*============= Counters ===========*/
var barElements = $('.bar li');
for (var i = 0; i < barElements.length; i++) {
 $(barElements[i]).appear(function() {
	  var b = $(this).find("span").attr("data-width");
	  $(this).find("span").animate({
		width: b + "%" //The number to stop for the width of the bar.
	  }, 1700, "easeOutCirc");
	  $(this).find(".value").countTo({
		from: 0, //The number to start counting from. (default: 0)
		to: b, //The number to stop counting at. (default: 100)
		speed: 1700, // Control speed of animation
		refreshInterval: 40 //The number of milliseconds to wait between refreshing the counter. (default: 100)
		});
	});
}

var counterElements = $('.counters');
for (var i = 0; i < counterElements.length; i++) {
	$(counterElements[i]).appear(function() {
	  var counter = $(this).find(".count").html();
	  $(this).find(".count").countTo({
		from: 0, //The number to start counting from. (default: 0)
		to: counter, //The number to stop counting at. (default: 100)
		speed: 1700, // Control speed of animation
		refreshInterval: 40 //The number of milliseconds to wait between refreshing the counter. (default: 100)
		});
	});	
}

/*============= Bottom Handel Slide ===========*/
$('#clientsOpen', '#clientsDropDown').on("click", function () {
    $('#clientsDashboard','#clientsDropDown').slideToggle({
      direction: "up"
    }, 300); // Control speed of animation
    $(this).toggleClass('clientsClose');
	$(this).find("span").toggleClass('ion-android-arrow-down').toggleClass('ion-android-arrow-up');
	return false;
});
  
/*============= Scroll Functions ===========*/
$.localScroll({
	duration:1000, // How long to animate.
	hash:true, // if true, the hash of the selected link, will appear in the address bar.
	onBefore:function( e, anchor, $target ){
		// The 'this' is the settings object, can be modified
	},
	onAfter:function( anchor, settings ){
		// The 'this' contains the scrolled element (#content)
	}
});

$('body').scrollspy({ target:'.botnav', offset: 50 }) ;

/*============= Fancy Box ===========*/
$('.fancybox', '#portfolio').fancybox();

});

(function() {
/*============= PreLoader ===========*/
var images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
//-- usage --//
//add your pics below to preload
preload(
    "img/blurpic.png",
	"img/mainpic.png",
	"img/profilepic.png",
	"img/preloader.gif"
)

/*============= Touch Mobile ===========*/
document.addEventListener("touchstart", function() {},false);
})();