$(function(){	
	$(".top li:nth-child(1)").click(function(){window.location.href="首页.html"});
	$(".top li:nth-child(2)").click(function(){window.location.href="动漫.html"});
	$(".top li:nth-child(4)").click(function(){window.location.href="游戏.html"});
	$(".top li:nth-child(5)").click(function(){window.location.href="小说.html"});
	$(".top li:nth-child(6)").click(function(){window.location.href="音乐.html"});
	$(".top li:nth-child(7)").click(function(){window.location.href="注册界面.html"});
	$(".top li:last-child").click(function(){window.location.href="登陆界面.html"});
	
	$(".divA .introduce").hide();
	$(".divA .blockA").hover(function(){
	    $(".divA").find(".introduce").stop().fadeTo(500,1)      
	},
    function(){
	    $(".divA").find(".introduce").stop().fadeTo(500,0)
	});
	
	
	$(".divB .introduce").hide();
	$(".divB .blockB").hover(function(){
	    $(".divB").find(".introduce").stop().fadeTo(500,1)      
	},
    function(){
	    $(".divB").find(".introduce").stop().fadeTo(500,0)
	});
	
	
	$(".divA .blockA .rsp").hide();	
	$(".divA .blockA").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5)
		$(this).find(".text").stop().animate({left:'3'}, {duration: 500})
	},
	function(){
		$(this).find(".rsp").stop().fadeTo(500,0)
		$(this).find(".text").stop().animate({left:'1024'}, {duration: 500})
		$(this).find(".text").animate({left:'-1024'}, {duration: 0})
	});
	
	
	$(".divB .blockB .rsp").hide();	
	$(".divB .blockB").hover(function(){
		$(this).find(".rsp").stop().fadeTo(500,0.5)
		$(this).find(".text").stop().animate({left:'3'}, {duration: 500})
	},
	function(){
		$(this).find(".rsp").stop().fadeTo(500,0)
		$(this).find(".text").stop().animate({left:'1024'}, {duration: 500})
		$(this).find(".text").animate({left:'-1024'}, {duration: 0})
	});
});

   