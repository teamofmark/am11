$(document).ready(function(){
    // *case.1
    moveCircle();
    // *case.2
    // detailMoveCircle();
    detailMoveCircleExt();
    // *case.3
    keyControl();
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

// *case.3 조작key로 제어하기.

function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키 코드" + e.keyCode);
        
        switch(e.keyCode){
            case 65:
                currentXpos -= range;
                break;
            case 87:
                currentYpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
            case 83:
                currentYpos += range;
                break;
        }
        // todo. 조건문작성
        if(currentXpos < 0){
            currentXpos = 0;
        }
        if(currentYpos < 0){
            currentYpos = 0;
        }
        if(currentXpos > 380){
            currentXpos = 380;
        }
        if(currentYpos > 380){
            currentYpos = 380;
        }
        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    });
}
