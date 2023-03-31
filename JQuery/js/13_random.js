var currentIndex1 = 0;
var currentIndex2 = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var speed = 0;
var $banner1 = null;
var $banner2 = null;

$(document).ready(function(){
    init();
    swap($banner1,1000,currentIndex1);
    swap($banner2,3000,currentIndex2);
});
function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}
function swap(selector, speed, targetIndex){
    setInterval(function(){
        targetIndex = Math.floor(Math.random()*logos.length);
        // ? random -> random()*한계수(ex > 10)
        /*
            ! Math.floor method : 매개변수 (number) : 실수값.  리턴값 = 입력값 실수를 내림처리. 

            ! Math.ceil method :  매개변수 (number) : 실수값.  리턴값 = 입력값 실수를 올림처리.
        */
        /*
            ! random method : 매개변수 (x), 리턴값 0 - 1 사이의 소수
            ? 1. random 메서드는 0 - 1 범위에서 0과 1을 포함하지 않는 소수를 random하게 return.(0.111111111 ~ 0.999999999)
            ? 2. parseInt는 안의 수를 소수에서 정수로 변환.
            ? 3. 예를들어 random * 50 -> 결과 : 0 ~ 49 사이의 정수를 return.
            ? 4. 증명 : random -> 0.9938 * 50 -> 49.69 -> 49.
        */
        var imgName = "images/" + logos[targetIndex];
        selector.attr("src", imgName);
    },speed);
}