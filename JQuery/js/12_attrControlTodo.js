/*
    todo. 1 일정한 시간에 한 번씩 배열에 들어있는 이미지를 순차순환 시켜야 한다.
    todo. 2 전환 시간을 각 이미지 별로 설정할 수 있게 해야함.
    todo. 3 이미지가 계속해서 롤링 될 수 있도록 만들어야함.
    todo. 4 하나의 함수를 활용해 n개의 배너가 동작 할 수 있도록 만들어야 함.
*/
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07jpg","logo_08.jpg"];
var speed = 0;
var $banner1 = null;
var $banner2 = null;
var currentIndex1 = 0;
var currentIndex2 = 0;

$(document).ready(function(){
    init();// todo. 전역변수에 대상 변수 선언하기
    // todo. 실행함수 불러오기
    swap($banner1, 1000, currentIndex1); 
    swap($banner2, 3000, currentIndex2); 
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector,speed,targetIndex){
    setInterval(function(){
        // todo 완성시켜보기
    },speed);
}