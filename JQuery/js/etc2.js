$(document).ready(function(){
    moveCircle();
    detailMoveCircle();
    keyControl();
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
// *case.3 key control을 통해 원 움직이기
function keyControl(){
    var circle = $(".circleKey");
    var currentXpos = 0;
    var currentYpos = 0;
    var range = 50;
    // ?선언부 종료

    $(document).keydown(function(e){
        // console.log('입력한 키 코드?' + e.keyCode);  
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 65:
                currentXpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
            default:
                console.log('잘못된 키입력입니다.');
                break;
        }
        if(currentXpos < 0){
            currentXpos = 0;
        }
        if(currentXpos > 380){
            currentXpos = 380;
        }
        if(currentYpos < 0){
            currentYpos = 0;
        }
        if(currentYpos > 380){
            currentYpos = 380;
        }
        circle.css("left",currentXpos);
        circle.css("top",currentYpos);
    });
}