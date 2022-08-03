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
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? 현재 물고기
        var step = Math.ceil(Math.random()*10);//? 물고기 이동 범위.(10중 random, 올림한 정수값.)
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
}

// ?