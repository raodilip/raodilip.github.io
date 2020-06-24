$(document).ready(function(){
 $('.header').height($(window).height());

 $('.nav a').on('click', function(){
    $(".navbar-toggle").click();
});

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})