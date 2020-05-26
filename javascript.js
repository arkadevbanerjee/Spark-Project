 $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll < 300){
        $('nav').css('background', 'transparent');
        /*$("nav a").hover(function(){
  			$(this).css("color", "black");
  			}, function(){
  			$(this).css("color", "white";
		});*/
    } else{
        $('nav').css('background', 'rgb(240, 173, 78)');
        /*$('nav a').css('color', 'black');
        $("nav a").hover(function(){
  			$(this).css("color", "white");
  			}, function(){
  			$(this).css("color", "black";
		});*/
    }
});