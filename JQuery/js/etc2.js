$(document).ready(function(){
    // *case.1
    moveCircle();
    // *case.2
    // detailMoveCircle();
    detailMoveCircleExt();
});

// *case.1 prompt를 이용한 원 움직이기 (xAxis)
function moveCircle(){
    var $circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt("0부터 380이하의 숫자만 입력하시오.");
        xpos = parseInt(xpos);
        if(xpos >= 0 && xpos <= 380){
            $circle.css("left", xpos);
        }else{
            alert("잘못된 수치입니다.");
        }
    });
}

// *case.2 input Value를 이용한 원 움직이기(xAxis, yAxis)
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}
// *case.2 함수구조분리
function detailMoveCircleExt(){
    var $circle = null;

    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos, ypos);
}
function circleMovCommand(xpos, ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}