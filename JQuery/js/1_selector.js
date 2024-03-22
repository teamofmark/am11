$(document).ready(function(){
    // ! 잘못된 방식 - 실행되는 조건이 없이 바로 실행됨.
    // ? JQuery - css selector 모두 사용 가능.
    // * case. 1
    var $divs = $("div");
    $divs.css("color","red");
    // ? propName : propValue; ex> font-size: 14px;

    // * case. 2
    $("#btnCheck").click(sayHello);

    // *case. 3
    $("#btnAddBorder").click(addBorder);

    // todo.
    $("#btnTextChange").click(textChange);
});
// * case. 2
function sayHello(){
    alert('hello');
}
// *case. 3
function addBorder(){
    $("#panel").css("border","5px solid black");
}
// todo.
function textChange(){
    // ? 적용대상의범위가 넓은 함수일 경우에는 object type 지원.
    // $("#panel2").css("font-size","25px");
    // $("#panel2").css("color","green");
    // $("#panel2").css("font-weight","bold");
    $("#panel2").css({
        "font-size" : "25px",
        "color" : "green",
        "font-weight" : "bold"
    });
}
