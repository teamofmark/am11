$(document).ready(function(){
    // *case. 1 xAxis
    $("#btnMoveCircle").click(moveCircle);
    // *case. 2 x,yAxis
    detailMoveCircleExt();
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
    if(){ // todo. 풀어오기
        alert("잘못된 수치 입니다. 0 ~ 380 이내로 입력하세요.");
    }else{ // todo. 풀어오기
        // ? 움직이기
    }
}