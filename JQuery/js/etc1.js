$(document).ready(function(){
    // *exp.1 대상 글자색 바꿔보기.
    var $divs = $("div");
    $divs.css("color","#f00");
    
    // *exp.2 버튼 클릭으로 alert 띄워보기
    sayHello();

    // *exp.3 확인 버튼을 클릭하면 패널의 외곽선을 변경하기.
    addBorder();

    // todo.1
    textChange();
});

// *exp.2
function sayHello(){
    $("#btnCheck").click(function(){
        alert("hello");
    });
}

// *exp.3
function addBorder(){
    $("#btnAddBorder").click(function(){
        $("#panel").css("border", "5px solid black");
    });
}

// todo.1
function textChange(){
    $("#btnTextChange").click(function(){
        $("#panel2").css({
            "font-size" : '25px', //! or fontSize
            "color" : "green",
            "text-shadow" : "8px 10px 5px #000"
        });
    });
}