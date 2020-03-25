$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();

    // *exp.2 원 움직이기(디테일) detailMoveCircle();
    
});

// *exp.1

function moveCircle(){
    var $circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt("0 ~ 380이하 숫자만 입력");
        xpos = parseInt(xpos);

        if(xpos >= 0 && xpos <=380){
            $circle.css("left",xpos);
        }else{
            alert("잘못된 수치입니다.");
        }
    });
}

// *exp.2

function detailMoveCircle(){
    var $circle = $(".circleDetail");

    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos >= 380 || ypos >= 380 || xpos < 0 || ypos < 0){
            alert("잘못된 수치. 0 ~ 380 이내 입력");
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}

// *exp.2 ext function Grouping

function detailMoveCircleExt(){
    var circle = null; //? circleInit 함수가 바라볼 수 있는 전역변수 설정.
    circleInit();
    circleEvent();
}
function circleInit(){
    circle = $(".circleDetail");
}
function circleEvent(){
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();
        xpos = parseInt(xpos);
        ypos = parseInt(ypos);
        circleMovCommand(xpos, ypos);
    });
}
function circleMovCommand(xpos, ypos){
    if(xpos >= 380 || ypos >= 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치. 0~ 380이내로 입력.");
    }else{
        $(circle).css({
            "left" : xpos,
            "top" : ypos
        })
    }
}