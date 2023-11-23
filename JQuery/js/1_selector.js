$(document).ready(function(){
    // *case. 1
    var $divs = $("div"); //? jQuery는 css 모든 selector를 사용한다.
    $divs.css("color","#f00");

    // *case. 2
    $("#btnCheck").click(sayHello);

    // *case. 3
    $("#btnAddBorder").click(addBorder);

    // todo
    $("#btnTextChange").click(textChange);
});

// *case. 2
function sayHello(){
    alert('hello');
}

// *case. 3
function addBorder(){
    $("#panel").css("border","5px solid black");
}

// todo.
function textChange(){
    $("#panel2").css({
        "font-size" : "25px",
        "color" : "green",
        "font-weight" : "bold"
    });
}