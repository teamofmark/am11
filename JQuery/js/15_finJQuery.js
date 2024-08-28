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
// ? 물고기 위치출력 함수
function displayFishPositionInfo(){
    // todo 경기현황판 완성시켜보기
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);// todo.1 n번째 물고기 구하기
        info += i + "번 물고기 : " + $fish.position().left.toFixed(2) + "px <br>";// todo.2 n번째 물고기 : 현재 위치값px <br> 출력부 생성
    }
    $info.html(info)// todo.3 위에서 생성된 출력부를 출력.(.html()함수);
    console.log("6. 물고기 현재 위치 표시 정상.");
}
// ?결승선 도달 감지 함수
function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
               index: (i),
               position: fishCurrentPosition 
            });
            console.log("7. 데이터 저장 성공.");
        }
    }
    if(winnerList.length>0){
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position값 기준 내림차순 정렬
            /*
                오름차순 -> 진행될수록 점점 값이 커지거나(1,2,3,4...) 정순으로(ex> a,b,c,d..) 나타나는 것.
                내림차순 -> 진행될수록 점점 값이 내려가거나(...4,3,2,1) 역순으로(ex> ...d,c,b,a) 나타나는 것.
            */
        });
        endGame();
        console.log("8. 우승 물고기 선별 완료.");
        alert("우승!" + winnerList[0].index+"번 물고기");
    }
}
function endGame(){
    // todo. 1 setInteval Kill
    // todo. 2 setIntervalVariable reset
    // todo. 3 log ("9. 게임종료.") 출력.
}