var currentIndex = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1, 1000);
    swap($banner2, 3000);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector,speed){
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length); //? floor : 내림 (ex> 10.2 = 10) / ceil : 올림 (10.2 = 11)
        var imgName = "images/" + logos[currentIndex];
        selector.attr("src",imgName);
    },speed);
}