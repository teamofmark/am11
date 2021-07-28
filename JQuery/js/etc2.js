$(document).ready(function(){
    // *case.1
    moveCircle();
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