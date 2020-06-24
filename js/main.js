$(document).ready(function(){
 $('.header').height($(window).height());

//  $('.navbar a').on('click', function(){
   
// });

 $(".navbar a").click(function(){
	 alert();
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})