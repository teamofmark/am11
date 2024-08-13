$(document).ready(function () {
  $("#btnMoveCircle").click(moveCircle);
  // todo. button click - 함수(detailMoveCircle)실행.
    // $("#btnDetailMove").click(detailMoveCircle);
    detailMoveCircleExt();
    // case.2 key조작을 통해 대상 움직이기
    keyControl();
});

// case.1 xAxis 대상움직임
function moveCircle() {
  // ? 선언 - 움직일대상, x축 값을 입력받을 대상
  var $circle = $(".circle");
  var xpos = parseInt(prompt("0부터 380 이하의 숫자만 입력하시오."));
  // ? 처리 - 입력된값이 정상이면 움직여야함. / 입력된값이 0미만 이거나 380초과일경우 잘못된 수치입니다. 라는 경고창
  if (xpos >= 0 && xpos <= 380) {
    $circle.css("left", xpos);
  } else {
    alert("잘못된 수치입니다.");
  }
}
// todo. x,yAxis 대상움직임
function detailMoveCircle() {
  // ? 선언 - 움직일 대상 지정, x값 불러오기, y값 불러오기
  var $circle = $(".circleDetail");
  var xpos = $("#xpos").val();
  var ypos = $("#ypos").val();

    xpos = parseInt(xpos);
    ypos = parseInt(ypos);

  console.log(
    "xpos = " + typeof xpos + xpos + " / " + "ypos = " + typeof ypos + ypos
  );
  /*
        ? xpos,ypos가 각 0보다 같거나 클때, 380보다 같거나 작을때 left, top을 움직여야함
        ? 외 나머지일 땐 잘못된 수치입니다. 경고창.
    */
  if(xpos >= 0 && xpos <= 380 && ypos >= 0 && ypos <= 380){
    $circle.css({
      "left": xpos,
      "top": ypos
    });
  }else{
    alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
  }
  /*
   if(xpos < 0 || xpos > 380 || ypos < 0 || ypos > 380){
    alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
   }else{
        $circle.css({
            "left" : xpos,
            "top" : ypos
        }); 
   }
    */
}
// todo. 위 완성된 함수를 구조분리 하기
function detailMoveCircleExt(){
    var $circle = null;
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    // ? 값 가져오기 (x,y);
    var xpos = $("#xpos").val();
    var ypos = $("#ypos").val();
    // ? 형변환
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);
    // ? 움직임함수에 형변환된 값 넘기기
    circleMovCommand(xpos,ypos);
}
function circleMovCommand(xpos,ypos){
    // ? 움직일지 말지 결정하는 부분
  if(xpos >= 0 && xpos <= 380 && ypos >= 0 && ypos <= 380){
    $circle.css({
      "left": xpos,
      "top": ypos
    });
  }else{
    alert("잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.");
  }
}
// case.2 key입력을받아 대상 움직이기
function keyControl(){
    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    // ? 키가 입력되었을 때....
    $(document).keydown(function(e){
        console.log("입력한 키 : " + e.keyCode);
        // w : 87(Ypos-), s : 83(Ypos+), a : 65(Xpos-), d : 68 (Xpos+)
        // todo. 각 방향별 키를 입력하였을때 css를 작동시켜 움직이게 만들어오기
    });
}