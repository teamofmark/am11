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
        }, 200)
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