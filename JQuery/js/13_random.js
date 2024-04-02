var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var $banner1 = null;
var $banner2 = null;
var speed = 0;
var currentIndex1 = 0;
var currentIndex2 = 0;

// ? 선언부
$(document).ready(function(){
    init();
    swap($banner1,1000,currentIndex1);
    swap($banner2,3000,currentIndex2);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector,speed,targetIndex){
    setInterval(function(){
        targetIndex = Math.floor(Math.random()*logos.length);
        console.log(targetIndex);
        var imgName = "images/" + logos[targetIndex];
        console.log(imgName);
        selector.attr("src",imgName);
    },speed);
}