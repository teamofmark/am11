$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();

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