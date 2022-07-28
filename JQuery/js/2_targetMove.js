$(document).ready(function(){
    // *case.1 원 움직이기(xAxis)
    $("#btnMoveCircle").click(moveCircle);

    // *case.2 원 움직이기(xAxis,yAxis)
    detailMoveCircle();

    // *case.3 원 움직이기(xAxis,yAxis divide)
    detailMoveCircleExt();
});
// *case. 1
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

// *case. 2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}