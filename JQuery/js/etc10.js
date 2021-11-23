

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