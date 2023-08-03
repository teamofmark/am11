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
function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i*150)
        });
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    console.log("1. 물고기 이동 시작");
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); //? 이동
            displayFishPositionInfo(); //? 기록
            checkGoalFish(); //? 종료.
        }, 200);
    }
}
function updateFishPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? 현재(n)물고기
        var step = Math.ceil(Math.random()*10);
        var newLeft = $fish.position().left + step;

        $fish.css("left",newLeft);
    }
}
// ? 물고기 이동 함수
function displayFishPositionInfo(){
    console.log("2. 물고기 정보 출력");
    var info = "";
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + '번 물고기 : ' + $fish.position().left + "px <br>";
    }
    $info.html(info);
}
// ? 물고기 위치 출력 함수

function checkGoalFish(){
    console.log("3. 정렬완료");
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position:fishCurrentPosition
            });
        }
    }
    if(winnerList.length>0){
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position label Data 값 기준 내림차순 정렬.
        }); //? default : a - z 올림차순정렬
        endGame();
        alert("우승 !" + winnerList[0].index + '번 물고기');
    }
}
function endGame(){
    console.log("4. 게임종료");
    clearInterval(timerID);
    timerID = -1;
}