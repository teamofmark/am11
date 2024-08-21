var $circle = null;
var railWidth = 0;
var runStep = 10;
// ? setInterval을 초기화 하기 위한 변수 /= setInterval이 담겨야하는 변수 /= 0과같을땐 중지상태
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
    if(timerID == 0){
        timerID = setInterval(moveCircle,1);
        /*
            ? setInterval();
            * 고정인자 2개. setInterval([function],[interval]);
            * interval마다 function을 실행해라.
        */
    }
}
function moveCircle(){
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css({
        "left": xpos
    });
    // todo. 증가만 하는 수치를 증가와 감소를 반복시켜 사각형 안에 가두기
}
function moveStop(){

}