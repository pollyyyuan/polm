;(function($){
	//对象实例化，转化为方法
	$.extend($.fn,{
		"pageChange":function(dom,index,options){
		var eg=new pageChange(options,index);
		return eg.init(dom);
		}
	});
	//创建pageChange对象
	var pageChange=function(options,index){
		this.options=$.extend({
			loop:"flase"
		},options);
		this.lastIndex=index||0;//当前页面索引
	};	
	//创建pageChange的原型
	pageChange.prototype={
	// 初始化方法,dom表示页面节点对象，options表示修改参数
	init:function(dom){
		var me=this;
		//获取节点保存至对象
		me.parentBox=dom.parentBox;
		me.fullBox=dom.fullBox;
		me.pageBox=dom.pageBox;
		me.dotBox=dom.dotBox;
		//页面的个数
		me.pageNum=me.pageBox.length;
		console.log(me.pageNum);
		//一个页面的长度和宽度
		me.pageWidth=me.pageBox.width();
		me.pageHeight=me.pageBox.height();
		//初始化方法
		me.initDot();
		me.dotBox.eq(me.lastIndex).addClass('nav-active');
		me.initEvent();
	},
	//节点变换方法
	activeDot:function(dom){
			dom.addClass('nav-active').siblings().removeClass('nav-active');
	},
	//绑定事件
	initEvent:function(){
		var me=this;
		me.dotBox.on('tap',function(){
			me.lastIndex=$(this).data('index');
			me.initDot();
			$(this).addClass('nav-active');
			me.move();
		});
		me.parentBox.on('swipeLeft',function(){
			if(me.lastIndex<3)
			{	
			me.lastIndex++;
			me.move();
			me.initDot();
			me.dotBox.eq(me.lastIndex).addClass('nav-active');
			}
		});
		me.parentBox.on('swipeRight',function(){
			if(me.lastIndex>0)
			{
			me.lastIndex--;
			me.move();
			me.initDot();
			me.dotBox.eq(me.lastIndex).addClass('nav-active');
			}
		});

	},
	initDot:function(){
		this.dotBox.each(function(){
				$(this).removeClass('nav-active');
			});
	},
	//页面移动动画
	move:function(){
		this.fullBox.css('-webkit-transform','translate3d(-'+this.lastIndex*this.pageWidth+'px,0,0)');
	}
};
})(Zepto);