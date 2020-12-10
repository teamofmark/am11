var $circle = null;
var railWidth = null;
var runStep = 10;
var timerID = 0;

$(document).ready(function(){
    init(); //? 대상 및 변수 불러오기.
    initEvent(); //?event 처리함수 불러오기
    // startMove($circle, runStep, xpos, railWidth, timerID);
});
// function startMove($circle, runStep, xpos, railWidth, timerID){
//     $("#btn_start").click(function(){
//         timerID = setInterval(function(){
//             xpos += runStep;
//             $circle.css("left",xpos);
//             if(xpos > railWidth || xpos < 0){
//                  runStep *= -1;
//             }
//         },0);
//         return stopMove(timerID);
//     });
// }

// function stopMove(timerID){
//     $("#btn_stop").click(function(){
//         clearInterval(timerID);
//     });
// }

function init(){
    $circle = $("#circle");
    railWidth = $("#rail").width();
}

function initEvent(){
    $("#btn_start").click(function(){
        moveStart(); //? 움직이는 기능.
    });
    $("#btn_stop").click(function(){
        moveStop(); //? 멈추는기능
    });
}

function moveStart(){
    if(timerID == 0){
        timerID = setInterval(function(){
            moveCircle(); //? 움직이는 로직
        },0);
    }
}

function moveCircle(){
    var xpos = $circle.position().left;
    xpos += runStep;
    $circle.css("left",xpos);
    if(xpos > railWidth || xpos < 0){ //? 움직임범위조건지정
        runStep *= -1;
    }
}

function moveStop(){
    clearInterval(timerID); //? timerID clear
    timerID = 0; //? clear된 timerID에 0 을 재삽입.
}