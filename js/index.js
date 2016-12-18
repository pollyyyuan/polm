	Zepto(function($){
		var $header=$('#header'),
			$showBox=$('#header .show-box'),
			$slideBtn=$('.slide-btn');
		var showSlide={
			showUp:function(){
				$showBox.height(0);
				$header.removeClass('header-full');
				$slideBtn.addClass('slide-down').removeClass('slide-up');
			},
			showDown:function(){
				$showBox.height('100%');
				$header.addClass('header-full');
				$slideBtn.removeClass('slide-down').addClass('slide-up');
			}
		}
		$('.slide-btn').tap(function(){
			if($(this).hasClass('slide-up'))
			{
				showSlide.showUp();
			}
			else{
				showSlide.showDown();
			}
		})
	})