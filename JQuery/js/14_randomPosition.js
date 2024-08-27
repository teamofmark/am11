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
    $btnStart.click(gameStart);
    $circle.click(scoreCount);
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
        // todo. 상,하,좌,우 모두 랜덤으로 박스를 벗어나지 않게 하는 수식
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
// todo 과제 - 게임 종료 시키기
function gameEnd(){
    // todo.1 playState가 true로 바뀐 이후 10초후 자동 종료.
    setTimeout(function(){
        // todo.2 scoreCount,moveCircle 함수가 바라볼 전역변수(상태) playState 초기화.
        playState = false;
        // todo.3 setInterval 함수 초기화
        clearInterval(timerID);
        // todo.4 게임종료 알림. 경고창으로 "게임종료. 너의 점수는 xx 점이다."
        alert("게임종료. 너의 점수는" + count + " 점 이다.");
        // todo.5 종료알림 확인 누르면 점수 초기화 시키기.
        count = 0;
        $score.text(count);
    },10000)
}