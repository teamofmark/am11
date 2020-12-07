$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();

    // detailMoveCircle();
    detailMoveCircleExt();
});

// *exp.1

function moveCircle(){
    var circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
        xpos = parseInt(xpos);
        if(xpos >= 0 && xpos <= 380){
            $(circle).css("left",xpos);
        }else{
            alert('잘못된 수치입니다. 0~380숫자만 입력하세요');
        }
    });
}

// *exp.2
function detailMoveCircle(){
    var circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if( xpos > 380 || xpos < 0 || ypos > 380 || ypos < 0){
            alert('잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.');
        }else{
            $(circle).css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}

// todo. function grouping
function detailMoveCircleExt(){
    var circle = null;

    circleInit();
    circleEvent();
}
function circleInit(){
// *선언부
    circle = $(".circleDetail");
}
function circleEvent(){
// *처리부 - 이벤트
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);
        
        circleMovCommand(xpos,ypos);
    });
}
function circleMovCommand(xpos, ypos){
// *처리부 - 조건
    if(xpos > 380 || xpos < 0 || ypos > 380 || ypos < 0){
        alert('잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.');
    }else{
        $(circle).css({
            "left" : xpos,
            "top" : ypos
        });
    }
}