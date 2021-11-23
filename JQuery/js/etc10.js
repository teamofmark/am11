
/*
$(document).ready(function(){
    var $circle = $("#circle");
    var runStep = 10; //? 한번 움직일때의 간격
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
                runStep *= -1;
            }
        },0);
        return stopMove(timerID);
    });
    //? setInterval = 무한으로 실행(특정시간차)
}
function stopMove(timerID){
    $("#btn_stop").click(function(){
        clearInterval(timerID);
    });
}
*/
// todo. 전혀 분리되지 않은상태 -> 함수 구조분리를 통하여 코드를 간결하게 정리하기.
var $circle = null;
var railWidth = null;
var runStep = 10;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}
function initEvent(){
    $("#btn_start").click(function(){
        moveStart();//? 움직이는 기능
    });
    $("#btn_stop").click(function(){
        moveStop();//? 멈추는 기능
    });
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(function(){
            moveCircle();//? 실질적으로 움직이는 logic
        },0);
    }
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position left 구하기.

    xpos += runStep;

    $circle.css({
        left: xpos
    });
    if(xpos > railWidth || xpos < 0){ //? 움직일 범위 지정 및 운동방향 변경
        runStep *= -1;
    }
}

function moveStop(){
    clearInterval(timerID); //? timerID clear
    timerID = 0; //? timerID 초기화
}