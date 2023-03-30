/*
    심플 이미지 배너 만들기 ver 2.0
    1. 일정한 시간에 한 번씩 배열에 들어있는 이미지를 순차적으로 전환시켜 주세요.
    2. 전환 시간을 설정할 수 있게 만들어 주세요.
    3 이미지가 계속해서 무한 롤링되게 만들어 주세요. 즉, 마지막 번째 이미지가 출력된 상태에서 0번째 이미지가 출력돼야 합니다.
    4 함수를 활용해 하나의 함수로 두 개의 배너가 동작할 수 있게 만들어 주세요.
*/

var currentIndex1 = 0;
var currentIndex2 = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var speed = 0;
var $banner1 = null;
var $banner2 = null;
//? 이상 etc11 과 동일

$(document).ready(function(){
    init();
    swap($banner1, 1000, currentIndex1); //? 배너전환 기능에 대상과 속도 매개변수로 전달.
    swap($banner2, 3000, currentIndex2);
});


function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}

function swap(selector, speed, targetIndex){
    setInterval(function(){

        var imgName = "images/" + logos[targetIndex];
        targetIndex ++;
        selector.attr("src", imgName); 
        
        if(targetIndex >= logos.length){
            targetIndex = 0;
        } //? reset

    }, speed); 

}