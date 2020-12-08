$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();

    // detailMoveCircle();
    detailMoveCircleExt();
    
    // *exp.3 
    keyControl();
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

// *exp.3 
function keyControl(){
    var circle = $(".circleKey");
    var range = 50;
    var currentXPos = 0;
    var currentYPos = 0;

    $(document).keydown(function(e){
        console.log('입력한 키 코드' + e.keyCode);

        switch(e.keyCode){
            case 87:
                currentYPos -= range;
                break;
            case 65:
                currentXPos -= range;
                break;
            case 83:
                currentYPos += range;
                break;
            case 68:
                currentXPos += range;
                break;
        }
        if(currentXPos < 0){
            currentXPos = 0;
        }
        if(currentXPos > 380){
            currentXPos = 380;
        }
        if(currentYPos < 0){
            currentYPos = 0;
        }
        if(currentYPos > 380){
            currentYPos = 380;
        }

        circle.css("left", currentXPos);
        circle.css("top", currentYPos);
    });

}