$(document).ready(function(){
    fontColorChange();
    $("#btnCheck").click(sayHello);
    $("#btnAddborder").click(addBorder);
    $("#btnTextChange").click(textChange);
});

function fontColorChange(){
    var $divs = $("div");
    $divs.css("color","#f00");
}

function sayHello(){
    alert('Hello');
}

function addBorder(){
    $("#panel").css("border","5px solid black");
}

function textChange(){
    $("#panel2").css({
        "font-size" : "25px",
        "color" : "green",
        "font-weight" : "bold"
    });
}