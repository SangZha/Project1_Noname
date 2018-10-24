   window.onload=function(){
	   document.getElementById('liA').onclick=function(){window.location = "首页.html" }; 
	   document.getElementById('liB').onclick=function(){window.location = "动漫.html" };
	   document.getElementById('liC').onclick=function(){window.location = "漫画.html" };
	   document.getElementById('liD').onclick=function(){window.location = "游戏.html" };
	   document.getElementById('liE').onclick=function(){window.location = "小说.html" };
	   document.getElementById('liF').onclick=function(){window.location = "音乐.html" };	  
	   document.getElementById('liH').onclick=function(){window.location = "登陆界面.html" };
	   
	   document.getElementById('phone').onfocus = clearA;
	   document.getElementById('phone').onblur = resetA;
       document.getElementById('passwordA').onfocus = function(){clearB(this)};
	   document.getElementById('passwordA').onblur = function(){resetB(this)};
	   document.getElementById('passwordA').onkeyup = function(){checkB(this)};
	   document.getElementById('passwordB').onfocus = function(){clearB(this)};
	   document.getElementById('passwordB').onblur = function(){resetC(this)};
	   document.getElementById('registerbuttonA').onclick = registerA;
	   document.getElementById('loginbuttonA').onclick = function(){window.location = "登陆界面.html" };
   }
   function clearA(){
       var obj = document.getElementById('phone');
       if(obj.value==obj.defaultValue){
           obj.value="";
           obj.style.color="black";
		 }
	}
   function resetA(){
	   var obj = document.getElementById('phone');
	   if(obj.value==""){
		   obj.value=obj.defaultValue;
		   obj.style.color="#999";
	   }
   }
   function clearB(obj){
       if(obj.value==obj.defaultValue){
		   obj.value="";
		   obj.type="password";
		   obj.style.color="black";	   
	   }
   }
   function resetB(obj){
	   if(obj.value==""){
		   obj.value=obj.defaultValue;
		   obj.type="text";
		   obj.style.color="#999";
	   } 
   }
   function checkB(obj){
       var oTemp1 = document.getElementById('passwordA').value;
	   var oTemp2 = document.getElementById('passCheckA');
	   var oTemp3 = /^\w{0,5}$/;
	   var oTemp4 = /^\w{16,}$/;
	   var oTemp5 = /^[A-Za-z0-9_]+$/;
	   if(oTemp3.test(oTemp1)){
 	       oTemp2.innerHTML="密码不能小于6个字符";
	   }
       else if(oTemp4.test(oTemp1)){
		   oTemp2.innerHTML="密码不能大于16个字符";
	   }
	   else if(oTemp5.test(oTemp1)==false){
	       oTemp2.innerHTML="密码含有非法字符（只能数字，字母和下划线）";
	   }
	   else{
	       oTemp2.innerHTML="";		
	   }
   }
   function resetC(obj){
	   if(obj.value==""){
		   obj.value=obj.defaultValue;
		   obj.type="text";
		   obj.style.color="#999";
	   }
       var oTemp1 = document.getElementById('passwordA');
	   var oTemp2 = document.getElementById('passwordB');
	   var oTemp3 = document.getElementById('passwordB').value
	   var oTemp4 = document.getElementById('passCheckB');
	   var oTemp5 = /^[A-Za-z0-9_]+$/;
	   if (oTemp5.test(oTemp3)==false){
	       oTemp4.innerHTML="请确认密码格式是否正确";
	   }
	   else if(oTemp1.value!=oTemp2.value){
           oTemp4.innerHTML="两次输入的密码不相同";
	   }
	   else{
		   oTemp4.innerHTML="";
	   }
	   if(oTemp2.value=="确认密码"){
		   oTemp4.innerHTML="";      
       }
   }
   function registerA(){
	   alert("在点一百遍就成功了呀   ╮(╯▽╰)╭ ");
   }