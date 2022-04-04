var currentIndex = 0;
var logos = ["logo_01.jpg", "logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
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
            ! random Method : 매개변수 = x, return = 0 - 1 사이 소수.
            ? 1. random 메서드는 0 - 1 범위에서 0과 1을 포함하지 않는 소수를 random return.
            * extand :  0.111111111 ~ 0.999999999
            ? 2. 예를 들어 random*50 -> 결과 : 0~49사이 수가 나오는데 -> 정수형변환을 거치면. 49 or 50 이 한계인 random을 출력 가능.
            ? why? random -> 0.9938을 return -> * 50이라며? 49.69 -> 정수형변환(만약 floor(49) / ceil(50))을 거치면 정수형반환.
        
            ! 한줄요약 : random()뒤에 곱하는 숫자 가 한계.
        */
        var imgName = "images/" + logos[currentIndex];
        selector.attr("src", imgName);

        // reset 무쓸모.
        },speed);
}