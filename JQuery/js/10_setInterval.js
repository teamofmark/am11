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
    $("#btn_start").click(moveStart);
    $("#btn_stop").click(moveStop);
}
function moveStart(){
    // ? setInterval - 무한 -> 중지? -> clearInterval : 매개변수로 setInterval을 넣으면됨.
    if(timerID == 0){
        timerID = setInterval(moveCircle,1);
    }
}
function moveCircle(){
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css({
        left: xpos
    });
    // todo. 원이 뚫고나가는 문제 해결해보기. (왕복운동시행)
    if(xpos > railWidth || xpos < 0){
        runStep *= -1;
    }
}
function moveStop(){
    clearInterval(timerID);
    timerID = 0;
}