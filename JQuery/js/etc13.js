/*
    ? random swap banner
    * 각 image slot 2군데에서 별도로 image가 random으로 전환 되게끔 만들기
    * 속도도 다르게.
    ! 함수는 한개.  
*/
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1, 1000); //? 배너 전환 기능에 대상과 속도 매개변수로 전달.
    swap($banner2, 3000);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed){ //? 매개변수 전달받음
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length); //? random arr val 잡아오기
        // ? random : Math.random()*최대수
        var imgName = "images/" + logos[currentIndex];
        selector.attr("src", imgName);

    },speed);
}