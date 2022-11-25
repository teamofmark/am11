$(document).ready(function(){
    // *case. 1 원 움직이기 (xAxis)
    $("#btnMoveCircle").click(moveCircle);
});

function moveCircle(){
    // ? 선 / 처 / 출
    var $circle = $(".circle");
    var xpos = window.prompt("0부터 380이하의 숫자만 입력하시오.");
    // ? 선언부 - ? 1. 움직일놈 2. 값을 입력받을 놈.
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
    // ? 처리부
}