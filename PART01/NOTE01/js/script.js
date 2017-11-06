/////////////////
//?SCRIPT
////////////////
$(function(){
    $('.fadeBtn').hover(function(){
        $(this).stop().animate({opacity:'0.5',fontSize:'48px'},300);
    },function(){
        $(this).stop().animate({opacity:'1',fontSize:'30px'},300);
    });
});

