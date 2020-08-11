var count = 0;
var $score = null;
var $circle = null;
var $btnStart = null;
var $panel = null;
var playState = false;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});

function init(){
    $score = $("#score");
    $circle = $("#circle");
    $btnStart = $("#btn_start");
    $panel = $(".panel");
}
function initEvent(){
    /*
        ? click event 는 이런 식으로 하나의 함수로 처리하는것이 boolean 변수를 바라보고 작동해야하는 상황에 원활하다. click 이벤트를 다른 함수에 넣어버리면 전역변수 boolean 에 의해 작동해야 하는 기능에 오류가 발생하여 작동 불가.
    */
    $btnStart.click(function(){
        gameStart();
    });
    $circle.click(function(){
        scoreCount();
    });
}

function gameStart(){
    playState = true;//? btnStart를 클릭했을 때  플레이상태 전환.

    if(playState == true){ // ? 이하 true 조건일 때 구동할 기능들  scoreCount는 전역변수 playState 를 바라보고 별도 작동.

        gameEnd();

        timerID = setInterval(moveCircle, 500); //? 0.5초마다 랜덤으로 움직이는 moveCircle함수.
    }
}
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())),
        top: Math.floor(Math.random()*($panel.height() - $circle.height()))
    });
}
function gameEnd(){
    setTimeout(function(){ //? playState가 true로 바뀐이후 10초후 자동종료.
        playState = false; //? scoreCount가 바라볼 전역변수 playState 초기화.
        clearInterval(timerID); //? interVal은 boolean 값으로 초기화불가.  timerID 지정 및 clearInterval 필요.
        alert("게임종료");
    }, 10000);
}
function scoreCount(){ //? scoreCount는 전역변수 playState 를 바라보고 별도 작동.
    if(playState == true){ 
        count ++; 
        $score.text(count); 
    }
}