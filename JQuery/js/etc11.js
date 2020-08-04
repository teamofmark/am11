/*
    심플 이미지 배너 만들기 ver 1.0
    1. 1초에 한 번씩 배열에 들어있는 이미지를 순차적으로 전환시켜 주세요.
    2. 이미지가 무한 반복해서 전환되게 만들어 주세요.
    즉, 마지막 번째 이미지가 출력된 상태에서 다음 이미지는 0번째 이미지가 출력돼야 합니다.
*/

var currentIndex = 0; //? 배열 선택 변수 초기화.
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
//? 이미지 파일 배열
var $banner = null;

$(document).ready(function(){
    init(); //? 대상변수 선언부.

});

function init(){
    $banner = $(".banner");
}
function swap(){
    
}
function reset(){

}