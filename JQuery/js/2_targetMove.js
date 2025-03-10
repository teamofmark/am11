$(document).ready(function(){
    // case.1 x축 원 움직이기
    $("#btnMoveCircle").click(moveCircle); 
    // case.2
    detailMoveCircleExt();
    // case.3
    keyControl();
});
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0부터 380이하의 숫자만 입력하세요.");
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        // 움직이는 조건(0보다 크거나 같"고" 380보다 작거나 같을때) - 원 움직이면 됨.
        $circle.css("left",xpos);
    }else{
        // 못움직이는 조건 - 경고창 : 잘못된 수치입니다.
        alert("잘못된 수치입니다.");
    }
}
/*
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
}
*/

function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val(); //? .val() = 대상.val() -> 대상의 값을 가져와라. / 대상.val("다른값") -> 대상의 값을 다른값으로 바꿔라
    var ypos = $("#ypos").val();
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    // console.log("xpos : "+xpos+"ypos : "+ypos);
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){ //움직임 가능 여부 판단 및 실행
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0 ){ // 잘못된 조건
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하세요.");
    }else{ // 작동조건
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 key의Code는 ? :" +  e.keyCode + " dataType : " + typeof(e.keyCode));
        // w : 87(ypos-), d: 68(xpos+), s:83(ypos+), a:65(xpos-)
        // w를 눌렀을땐 위로가야하고, d를 눌렀을땐 오른쪽으로 가야하고 ...외 나머지를 눌렀을 땐 움직이지 말아야함.
        switch(e.keyCode){
            case 87:
                currentYpos -= range;
                break;
            case 68:
                currentXpos += range;
                break;
            case 83:
                currentYpos += range;
                break;
            case 65:
                currentXpos -= range;
                break;
        }
        // todo. frame 내 원 가두기 (hint - 움직이는 방향 4개 - 다 따로 움직인다 ->? 다 따로 가둬야한다.)

        // 1. 87이 눌렸을때 (조건미포함-이미일어남)  currentYpos(-) =  0을넘어가면 안됨-> 만약 넘어가면 "무엇"을 해야하는가
        // 1. 68이 눌렸을때 (조건미포함-이미일어남)  currentXpos(+) =  380을넘어가면 안됨-> 만약 넘어가면 "무엇"을 해야하는가
        // 1. 83이 눌렸을때 (조건미포함-이미일어남)  currentYpos(+) =  380을넘어가면 안됨-> 만약 넘어가면 "무엇"을 해야하는가
        // 1. 65가 눌렸을때 (조건미포함-이미일어남)  currentXpos(-) =  0을넘어가면 안됨-> 만약 넘어가면 "무엇"을 해야하는가

        $circle.css("left",currentXpos);
        $circle.css("top",currentYpos);
    });
}