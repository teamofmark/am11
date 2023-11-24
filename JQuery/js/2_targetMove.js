$(document).ready(function(){
    // *case. 1
    $("#btnMoveCircle").click(moveCircle);
    // *case. 2
    detailMoveCircle();
    // *case. 3
    keyControl();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = window.prompt("0 부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);

    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}
function detailMoveCircle(){
    var $circle = null;
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    console.log(xpos,ypos);
    // todo.3 circleMovCommand에 재료 넣어 실행될 수 있게하기.
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){ //todo.1 false의 조건을 잡아 실행되게 하기
        alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
    }else{ //todo.2 움직임 실행. (x,y둘다 이동.)
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

function detailMoveCircleExt(){
    var $circle = $(".circleDetail");
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // console.log("xpos = " + typeof(xpos) + xpos + "/" + "ypos = " + typeof(ypos) + ypos);

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
        // console.log("입력한 키 코드" + e.keyCode);
        // ? w : 87, d : 68, s : 83, a : 65
        switch(e.keyCode){
            case 87:
                currentYpos -= range; //? top 으로...
                break;
            case 68:
                currentXpos += range; //? right 로....
                break;
            case 83:
                currentYpos += range; //? bottom 으로...
                break;
            case 65:
                currentXpos -= range; //? left 로....
                break;
        }
        // todo. frame안에 가두기.
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