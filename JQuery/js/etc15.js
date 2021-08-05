/*
    ! 물고기 경주 게임
    ? 요구사항
    * 시작 버튼을 누르면 경기 시작. (2초간격 random 움직임)
    * 물고기는 실제 경주 게임처럼 어떤 물고기가 1등이 될 것인지 예측할 수 없게 해야함.
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
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    goalLine = $("#bar").position().left - $fishWidth;
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
    $("#start").click(function(){
        startGame();
    });
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();
            
            displayFishPositionInfo();
            
            checkGoalFish();
        }, 200);
    }
}
function updateFishPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        var step = Math.ceil(Math.random()*30);
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
}
// ? 물고기 움직임 함수
function displayFishPositionInfo(){
    console.log("2. 물고기 정보 출력");
    var info = "";

    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);

        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
    }
    $info.html(info);
}
// ? 전광판. 물고기 위치 출력 함수

function checkGoalFish(){
    var winnerList = [];

    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;

        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position:fishCurrentPosition
            });
        }
    }
    if(winnerList.length > 0){
        winnerList.sort(function(a,b){
            return b.position-a.position;
            /*
                ! arr.sort([compareFunction]);
                ! 매개변수 = compareFunction - 정렬순서 정의 함수. 생략시 오름차순 처리 가능.
                *(문자열변환 > 유니코드값의 크기에 따라 정렬)
                ! 리턴값 = 정렬이 완료된 결과 값.
            */
        });
        endGame();
        alert('우승 !' + winnerList[0].index + '번 물고기!');
    }
}
// ?결승선 통과 물고기 검사 함수

function endGame(){
    clearInterval(timerID); //? setInterval을 초기화.
    timerID = -1; //? timerID 초기화
}
//? 게임종료 함수