  window.onload=function(){
	   document.getElementById('liA').onclick=function(){window.location = "首页.html" }; 
	   document.getElementById('liB').onclick=function(){window.location = "动漫.html" };
	   document.getElementById('liC').onclick=function(){window.location = "漫画.html" };
	   document.getElementById('liD').onclick=function(){window.location = "游戏.html" };
	   document.getElementById('liE').onclick=function(){window.location = "小说.html" };
	   document.getElementById('liF').onclick=function(){window.location = "音乐.html" };	  
	   document.getElementById('liG').onclick=function(){window.location = "注册界面.html" };
	   
	   createCode();
	   document.getElementById('phone').onfocus = clearA;
	   document.getElementById('phone').onblur = resetA;
       document.getElementById('passwordA').onfocus = function(){clearB(this)};
	   document.getElementById('passwordA').onblur = function(){resetB(this)};
	   document.getElementById('identityA').onfocus = function(){clearC(this)};
	   document.getElementById('identityA').onblur = function(){resetC(this)};
	   document.getElementById('loginbuttonA').onclick = loginA;
	   document.getElementById('registerbuttonA').onclick=function(){window.location = "注册界面.html" };
   }
   function clearA(){
       var oTemp = document.getElementById('textCheck');
	   var obj = document.getElementById('phone');
       if(obj.value==obj.defaultValue){
           obj.value="";
           obj.style.color="black";
		   oTemp.innerHTML="";
		 }
	}
   function resetA(){
	   var obj = document.getElementById('phone');
	   var oTemp = document.getElementById('textCheck');
	   if(obj.value==""){
		   obj.value=obj.defaultValue;
		   obj.style.color="#999";
	       oTemp.innerHTML="快点输入你的装逼用户名呀";
	   }
   }
   function clearB(obj){
       var oTemp = document.getElementById('passCheckA');
	   if(obj.value==obj.defaultValue){
		   obj.value="";
		   obj.type="password";
		   obj.style.color="black";
		   oTemp.innerHTML="";
	   }
   }
   function clearC(obj){
	   if(obj.value==obj.defaultValue){
		   obj.value="";
		   obj.style.color="black";
	   }
   }
   function resetB(obj){
	   var oTemp = document.getElementById('passCheckA');
	   if(obj.value==""){
		   obj.value=obj.defaultValue;
		   obj.type="text";
		   obj.style.color="#999";
	       oTemp.innerHTML="快点输入密码呀，我又不看";
	   } 
   }
   function resetC(obj){
	   var oTemp1 = document.getElementById('identityCode');
	   var oTemp2 = document.getElementById('identityA');
	   var oTemp3 = document.getElementById('identityCheckA');
	   if(oTemp1.innerHTML == oTemp2.value){
	       oTemp3.innerHTML = "这个验证码竟然是正确的";
	   }
	   else{
	       oTemp3.innerHTML = "这么简单的验证码你也能输错！";
	   }
	   if(obj.value==""){
		   obj.value=obj.defaultValue;
		   obj.style.color="#999"; 
	   } 
   }
   function checkA(){
		if(oTemp1.value == oTemp2.value)
		 {
		    oTemp3.innerHTML = "对了";
		 }
   }
   function loginA(){
        alert("在点一百遍就登陆了哦   ╮(╯▽╰)╭ ");
   }
   function createCode()   {  
            var oTemp = document.getElementById('identityCode');
			var seed = new Array(  
                    'abcdefghijklmnopqrstuvwxyz',  
                    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',  
                    '0123456789'  
            );   
			var idx,i;
			var result = '' ;
			for(i=0;i<5;i++)
			{
			    idx = Math.floor(Math.random()*3);
                result += seed[idx].substr(Math.floor(Math.random()*(seed[idx].length)), 1);  
			}
			oTemp.innerHTML = result ;
		}