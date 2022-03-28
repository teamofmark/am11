$(document).ready(function(){
    // *case.1 원 움직이기(제한된 공간내 x축)
    $("#btnMoveCircle").click(moveCircle);
    // todo. 원 움직이기(제한된 공간내x,y축)
    detailMoveCircle();

});
// *case. 1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt('0 부터 380이하의 숫자만 입력하세요.');
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left", xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
}

// todo. 
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        // todo.
        
    });
}