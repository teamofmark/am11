/*
    todo : 물고기 경주 게임

    ? 요구사항
    * 시작 버튼을 누르면 경기가 시작한다. (2초간격 움직임)
    * 물고기는 실제 경주 게임처럼 어떤 물고기가 1등이 될 것인지 예측할 수 없게 할 것.
    * 물고기가 골인 지점을 통과하면 몇 번째 물고기가 우승했는지 알려주고 게임을 종료.
*/

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
    $fishList =  $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);

        $fish.css({
            left: 0,
            top : 100 + (i * 150)
        })
    }
}

function initEvent(){
    $("#start").click(function(){
        startGame(); //? 게임시작함수
    });
}
// ? click Event 처리함수

function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); // ?물고기 움직임 함수.
            displayFishPositionInfo();// ? 물고기 위치 출력 함수
            
            checkGoalFish(); //?결승선 통과 물고기 검사 함수.
        }, 200); //? 0.2초마다
    }
}
// ?게임시작함수

function updateFishPosition(){
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30); //? 물고기 이동 범위(30중 random, 올림한 정수값)
        var newLeft = $fish.position().left + step;
        
        $fish.css("left", newLeft);
    }
}
// ?물고기 움직임 함수.

function displayFishPositionInfo(){
    console.log("2. 물고기 정보 출력하는중");
    var info = '';

    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);

        info += i + '번 물고기 : ' + $fish.position().left + "px 유영중<br>";
    }

    $info.html(info);
}
// ? 물고기 위치 출력 함수

function checkGoalFish(){
    var winnerList = [];

    for (var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;

        if(fishCurrentPosition >= goalLine){
            winnerList.push({ //? goalLine을 넘은 물고기들을 winnerList 배열에 position 값저장.
                index: (i), position:fishCurrentPosition
            });
        }
    }

    if(winnerList.length > 0){ //? 배열에 position값이 담기고 나면
        winnerList.sort(function(a,b){
            return b.position-a.position; //? position 값 기준 내림차순 정렬.
        });

        endGame();
        alert('우승 !' + winnerList[0].index + '번 물고기!'); //? 결승선 기준 가장 멀리 이동된 물고기 우승 처리
    }

}

function endGame(){
    
}