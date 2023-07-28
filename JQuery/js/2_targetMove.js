$(document).ready(function(){
    // *case. 1 xAxis
    $("#btnMoveCircle").click(moveCircle);
    // *case. 2 x,yAxis
    detailMoveCircleExt();
    // ? $("#btnDetailMove").click(detailMoveCircle);
    keyControl();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0 부터 380이하의 숫자만 입력해라.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}
function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    // ? click을 하였을 때 무엇을 제일 먼저 해야 하는가?
    var xpos = $("#xpos").val(); // * 대상.val(); -> 대상의 value를 가져와라. / 대상.val("text"); -> 대상의 value를 text로 바꿔라.
    var ypos = $("#ypos").val();
    // console.log(typeof(xpos) + ":" + xpos);
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){ //? 원을움직이는함수
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}
function detailMoveCircle(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();

    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

    if(xpos <= 380 && ypos <= 380 && xpos >= 0 && ypos >= 0){
        $circle.css({
            "left": xpos,
            "top" : ypos
        });
    }else{
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }
    // if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
    //     alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
    // }else{
    //     $circle.css({
    //         "left" : xpos,
    //         "top" : ypos
    //     });
    // }
}

function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;
    $(document).keydown(function(e){
        console.log(e.keyCode);
        // * W: 87, A: 65, S: 83, D: 68
        switch (e.keyCode) {
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
        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    });
}