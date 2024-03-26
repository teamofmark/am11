$(document).ready(function(){
    // *case. 1 x Axis 원 움직이기
    $("#btnMoveCircle").click(moveCircle);
    // *case. 2 x,y Axis 원 움직이기 - 구조분리형
    detailMoveCircleExt();
    // todo. 아래 실행구문으로 작동되게 만들기.
    $("#btnDetailMove").click(detailMoveCircle);
    // *case. 3 x,y Axis + keyControl.
    keyControl();
});
// * case. 1
function moveCircle(){
    var $circle = $(".circle");
    var xpos = prompt("0부터 380이하의 숫자만 입력하세요");
    // ! prompt -> string 전달.
    xpos = parseInt(xpos);
    if(xpos >= 0 && xpos <= 380){
        $circle.css("left",xpos);
    }else{
        alert("잘못된 수치입니다.");
    }
}
// todo. 아래 실행구문으로 작동되게 만들기.
function detailMoveCircle(){

}
// * case. 2
function detailMoveCircleExt(){
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
    // ? input:text -> dataType: string.
    /*
        ? val() - 값 : value -> val.
        * 1. target.val(); = target의 값을 가져와라.
        * 2. target.val(swap); = target의 값을 swap으로 변경해라.
    */
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
//    console.log("xpos = " + typeof(xpos) + xpos + "/" + "ypos = " + typeof(xpos) + ypos);
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){ // todo. 예외조건 성립시키기
        alert("잘못된 수치입니다. 0 ~ 380이내로 입력하시오.");
    }else{
        // todo. 움직이는 css 함수처리
        $circle.css({
            "left" : xpos,
            "top" : ypos
        });
    }
}

// *case. 3
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0; //? 현재 위치 정보를 저장할 변수.
    var currentYpos = 0;

    $(document).keydown(function(e){
        console.log("입력한 키의 code : " + typeof(e.keyCode) + e.keyCode);
        // * w : 87(Ypos-), d: 68(Xpos+), s: 83(Ypos+), a: 65(Xpos-)
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
        // todo. 돌아다니는 원을 frame안에 가둬오기.        
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
    }); //? compareFunction : 비교함수 - key자체가 100개 가넘음. - 무엇이 눌린지는 모름.
}