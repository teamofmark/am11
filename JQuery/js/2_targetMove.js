$(document).ready(function(){
    // *case.1 원 움직이기(xAxis)
    $("#btnMoveCircle").click(moveCircle);

    // *case.2 원 움직이기(xAxis,yAxis)
    // detailMoveCircle();

    // *case.3 원 움직이기(xAxis,yAxis divide)
    detailMoveCircleExt();

    // *case.4
    keyControl();
});
// *case. 1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    // console.log("현재 입력받은 값은" + xpos + "자료유형은" + typeof(xpos));

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}

// *case. 2
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

// *case. 3
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
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

// *case. 4
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키코드는 " + e.keyCode);
        // ? w : 87(ypos-) d: 68(xpos+) s: 83(ypos+) a: 65(xpos-)
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 65:
                currentXpos -= range;
                break;
        }
        // todo. 조건처리부
        if(currentXpos < 0){
            currentXpos = 0;
        }
        if(currentXpos > 380){
            currentXpos = 380;
        }
        if(currentYpos < 0){
            currentYpos = 0;
        }
        if(currentYpos > 380){
            currentYpos = 380;
        }
        // ?실행구문
        $circle.css("left", currentXpos);
        $circle.css("top", currentYpos);
    });
}