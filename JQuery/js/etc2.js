$(document).ready(function(){
    // *case.1 x축 원움직이기
    // moveCircle();
    $("#btnMoveCircle").click(moveCircle);

    // *case.2 x,y축 원움직이기
    // detailMoveCircle();

    // *case.2-1 x,y축 원움직이기 (함수분리)
    detailMoveCircleExt();

});
// *case.1 
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt('0부터 380이하의 숫자만 입력하세요.');
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css('left', xpos);
    }else{
        alert('잘못된 수치입니다.');
    }
}

// *case.2
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    $("#btnDetailMove").click(function(){
        var xpos = $("#xpos").val();
        var ypos = $("#ypos").val();
        // ? input에 입력된 값(value) 당기기. = target.val(); -> target의 value를 가져옴. 

        xpos = parseInt(xpos);
        ypos = parseInt(ypos);

        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치입니다. 0 - 380이내로 입력하세요.');
        }else{
            $circle.css({
                'left' : xpos,
                'top' : ypos
            });
        }
    });
}

// *case.2-1
function detailMoveCircleExt(){
    var $circle = null;

    circleInit();
    $('#btnDetailMove').click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        })
    }
}