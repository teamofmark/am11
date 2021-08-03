var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
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
function swap(selector, speed){
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length);
        /*
            ! random method : 매개변수 = x, return Value = 0 - 1 사이 소수값.(0,1제외)
            ? 1. random Method는 0 - 1 범위에서 0과 1을 포함하지 않는 소수를 random return.
            * (0.111111111 ~ 0.999999999)
            ? ex Value > 50
            ? ex> random에서 0.9938을 return될 때 * 50 = 49.69가 됨.
        */
       var imgName = "images/" + logos[currentIndex];
       selector.attr("src", imgName);
    }, speed);
}