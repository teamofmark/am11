var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
var $fishWidth = 0;

$(function(){
    init();
    fishStartPosition();
    initEvent();
});
// ? 대상선언
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
    console.log("1. 대상 선언 완료");
}
// ? 초기 위치 설정
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100+(i*150)
        });
    }
    console.log("2. 초기위치설정완료");
}
// ? 이벤트처리 함수
function initEvent(){
    $("#start").click(startGame);
    console.log("3. 게임시작 함수 불러오기 성공");
}
// ? 게임 시작 함수
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();// ? 물고기 움직임 함수
            displayFishPositionInfo();// ? 움직인 물고기 위치 표시함수
            checkGoalFish();// ? 결승선 도달 감지 함수
        },200);
        console.log("4. 게임 정상 시작.");
    }
}
// ? 물고기 움직임 함수
function updateFishPosition(){
    // todo 물고기를 랜덤으로 움직여보기(0,1,2 번순서대로)
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);// todo.1 n번째물고기 구하기
        var step = Math.ceil(Math.random()*30);// todo.2 랜덤이동거리 구하기
        var newLeft = $fish.position().left + step;// todo.3 n번째물고기 이동값 불러오기
        $fish.css("left", newLeft);// todo.4 n번째물고기에게 이동 지시.
    }
    console.log("5. 물고기 움직임 정상.");
}
function displayFishPositionInfo(){

}
function checkGoalFish(){

}