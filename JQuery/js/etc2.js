$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();

    // *exp.2 원 움직이기(디테일) detailMoveCircle();

    // *exp.2 ext 원 움직이기(함수그룹화)
    detailMoveCircleExt();

    // *exp.3 방향키 조작
    keyControl();
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

function keyControl(){
    var circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키 코드" + e.keyCode);

        switch(e.keyCode){
            case 37 :
                currentXpos -= range;
            break;
            case 38 :
                currentYpos -= range;
            break;
            case 39 :
                currentXpos += range;
            break;
            case 40 :
                currentYpos += range;
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
        
        circle.css("left",currentXpos);
        circle.css("top",currentYpos);
    });

}