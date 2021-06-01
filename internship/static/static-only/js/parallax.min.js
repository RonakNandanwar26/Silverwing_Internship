(function($) {
	"use strict";
    $.fn.parallax = function(options) {

        var windowHeight = $(window).height();

        // Establish default settings
        var settings = $.extend({
            speed : 0.20
        }, options);

        // Iterate over each object in collection
        return this.each( function() {

			// Save a reference to the element
			var $this = $(this);
			var params = {
				windowWidth: 0,
				scrollTop: 0,
				offset: 0,
				height: 0,
				yBgPosition: 0
			}
			// Set up Scroll Handler
			$(document).scroll(function(){

				params.scrollTop = $(window).scrollTop();
				params.offset = $this.offset().top;
				params.height = $this.outerHeight();
				params.windowWidth = $(window).width();

				// Check if above or below viewport
				if (params.offset + params.height <= params.scrollTop || params.offset >= params.offset + windowHeight) {
					return;
				}

				params.yBgPosition = Math.round((params.offset - params.scrollTop) * settings.speed);
				
				if( params.windowWidth <= 360 ){ params.yBgPosition = 0; }

				// Apply the Y Background Position to Set the Parallax Effect
				//$this.css('background-position', 'center ' + yBgPosition + 'px');
				$this.css('cssText', 'background-position: center ' + params.yBgPosition + 'px !important; background-attachment: fixed !important; background-size: cover !important;');		
			}).trigger('scroll');
		});
    }

jQuery(document).ready(function ($) {
    "use strict";
    var window_height = $(window).height();
    $('.stripe-parallax-bg').each(function () {
        var $this = $(this),
			speedFactor = $this.data('parallax-speed');
		$this.css({
			'background-attachment': 'fixed',
			'background-size': 'cover'
		}).parallax({
			speed : speedFactor
		});
    });
    /*Video parallax*/
    $('.stripe-parallax-video').each(function () {
        var $this = $(this),$video = $this.find('video'),speedFactor=$(this).data('parallax-speed')||0.7,ratio=0,video_bottom=0;
        var video_height = 0;
        var el_height = $(this).outerHeight();
        $video.bind('loadeddata', function(){
            adjustvideo();
            doScroll();
        });
        var adjustvideo = function(){
            ratio = $video.data('ratio');
            //video_height = $(window).width() / ratio;
            video_height = el_height + (el_height + window_height) * (1 - speedFactor);
            if (video_height < $(window).width() / ratio) {
                video_height = $(window).width() / ratio
            }
            $video.css({
                'width': video_height * ratio + 'px',
                'maxWidth': video_height * ratio + 'px',
                bottom: 0
            });
        }
        if (speedFactor == 1) return;
        var doScroll = function(){
            if ($(window).width() < 768) return;
            $video.attr(
                {
                    'appear':isappears($this),
                    'delta':Math.round(isappears($this) * (1-speedFactor))
                }
            );
            var delta = Math.round(isappears($this) * (1-speedFactor));
            $video.css({
                bottom: (0 - delta) + 'px'
            })
        };
        adjustvideo();
        doScroll();
        $(window).bind('scroll', doScroll).bind('resize',function(){
            adjustvideo();
            doScroll();
        }).trigger('scroll');		
    })
	function playVideo(video){
		if (video.get(0).paused == true) {
			video.get(0).play();
		} else {
			video.get(0).pause();
		}
	}
	function pauseVideo(video){
		if (video.get(0).paused != true) {
			video.get(0).pause();
		}
	}
	/*End Video btn */
	$('.custom-bg-video').each(function(){
		var $this = $(this);
		if($('.tb-videobg-control-btn',$this).length > 0){
			var video = $this.find('video');
			var content = $this.find('.stripe-video-content');
			
			video.bind("ended pause", function() {
			   content.css({opacity: 0, visibility: "visible"}).animate({opacity: 1.0, visibility: "hidden"}, 200);
			   $(this).addClass('video-pause').removeClass('video-play');
			});
			video.bind("play", function() {
			   content.css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0, visibility: "visible"}, 200);
			   $(this).addClass('video-pause').removeClass('video-pause');
			});
			$('.tb-videobg-control-btn',$this).click(function(e){
				//console.log('click button');
				e.stopPropagation();
				playVideo(video);	
			})
			$('.ww-video-bg,.stripe-video-content,video',$this).click(function(e){
				e.stopPropagation();
				playVideo(video);	
			})
		}
	})
    function isappears(element) {
        var scrolltop = $(window).scrollTop(),top = $(element).offset().top;
        if(top < $(window).height()){
            return scrolltop;
        }
        if ((scrolltop + $(window).height()) >= ($(element).offset().top)) {
            return scrolltop + $(window).height() - $(element).offset().top;
        }
        return 0;
    }
});

}(jQuery));