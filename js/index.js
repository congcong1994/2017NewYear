var screenwidth=document.body.clientWidth || document.documentElement.clientWidth;
var screenheight=document.body.clientHeight || document.documentElement.clientHeight;


$("html").css.width=$("body").css.width=$(".swiper-container").css.width=screenwidth;
$("html").css.height=$("body").css.height=$(".swiper-container").css.height=screenheight;
$("img").css({"display":"block","width":"100%"});
$(".page1").css({"width":"100%","height":"100%","backgroundSize":"100% 100%"});
console.log($(".page1").css.backgroundSize);
