	Zepto(function($){
		var $header=$('#header'),
			$showBox=$('#header .show-box'),
			$slideBtn=$('.slide-btn');
		var selector={
			parentBox:$('.content'),
			fullBox:$('.content-box'),
			pageBox:$('.content-box section'),
			dotBox:$('#mainNav a')
		};	
		var clientHei=document.documentElement.clientHeight-90;
		console.log(clientHei);
		$showBox.height(clientHei);
		var showSlide={
			showUp:function(){
				// $showBox.css('height',0);
				$showBox.css('-webkit-transform','translate3d(0,-'+clientHei+'px,0)');
				$header.removeClass('header-full');
				$slideBtn.addClass('slide-down').removeClass('slide-up');
				// $showBox.css('opacity','0');
			},
			showDown:function(){
				// $showBox.css('height',clientHei+'px');
				$showBox.css('-webkit-transform','translate3d(0,0,0)');
				$header.addClass('header-full');
				$slideBtn.removeClass('slide-down').addClass('slide-up');
				// $showBox.css('opacity','1');
			}
		};
		$slideBtn.on('tap',function(){
			if($(this).hasClass('slide-up'))
			{
				console.log(1);
				showSlide.showUp();
			}
			else{
				console.log(1);
				showSlide.showDown();

			}
		});
		$showBox.on('swipeUp',function(){
			showSlide.showUp();
		});
		
		selector.dotBox.on('tap',function(){
			if($showBox.height()>0)
			{
				showSlide.showUp();
			}
			// var index=$(this).data('index');
			// $().pageChange(selector,index);
			
		});
		selector.dotBox.each(function(index){
			if(!$(this).hasClass('nav-active')){
				$().pageChange(selector);
			}
		})

	})