/*
$(document).ready(function(){
    // ? 움직일 대상, 움직이는 간격, x좌표를 저장할 곳, 막대 길이.
    var $circle = $("#circle");
    var runStep = 10;
    var xpos = $circle.position().left;
    var railWidth = $("#rail").width();
    var timerID = 0;
    startMove($circle, runStep, xpos, railWidth, timerID);
});
function startMove($circle, runStep, xpos, railWidth, timerID){
    $("#btn_start").click(function(){
        timerID = setInterval(function(){
            xpos += runStep;

            $circle.css({
                left: xpos
            });
            if(xpos > railWidth || xpos < 0){
                // todo. 원의 움직임에 방향전환
                runStep *= -1;
            }
        },0);

        return stopMove(timerID);
    });
}
function stopMove(timerID){
    $("#btn_stop").click(function(){
        clearInterval(timerID);
    });
}
*/
var $circle = null;
var railWidth = null;
var runStep = 10;
var timerID = 0;
// ? document 전체에서 사용할 변수.

$(document).ready(function(){
    init(); //? 대상 및 변수 불러오기.
    initEvent(); //? event 함수.
});
function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}

function initEvent(){
    $("#btn_start").click(moveStart);// ? 움직이는 기능 함수
    $("#btn_stop").click(moveStop);// ? 멈추는 기능 함수
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,0);// ? 움직임logic
    }
}
function moveCircle(){
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css({
        left: xpos
    });
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID); //? timerID clear
    timerID = 0; //? timerID 초기화
}