var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
var $fishWidth = 0;
$(function(){
    init();
    fishStartPosition(); //? 물고기 시작 위치 설정
    initEvent();
});
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
    console.log("1. 대상 선언 완료.");
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
    console.log("2. 초기위치설정완료.");
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
                    updateFishPosition(); //? 물고기 움직이는 함수
                    displayFishPositionInfo(); //? 움직인 물고기 위치 기록 하는 함수 
                    checkGoalFish(); //? 결승선 도달 감지 하는 함수
                },200);
    }
}
function updateFishPosition(){

}
function displayFishPositionInfo(){

}
function checkGoalFish(){

}