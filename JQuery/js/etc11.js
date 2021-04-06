var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
var speed = 0;
var $banner1 = null;
var $banner2 = null;
$(document).ready(function(){
    init();
    swap($banner1, 1000);
    swap($banner2, 500);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed){
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length); //todo. random 배열값 잡아오기.
        var imgName = "images/" + logos[currentIndex];
        selector.attr("src", imgName); //? src 속성값에 경로(images/) 및 파일명(array 0,1,2...random) 삽입.
    }, speed);
}