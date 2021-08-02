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
        moveStart();
    });
    $("#btn_stop").click(function(){
        moveStop();
    });
}
function moveStart(){
    if(timerID == 0){
        timerID = setInterval(function(){
            moveCircle();
        }, 0);
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
    clearInterval(timerID);
    timerID = 0;
}