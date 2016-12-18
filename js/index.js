	Zepto(function($){
		var $header=$('#header'),
			$showBox=$('#header .show-box'),
			$slideBtn=$('.slide-btn');
		var clientHei=document.documentElement.clientHeight-90;
		console.log(clientHei);
		$showBox.height(clientHei);
		var showSlide={
			showUp:function(){
				$showBox.css('height',0);
				$header.removeClass('header-full');
				$slideBtn.addClass('slide-down').removeClass('slide-up');
			},
			showDown:function(){
				$showBox.css('height',clientHei+'px');
				$header.addClass('header-full');
				$slideBtn.removeClass('slide-down').addClass('slide-up');
			}
		};
		$slideBtn.tap(function(){
			if($(this).hasClass('slide-up'))
			{
				console.log(1);
				showSlide.showUp();
			}
			else{
				console.log(1);
				showSlide.showDown();
			}
		})
	})