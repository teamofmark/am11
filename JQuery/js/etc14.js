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
    $circle.click(scoreCount);
}
function gameStart(){
    playState = true; //? btnStart를 click 했을 때 playState 전환.
    if(playState == true){
        gameEnd(); //? 게임종료함수
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
function scoreCount(){
    if(playState == true){ //? scoreCount는 전역변수 playState를 기준으로 작동.
        count ++; //? 전역변수 count를 증가.
        $score.text(count); //? 전역변수 count를 $score(id="score")에 text
    }
}
function gameEnd(){
    setTimeout(function(){ //? playState가 true로 바뀐 후 10초 지나면 자동종료.
        playState = false; //? scoreCount가 바라보는 전역변수 playState 초기화.
        clearInterval(timerID);
        //? interval은 boolean 값을 활용해 초기화 불가. timerID 지정 및 clearInterval을 활용.
        alert('게임이 종료되었습니다.'); //? guide
        count = 0; //? 전역변수 count 초기화
        $score.text(count); //? 초기화된 count 재설정.
    }, 10000);
}