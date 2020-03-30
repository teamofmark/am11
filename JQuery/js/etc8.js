var $ex2 = null; //? jquery ready 외부에서도 사용 가능하게 변수 설정.
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count+" hi, hello </p>");
/*
    $("#ex2Print").click(function(){ //? 익명함수
        count ++;
        $ex2.append("<p>" + count+" hi, hello </p>");
        //! or
        plusCount();
    });
*/
    $("#ex2Print").click(plusCount);
    
});

function plusCount(){ //? 일반함수
    count ++;
    $ex2.append("<p>" + count+" hi, hello </p>"); //? append 대상안에 정순으로 추가 prepend는 역순
}
