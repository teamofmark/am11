// ? setTimeout(function,timer); - 일정시간 경과후 함수실행.
var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var $resetBtn = null;

$(document).ready(function(){
    init(); //? 선언부
    scoreCount($circle,playState,count,$score);
    $resetBtn.click(restart);
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount($circle,playState,count,$score){
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text(count+"점");
        }
    });
    setTimeout(function(){
        alert("게임종료.");
        playState = false;
    },5000);
}
// todo. 재시작기능 만들어보기 - restart
function restart(){
    playState = true;// ? 게임상태변수 초기화.
    count = 0;
    $score.text(count + "점");
    scoreCount($circle,playState,count,$score);// ? scoreCount 재실행.
}