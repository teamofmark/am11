$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();

    // * exp.2
    detailMoveCircle();

    // *exp.3
    keyControl();
});

// * exp.1
function moveCircle(){
    var $circle = $('.circle'); // ? 선언부 = init 
    $('#btnMoveCircle').click(function(){
        var xpos = window.prompt('0부터 380이하의 숫자만 입력');
        xpos = parseInt(xpos);

        if(xpos >= 0 && xpos <= 380){
            $circle.css('left',xpos);
        }else{
            alert('잘못된 수치');
        }
    });
} 

// * exp.2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력');
        }else{
            $circle.css({
                'left' : xpos,
                'top' : ypos
            });
        }
    });
}


// *exp.2ext function grouping
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
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
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
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log('입력한 키 코드' + e.keyCode);
        switch (e.keyCode) {
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
            default:
                alert('올바른 조작키가 아닙니다.');
                break;
        }
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

        circle.css("left", currentXpos);
        circle.css("top", currentYpos);
    });


}