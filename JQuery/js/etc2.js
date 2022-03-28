$(document).ready(function(){
    // *case.1 원 움직이기(제한된 공간내 x축)
    $("#btnMoveCircle").click(moveCircle);
    // todo. 원 움직이기(제한된 공간내x,y축)
    // detailMoveCircle();

    // *case.2 ext 원 움직이기(제한된 공간내 x,y축 - 함수 구조분리)
    detailMoveCircleExt();

    // *case.3 원 움직이기(방향키 조작)
    keyControl();
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
        // console.log(xpos);
        if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
            alert('잘못된 수치입니다. 0 ~ 380이내로 입력하세요.');
        }else{
            $circle.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
}

// *case. todoExt.
function detailMoveCircleExt(){
    var $circle = null;
    
    circleInit();
    $("#btnDetailMove").click(circleEvent);
}
function circleInit(){
    $circle = $(".circleDetail");
}
function circleEvent(){
    var xpos = $("#xpos").val();// ? x값 가져오기
    var ypos = $("#ypos").val();// ? y값 가져오기
    xpos = parseInt(xpos);
    ypos = parseInt(ypos);// ? 가져온 data -> string -> number.
    
    circleMovCommand(xpos,ypos);// ? 조건관계식으로 판별하는 함수를 불러와서 매개변수로 x,y값을 넣어주기.
}
function circleMovCommand(xpos,ypos){
    if(xpos > 380 || ypos > 380 || xpos < 0 || ypos < 0){
        alert('잘못된 수치입니다. 0 ~ 380 이내로 입력하세요.');
    }else{
        $circle.css({
            "left": xpos,
            "top": ypos
        });
    }
}

// *case. 3
function keyControl(){
    // ? 움직이는 대상 = .circleKey
    // ? keyboard Key를 눌렀을 때 -> 대상이 움직여야함.(x,y = css로 움직인다.) -> 0미만이나 380초과되는 상황은 안됨.
    // ! keyboard key를 눌렀을 때? 이걸 뭔수로 가져와.
    // ! 이동한다쳐, 이동할 때 간격은 어떻게해? 이건 균일하냐? 임의냐? -> 균일하게 움직임.(var range = 50;)
    // ? 누를 때마다, 처음위치로 돌아가서 다시움직이냐? 아니면 현재 위치에서 추가로 움직이냐?(현재위치를 저장할수 있어야 함)
    // * x 현재위치, y 현재위치를 저장할 변수가 또 필요하네. (var currentXpos = 0; var currentYpos = 0;)

    var $circle = $(".circleKey");
    var range = 50;
    var currentXpos = 0;
    var currentYpos = 0;

    $(document).keydown(function(e){
        // console.log("입력한키가뭐냐?" + e.keyCode);
        // ! w : 87(top -), d : 68(right +), s : 83(bottom +), a : 65(left -)
        
        switch(e.keyCode){
            case 87:
                alert('위방향 테스트');
                break;
            default:
                alert('다른키');
                break;
        }
        // todo . 움직임 완성. (필수). 조건안에 갇히게 만들기(0,380) (선택)
    });
}