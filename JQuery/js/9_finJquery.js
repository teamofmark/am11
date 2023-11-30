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
                console.log("3. 게임 정상 시작됨.");
    }
}
function updateFishPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
    console.log("4. 물고기 움직임 정상.");
}
function displayFishPositionInfo(){
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }
    $info.html(info);
    console.log("5. 물고기 위치 표시 정상.");
}
function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
            console.log("6. 데이터 저장 성공.");
        }
    }
    if(winnerList.length > 0){
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position 기준 내림차순 정렬.
        });
        endGame();
        console.log("7. 우승 물고기 선별 완료.");
        alert("우승!" + winnerList[0].index +"번 물고기");
    }
}
function endGame(){
    clearInterval(timerID);
    timerID = -1;
    console.log("8. 게임 종료.");
}