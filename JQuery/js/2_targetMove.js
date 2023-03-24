$(document).ready(function(){
    // *case. 1 원 움직이기
    $("#btnMoveCircle").click(moveCircle);
    
    // *case. 2 원 움직이기 (입력받기)
    // $("#btnDetailMove").click(detailMoveCircle);
    // ! grouping / module
    detailMoveCircleExt();
    // $("#btnDetailMove").click(circleEvent);
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