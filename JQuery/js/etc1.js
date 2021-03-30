$(document).ready(function(){
    var $divs = $("div");
    $divs.css("color","#f00");
    sayHello();
    addBorder();
    textChange();
});

// *case.1
function sayHello(){
    $("#btnCheck").click(function(){
        alert('hello?');
    });
}
// *case.2
function addBorder(){
    $("#btnAddBorder").click(function(){
        $("#panel").css("border","5px solid black");
    });
}
// *case.3
function textChange(){
    $("#btnTextChange").click(function(){
        $("#panel2").css({
            "font-size" : "25px",
            "color" : "green"
        });
    });
}