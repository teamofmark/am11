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
        ? click event를 하나의 함수로 처리 = boolean 변수를 바라보고 작동하게 되는 경우 유리.
        * clickEvent 자체를 다른 함수에 넣어버렸을 때 전역변수 boolean에 의해 작동해야하는
        * (2차처리부) - 오류가 생긴다.
    */
    $btnStart.click(gameStart);
    $circle.click(스코어카운트);
}
function gameStart(){
    playState = true; //? btnStart를 click 했을 때 playState 전환.
    if(playState == true){

        timerID = setInterval(moveCircle, 500);
        //? 0.5초마다 $circle의 left, top 좌표 적용.
    }
}
function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random() * ($panel.width() - $circle.width())),
        top: Math.floor(Math.random() * ($panel.height() - $circle.height()))
        //? random으로 frame내에서 circle의 좌표 생산.
    });
}