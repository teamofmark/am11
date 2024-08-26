var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex1 = 0;
var currentIndex2 = 1;
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
        // ? 무작위로 targetIndex를 변경 해야함 (배열수를 넘을수는없음.)
        targetIndex = Math.floor(Math.random()*logos.length);
        // todo 나머지 부분 채워서 완성하기
        var imgName = "images/" + logos[targetIndex];
        // ! 경로는 html입장에서의 경로를 입력해야 함.
        selector.attr("src",imgName);
    /*
    var value = parseInt(Math.random()*50)+50;
    $numb.text(value);
    ! random method : 매개변수 = x, 리턴값 = 0 - 1 사이 소수값.
    ? 1. random 메서드는 0 - 1 범위에서 0 과 1을 포함하지 않는 소수를 랜덤하게 리턴한다. (0.111111111~0.999999999)
    ? 2. parseInt는 안의 수를 소수에서 정수로 변환한다.
    ? 3. random*50 이 되면 결과적으로 0 ~ 50 사이의 정수가 나오게 된다.(parseInt) 
    ? 4. 예를 들어 random 에서 0.9938 을 리턴했다면 * 50 이 되면서 49.69 가 되고 parseInt로 인해 49가 된다. 그 이후 50이 더해지며 99가 된다.
    */
    /*
    ! Math.floor method : 매개변수 = num : 실수. 리턴값 = 입력값이 실수 인 경우 내림 처리(ex 10.2 = 10)
    ! Math.ceil method : 매개변수 = num : 실수. 리턴값 = 입력값이 실수 인 경우 올림 처리(ex 10.2 = 11)
    */
    },speed);
}