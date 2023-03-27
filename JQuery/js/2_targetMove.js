$(document).ready(function(){
    // *case. 1 원 움직이기
    $("#btnMoveCircle").click(moveCircle);
    
    // *case. 2 원 움직이기 (입력받기)
    // $("#btnDetailMove").click(detailMoveCircle);
    // ! grouping / module
    detailMoveCircleExt();
    // $("#btnDetailMove").click(circleEvent);
    // *case. 3 방향키 조작
    keyControl();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt('0부터 380이하의 숫자만 입력하세요.');
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){ //? 첫번째 조건 - 참? 거짓?
        $circle.css("left",xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
}

function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }else{
        alert('잘못된 수치. 0 ~ 380 이내 입력.');
    }
}
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
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못된 수치. 0 ~ 380 이내 입력.');
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        }); 
    }
}
/*
 function circleEvent(){
     var xpos = $("#xpos").val();
     var ypos = $("#ypos").val();
     xpos = parseInt(xpos);
     ypos = parseInt(ypos);
     circleMovCommand(xpos, ypos);
 }
 function circleMovCommand(xpos, ypos){
     var $circle = $(".circleDetail");
     if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
         alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
     }else{
         $circle.css({
             "left" : xpos,
             "top" : ypos
         });
     }
 }
 */

function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
       console.log("입력한 키의 코드는 ? " + e.keyCode);
        // ? w: 87 d: 68 s: 83 a: 65
        switch(e.keyCode){
            case 87: //? top
                currentYpos -= range;
                break;
            case 68: // ? right
                currentXpos += range;
                break;
            case 83: //? bottom
                currentYpos += range;
                break;
            case 65: // ? left
                currentXpos -= range;
                break;
        }
        if(currentXpos < 0){
            currentXpos = 0;
        }
        if(currentYpos > 380){
            currentYpos = 380;
        }
        if(currentYpos < 0){
            currentYpos = 0;
        }
        if(currentXpos > 380){
            currentXpos = 380;
        }

        $circle.css("top",currentYpos);
        $circle.css("left",currentXpos);
    });

}