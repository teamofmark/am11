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
    $btnStart.click(function(){
        gameStart();
    });
    $circle.click(function(){
        scoreCount();
    });
}
function gameStart(){
    playState = true;
    if(playState == true){
        gameEnd();
        timerID = setInterval(moveCircle, 500);
    }
}
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width() - $circle.width())),
        top: Math.floor(Math.random()*($panel.height() - $circle.height()))
    });
}
function scoreCount(){
    if(playState == true){
        count ++;
        $score.text(count);
    }
}
function gameEnd(){
    setTimeout(function(){
        playState = false;
        clearInterval(timerID);
        alert('게임종료');
    }, 10000);
}