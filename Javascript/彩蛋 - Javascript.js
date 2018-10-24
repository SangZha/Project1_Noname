$(function(){
	$('.fckback').click(function(){
	    window.location.href="首页.html"
	});
	
	$('#secondimg').hide();
	$('.fcktitle .special').click(function(){
	  if($('#secondimg').css("display")=="none"){
		$('.fckall').css({'background-image':'url(image/plantedeggbg.gif)'});
		$('.fcktitle p').css({'color':'#fff'});
		$('.fckback').css({'color':'#fff'});
		$('.fcktitle .special').html("要不我们回去吧？");
		$('.fcktitle .special').addClass("change")
		$('.fckimg img').css({'height':'20%'})		
		$('#firstimg').hide()
		$('#secondimg').show()}
	  else{		
	    $('.fckall').css({'background-image':''});
		$('.fcktitle p').css({'color':'black'});
		$('.fckback').css({'color':'black'});
		$('.fcktitle .special').html("要不我们来点特效？");
		$('.fcktitle .special').removeClass("change")
		$('.fckimg img').css({'height':'100%'})
		$('#firstimg').show()
		$('#secondimg').hide()}
	});
    
});