   window.onload = function(){	  
	   document.getElementById('liA').onclick=function(){window.location = "首页.html" };
	   document.getElementById('liB').onclick=function(){window.location = "漫画.html" };
	   document.getElementById('liC').onclick=function(){window.location = "游戏.html" };
	   document.getElementById('liD').onclick=function(){window.location = "小说.html" };
	   document.getElementById('liE').onclick=function(){window.location = "音乐.html" };
       document.getElementById('liF').onclick=function(){window.location = "注册界面.html" };
	   document.getElementById('liG').onclick=function(){window.location = "登陆界面.html" };	  
	   
	   var spans = document.getElementById('title').getElementsByTagName('span');
	   var oPos = 0;
	   var oLen = spans.length;			  
	 
	   var lis = document.getElementById('ulC').getElementsByTagName('li');

	   var op = document.getElementById('ulB');	
	   		 	   	    	   
	   var oStar1 = document.getElementById('star1');
	   var oStar2 = document.getElementById('star2');
	   var oStar3 = document.getElementById('star3');
	   var oStar4 = document.getElementById('star4');
	   var oStar5 = document.getElementById('star5');
	   var oMove = document.getElementById('thunderimg');
	 
	  document.getElementById('gifbg').onmousemove = function(evt){
	      var oEvent = evt || window.event;
          var scrollleft = document.documentElement.scrollLeft || document.body.scrollLeft;
          var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
          var oTemp1 = document.getElementById('gifbg').clientWidth;
	      var oTemp2 = document.getElementById('gifbg').clientHeight;    
		  var oTemp3 = oEvent.offsetX - 1/3*oTemp1;
          var oTemp4 = oEvent.offsetY - 1/2*oTemp2;
		  oMove.style.left = oTemp3<0 ? (100+"px") : (-100 +"px");
          oMove.style.top  = oTemp4<0 ? (25+"px") : (-25 +"px");
	      oStar1.style.left = oTemp3<0 ? (110+"px") : (50 +"px");
		  oStar1.style.top  = oTemp4<0 ? (-310+"px") : (-330 +"px");
		  oStar2.style.left = oTemp3<0 ? (60+"px") : (0 +"px");
		  oStar2.style.top =  oTemp4<0 ? (-200+"px") : (-220 +"px");
		  oStar3.style.left = oTemp3<0 ? (120+"px") : (60 +"px");
		  oStar3.style.top  = oTemp4<0 ? (-120+"px") : (-140 +"px");
		  oStar4.style.left = oTemp3<0 ? (720 +"px") : (650 +"px");
		  oStar4.style.top =  oTemp4<0 ? (-410 +"px") : (-440 +"px");
		  oStar5.style.left = oTemp3<0 ? (740 +"px") : (670 +"px");
		  oStar5.style.top =  oTemp4<0 ? (-210 +"px") : (-240 +"px");
	 }
	 
	  document.getElementById('gifbg').onmouseout = function(){
		  oMove.style.left = 0 + "px";
		  oMove.style.top = 0 + "px";  
		  oStar1.style.left = 70 + "px";
		  oStar1.style.top = -300 + "px";
		  oStar2.style.left = 20 + "px";
		  oStar2.style.top  = -220 + "px";
		  oStar3.style.left = 80 + "px";
		  oStar3.style.top  = -150 + "px";
		  oStar4.style.left = 700 + "px";
		  oStar4.style.top  = -400 + "px";
		  oStar5.style.left = 720 + "px";
		  oStar5.style.top  = -250 + "px";
	 }	  
		setTimeout(function(){op.style.marginLeft = -100+"%";},5000);
	    setTimeout(function(){op.style.marginLeft = -200+"%";},10000);
		setTimeout(function(){op.style.marginLeft = -300+"%";},15000);
		setTimeout(function(){op.style.marginLeft = -400+"%";},20000);
		setTimeout(function(){op.style.marginLeft = -0+"%";},25000);
		
		setInterval(function(){
			 spans[0].style.display='none';
			 spans[1].style.display='none';
			 spans[2].style.display='none';
			 spans[3].style.display='none';
			 spans[4].style.display='none';
			 oPos = ++oPos == oLen ? 0: oPos;
			 spans[oPos].style.display='inline';	 
		},5000);
		
		setInterval(function(){
			setTimeout(function(){
				op.style.marginLeft = -100+"%";
			},5000);
			setTimeout(function(){
				op.style.marginLeft = -200+"%";
			},10000);
			setTimeout(function(){
				op.style.marginLeft = -300+"%";
			},15000);
			setTimeout(function(){
				op.style.marginLeft = -400+"%";
			},20000);
			setTimeout(function(){
				op.style.marginLeft = -0+"%";
			},25000);
	  },25000);
	  
		lis[0].onclick = function(){op.style.marginLeft = -0+"%" ;	spans[0].style.display="inline";
		                                                            spans[1].style.display="none";
																	spans[2].style.display="none";
																	spans[3].style.display="none";
																	spans[4].style.display="none";};
		lis[1].onclick = function(){op.style.marginLeft = -100+"%" ;spans[0].style.display="none";
		                                                            spans[1].style.display="inline";
																	spans[2].style.display="none";
																	spans[3].style.display="none";
																	spans[4].style.display="none";};
		lis[2].onclick = function(){op.style.marginLeft = -200+"%" ;spans[0].style.display="none";
		                                                            spans[1].style.display="none";
																	spans[2].style.display="inline";
																	spans[3].style.display="none";
																	spans[4].style.display="none";};
		lis[3].onclick = function(){op.style.marginLeft = -300+"%" ;spans[0].style.display="none";
		                                                            spans[1].style.display="none";
																	spans[2].style.display="none";
																	spans[3].style.display="inline";
																	spans[4].style.display="none";};
		lis[4].onclick = function(){op.style.marginLeft = -400+"%" ;spans[0].style.display="none";
		                                                            spans[1].style.display="none";
																	spans[2].style.display="none";
																	spans[3].style.display="none";
																	spans[4].style.display="inline";};
  }