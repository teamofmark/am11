$(document).ready(function(){
    $("#btnMoveCircle").click(moveCircle);
    // todo. button click - 함수(detailMoveCircle)실행.
    $("#btnDetailMove").click(detailMoveCircle);
});

// case.1 xAxis 대상움직임
function moveCircle(){
    // ? 선언 - 움직일대상, x축 값을 입력받을 대상
    var $circle = $(".circle");
    var xpos = parseInt(prompt("0부터 380 이하의 숫자만 입력하시오."));
    // ? 처리 - 입력된값이 정상이면 움직여야함. / 입력된값이 0미만 이거나 380초과일경우 잘못된 수치입니다. 라는 경고창
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}
// todo. x,yAxis 대상움직임
function detailMoveCircle(){
    // ? 선언 - 움직일 대상 지정, x값 불러오기, y값 불러오기
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    console.log("xpos = " + typeof(xpos) + xpos + " / " + "ypos = " + typeof(ypos) + ypos);
}