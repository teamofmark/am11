// ? setTimeout([function],[timer]);
// * 특정시간이 경과 되었을때(timer) 매개변수로 전달 받는 함수(function)를 한번 실행하라.
/*
    ex>
    setTimeout(function(){
        alert("펑!");
    },5000);
*/
var count = 0;
var $score = null;
var $circle = null;
var playState = true;
var $resetBtn = null;
$(document).ready(function(){
    init();
    scoreCount(count,$score,$circle,playState);
    $resetBtn.click(restart);
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $resetBtn = $(".resetBtn");
}
function scoreCount(count,$score,$circle,playState){
    alert("game Start!");
    setTimeout(function(){
        alert("game Over!");
        playState = false;
    },5000);
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text(count + "점");
        }
    });
}
function restart(){
    playState = true;
    count = 0;
    $score.text(count + "점");
    scoreCount(count,$score,$circle,playState);
}