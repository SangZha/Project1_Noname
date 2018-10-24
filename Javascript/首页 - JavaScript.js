    window.onload=function(){
	   document.getElementById('divA').style.display="none";
	   document.getElementById('liA').onclick=function(){window.location = "动漫.html" };
	   document.getElementById('liB').onclick=function(){window.location = "漫画.html" };
	   document.getElementById('liC').onclick=function(){window.location = "游戏.html" };
	   document.getElementById('liD').onclick=function(){window.location = "小说.html" };
	   document.getElementById('liE').onclick=function(){window.location = "音乐.html" };	  
	   document.getElementById('divA').onclick=function(){window.location = "彩蛋.html" };	  
	   document.getElementById('register').onclick=function(){window.location = "注册界面.html" };
	   document.getElementById('login').onclick=function(){window.location = "登陆界面.html" };
	   document.onselectstart=function(){return false;}   
	   document.getElementById('liF').onclick=function(){paintedeggshell()};
	}
    
	function paintedeggshell(){
	   if(divA.style.display=="none"){
	   document.getElementById('divA').style.display="";
	   }
	   else
	   document.getElementById('divA').style.display="none";
	}