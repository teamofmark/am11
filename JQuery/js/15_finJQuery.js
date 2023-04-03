var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
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
    goalLine = $("#bar").position().left - $fishWidth;
}
function fishStartPosition(){
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); //? 물고기 움직임 함수
            displayFishPositionInfo(); //? 물고기 위치 출력 함수
            checkGoalFish(); //? 결승선감지 함수
        },200);
    }
}
function updateFishPosition(){
    console.log('1. 물고기 움직인다.');
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? n번째 물고기 0,1,2..
        var step = Math.ceil(Math.random()*10);//? 물고기 이동 범위 (큰값-x, )
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
}

function displayFishPositionInfo(){
    // todo. 물고기 위치 정보 출력하기.
}