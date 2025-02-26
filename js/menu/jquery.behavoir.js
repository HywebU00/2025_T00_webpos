(function(){
    jQuery(function(){
    	//search block
		$('.RNmenu .link.search').click(function(){
            var _target = $('.searchType');
			
			if (_target.is('.searchOpen')) {
				_target.removeClass('searchOpen');
			} else {
				_target.addClass('searchOpen');
			}
			
			$('.searchType .btnClose').click(function(){
                _target.removeClass('searchOpen');
            });
        });
		
		$('.searchBtn').click(function() {
			$(this).parents('form:first').submit();
		});
    	    	
    	//gotop
    	$("#gotop").click(function(){
    		$("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
    		return false;	
    	});
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 250){
                $('#gotop').fadeIn("fast"); //設定大於250px才顯示浮層
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
        });
        //Subtitle 
        $(window).scroll(function() {
            if ($(this).scrollTop() <= 143){
                $('.lang').show();
            } else {
            	$('.lang').hide();
            }
        });
		
		//clear value
		$(document).ready(function() {
	        $(".input").val("請輸入查詢詞...");
			$(".email").val("註冊email即為您的會員帳號");
			$(".pw").val("請輸入密碼");
		
		    $(".input").on("focus", function(){
		        $(".input").val("");
		    });
		   $(".email").on("focus", function(){
		        $(".email").val("");
		    });
			$(".pw").on("focus", function(){
		        $(".pw").val("");
		    });
			
		    $(".button").on("click", function(event){
		        $(".input").val("");
		    });
		});
	
	//彈出式選單
		$(function(){
			$("ul.navigation > li:has(ul) > a").append('<div class="arrow-bottom"></div>');
			$("ul.navigation > li ul li:has(ul) > a").append('<div class="arrow-right"></div>');
		});

		//廣告跑馬燈
		$.each(["#mainSwiper", "#headerSwiper", "#newsSwiper"], function(key, item) {
			var mySwiper = new Swiper(item+" .swiper-container",{
					pagination:item+" .swiper-pagination",
					mode:"horizontal",
					loop:!0,
					calculateHeight:!0,
					grabCursor:!0,
					paginationClickable:!0,
					speed:600,
					autoplay:5000
			});
			
			$(item+' .swiper-control[data-slide="prev"]').on('click', function(e){
				e.preventDefault();
				mySwiper.swipePrev();
			});
			
			$(item+' .swiper-control[data-slide="next"]').on('click', function(e){
				e.preventDefault();
				mySwiper.swipeNext();
			});
		});
		
		//預設展開uk-open
		$('li.uk-open').each(function(key, item) {
			var $div = $(item).find('div:first');
			var $ul = $div.find('ul:first');
			$div.css({overflow: 'hidden', height: 'auto', position: 'relative'});
		});
		
		//廣告關閉
		$('#footerBannerClose').click(function() {
			$('.footerBanner').hide();
			$('footer').css('margin', '0px');
			$('#footerSpace').hide();
		});
		
		$('#fontsize').click(function() {
			var m = $('.m-main');
			
			var fontSize = 'M';
			if (m.hasClass('fontXL')) {
				fontSize = 'XL';
			} else if (m.hasClass('fontL')) {
				fontSize = 'L';
			} else {
				fontSize = 'M';
			}
			
			m.removeClass('fontXL');
			m.removeClass('fontL');
			$(this).removeClass('fontXL');
			$(this).removeClass('fontL');
			$(this).removeClass('font');
			
			if (fontSize == 'XL') {
				$(this).addClass('font');
			} else if (fontSize == 'L') {
				m.addClass('fontXL');
				$(this).addClass('fontXL');
			} else if (fontSize == 'M') {
				m.addClass('fontL');
				$(this).addClass('fontL');
			}
			
			return false;
		});
		
		//左右方向箭顯示
		var leftArrow = $('#leftArrow');
		var rightArrow = $('#rightArrow');
		var delayTime = 5000;
		var dragging = false;
		
		if (leftArrow.size() > 0 && rightArrow.size() > 0) {
			$(document).mousedown(function() {
				leftArrow.stop(true);
				leftArrow.animate({
					left: '0px'
				});
				
				rightArrow.stop(true);
				rightArrow.animate({
					right: '0px'
				});
			});
			$(document).on("touchstart", function(e) {
				dragging = false;
				leftArrow.stop(true);
				leftArrow.animate({
					left: '0px'
				});
				
				rightArrow.stop(true);
				rightArrow.animate({
					right: '0px'
				});
			});
			
			$(document).on("touchmove", function(){
				dragging = true;
			});
			
			$(document).mouseup(function() {
				leftArrow.delay(delayTime).animate({
					left: '-32px'
				});
				rightArrow.delay(delayTime).animate({
					right: '-32px'
				});
			});
			
			$(document).on("touchend", function(e) {
				if (dragging) {
					return;
				}
				leftArrow.delay(delayTime).animate({
					left: '-32px'
				});
				rightArrow.delay(delayTime).animate({
					right: '-32px'
				});
			});
		}
		
		//使li可以點選到cp頁
		$('body').on('click', '*[href-link]', function() {
			var link = $(this).attr('href-link');
			if (link != '') {
				location.href = link;
			}
		});
		
		$('.uk-offcanvas-bar').click(function(event) {
			event.stopPropagation();
		});
		
		$('#tm-offcanvas').click(function() {
			$('.m-top').animate({left: '0px'}, 450);
		});
		
		$('.uk-navbar-toggle').click(function() {
			$('.m-top').animate({left: '270px'}, 450);
		});
		
		$('.shopBox input:checkbox').each(function(key, item) {
			if ($(this).prop('checked') == true) {
				$(this).parent('li').addClass('onclicked');
			} else {
				$(this).parent('li').removeClass('onclicked');
			}
		});
		
		$('.shopBox input:checkbox').click(function() {
			if ($(this).prop('checked') == true) {
				$(this).parent('li').addClass('onclicked');
			} else {
				$(this).parent('li').removeClass('onclicked');
			}
		});
		
		$('#mycarousel-1').jcarousel({
			visible: 3,
	        start: 1,
	        scroll: 1
	    });	
		$('#mycarousel-2').jcarousel({
			visible: 4,
	        start: 1,
	        scroll: 1
	    });
		
		var showNum = 5;
		var $carousel3 = $('#mycarousel-3');
		var $carousel3_list = $('>li', $carousel3);
		if ($carousel3_list.size() < 5) {
			showNum = $carousel3_list.size();
		}
		$carousel3.jcarousel({
			visible: showNum,
	        start: 1,
	        scroll: 1
	    });
		
		
		var menu = new cbpHorizontalSlideOutMenu( document.getElementById( 'cbp-hsmenu-wrapper' ) );
		$(document).mouseup(function (e) {
		    var container = $("#cbp-hsmenu-wrapper");

		    if ($(e.target).closest(container).length === 0) {
		    	menu.current = -1;
		    	$('ul.cbp-hsmenu>li.cbp-hsitem-open', container).attr('data-open', '').removeClass('cbp-hsitem-open');
		    	$('.cbp-hsmenubg', container).css('height', '0px');
		    }
		});
		
		if ($.isFunction($.fn.tabs)) {
			if (typeof selectedTabs != 'undefined') {
				$( "#tabs" ).tabs({
					event: "click",
					selected: selectedTabs
				});
			} else {
				$( "#tabs" ).tabs({
					event: "click"
				});
			}
		}
    });
})(jQuery);
