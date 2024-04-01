// ? setInterval(function,interval);
var $circle = null;
var railWidth = 0;
var runStep = 10;
var timerID = 0; //? setInterval을 담을 변수.

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}
function initEvent(){
    $("#btn_start").click(moveStart);
    $("#btn_stop").click(moveStop);
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(moveCircle,1);
    }
}
function moveCircle(){
    var xpos = $circle.position().left; //? 현재 position left 구하기. - left,top.
    xpos += runStep;
    $circle.css({
        left: xpos
    })
    if(xpos >= railWidth || xpos <= 0){
        runStep *= -1;
    }
    // todo. 집나간 원잡아오기 - 오른쪽으로가다가? rail끝에 위치하면 반대로- 반대편 끝에 위치하면? 또 반대로-

}
function moveStop(){
    clearInterval(timerID); // ? float: left; -> clear: left;
    timerID = 0;
}
/*
$(document).ready(function(){
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
    
                    $circle.css("left",xpos);
    
                    if(xpos > railWidth || xpos < 0){
                        runStep *= -1;
                    }
                },0);
        stopMove(timerID);
    });
}

function stopMove(timerID){
    $("#btn_stop").click(function(){
        clearInterval(timerID);
    });
}
*/