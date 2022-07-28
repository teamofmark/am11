$(document).ready(function(){
    // *case.1 원 움직이기(xAxis)
    $("#btnMoveCircle").click(moveCircle);
});
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