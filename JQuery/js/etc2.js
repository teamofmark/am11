$(document).ready(function(){
    moveCircle();
    detailMoveCircle();
});

// *case.1 원 x좌표로 움직이기
function moveCircle(){
    var $circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt('0부터 380이하의 숫자만 입력하세요.');
        xpos = parseInt(xpos);

        if(xpos >= 0 && xpos <= 380){
            $circle.css("left", xpos);
        }else{
            alert('잘못된 수치입니다.');
        }
    });
}
// *case.2 원 움직이기(detail)
function detailMoveCircle(){
    var $circle = $(".circleDetail");

    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if (xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0) {
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}