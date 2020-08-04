/*
    심플 이미지 배너 만들기 ver 2.0
    1. 일정한 시간에 한 번씩 배열에 들어있는 이미지를 순차적으로 전환시켜 주세요.
    2. 전환 시간을 설정할 수 있게 만들어 주세요.
    3 이미지가 계속해서 무한 롤링되게 만들어 주세요. 즉, 마지막 번째 이미지가 출력된 상태에서 0번째 이미지가 출력돼야 합니다.
    4 함수를 활용해 하나의 함수로 두 개의 배너가 동작할 수 있게 만들어 주세요.
*/

var currentIndex = 0;
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var $banner1 = null;
var $banner2 = null;
var speed = 0;

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
            ! random method : 매개변수 = x, 리턴값 = 0 - 1 사이 소수값.
        ? 1. random 메서드는 0 - 1 범위에서 0 과 1을 포함하지 않는 소수를 랜덤하게 리턴한다. (0.111111111~0.999999999)
        ? 2. parseInt는 안의 수를 소수에서 정수로 변환한다.
        ? 3. random*50 이 되면 결과적으로 0 ~ 49 사이의 정수가 나오게 된다.(parseInt) 
        ? 4. 예를 들어 random 에서 0.9938 을 리턴했다면 * 50 이 되면서 49.69 가 되고 parseInt로 인해 49가 된다. 그 이후 50이 더해지며 99가 된다.
        */
        var imgName = "images/" + logos[currentIndex];
        selector.attr("src", imgName);
        // reset();
    }, speed);
}
/*
function reset(){
    if(currentIndex >= logos.length){
        currentIndex = 0;
    }
}
*/
