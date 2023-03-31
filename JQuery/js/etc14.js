// ? 준비물  -> var = 버튼, 패널, 원, 플레이상태, interval초기화, 점수표기, 점수

var $btnStart = null;
var $panel = null;
var $circle = null;
var playState = false;
var timerID = 0;
var $score = null;
var count = 0;

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $btnStart = $("#btn_start");
    $panel = $(".panel");
    $circle = $("#circle");
    $score = $("#score");
}
function initEvent(){
    $btnStart.click(gameStart);
    $circle.click(scoreCount);
}
function gameStart(){
    playState = true;
    if(playState == true){
        gameEnd(); // ? 게임종료함수
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
        alert("게임종료. 너의 점수는 " + count + "점 이다.");
        count = 0;
        $score.text(count);
    },10000);
}