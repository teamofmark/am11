var $fishList = null;
var timerID = -1;
var goalLine = 0;
var $fishWidth = 0;
var $info = null;

$(document).ready(function(){
    init();
    fishStartPosition();
    initEvent();
});

function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish").width();
    goalLine = $("#bar").position().left - $fishWidth;
}

function fishStartPosition(){
    for (var i = 0; i < $fishList.length; i++){
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

// ?게임시작함수
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
           updateFishPosition(); // ? 물고기 이동함수
           displayFishPositionInfo(); // ? 이동수치 출력함수
           checkGoalFish(); // ? 결승선 통과판별 함수
        }, 200);
    }
}

// ?물고기 이동함수
function updateFishPosition(){
    console.log("1. 물고기 이동 시작");
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? 현재 물고기
        var step = Math.ceil(Math.random()*10);//? 물고기 이동 범위.(10중 random, 올림한 정수값.)
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
}

// ?물고기 위치 출력 함수
function displayFishPositionInfo(){
    console.log("2. 위치 출력 시작");
    var info = "";
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }
    $info.html(info);
}

// ?결승선 통과판별 함수
function checkGoalFish(){
    var winnerList = [];

    for (var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;

        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
        }
    } //? goalLine을 넘은 물고기가 한 마리라도 있다면 winnerList 배열에 position이라는 이름으로 저장 시작.

    if(winnerList.length>0){ //? winnerList에 position값이 담기고 나면
        console.log('3. 우승물고기 가려내기');
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position 값 기준 내림차순 정렬.
        });
        endGame();
        alert('우승 !' + winnerList[0].index + '번 물고기');
    }
}
// ? 게임 종료 함수
function endGame(){
    console.log('4. 게임 종료 처리');
    clearInterval(timerID); //? interval Kill
    timerID = -1; //? timerID 초기화
}