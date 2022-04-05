// ? 변수 : 물고기들, interval초기화, 기록표시부, 결승선, 물고기사이즈
var $fishList = null;
var timerID = -1;
var $info = null;
var goalline = 0;
var $fishWidth = 0;

$(document).ready(function(){
    init();
    fishStartPosition();

    initEvent();
});

function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    $goalline = $("#bar").position().left - $fishWidth;
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        
        $fish.css({
            left : 0,
            top : 100 + (i * 150)
        });
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();// ? 물고기 위치 랜덤 변화
            displayFishPositionInfo();// ? 변화된 좌표값 출력
            // ? 결승선 도달 감지(종료함수)
        },200);
    }
}
function updateFishPosition(){
    //? 0번 물고기 이동 > 1번 물고기 이동 > 2번 물고기 이동. = 모든 이동은 random으로 이동.
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? nth 물고기.
        var step = Math.ceil(Math.random()*10);
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
}
// todo. 물고기 위치 출력함수 만들기
function displayFishPositionInfo(){

}