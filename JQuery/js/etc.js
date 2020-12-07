$(document).write(function(){
    // *exp.1 원 움직이기
    moveCircle();

});

// *exp.1

function moveCircle(){
    var circle = $(".circle");
    $("#btnMoveCircle").click(function(){
        var xpos = window.prompt("0부터 380이하의 숫자만 입력하세요.");

        $(circle).css("left",xpos);
    });
}