$(document).ready(function(){
    // case.1
    textColor();
    // case.2 
    $("#btnCheck").click(sayHello);
    // case.3
    $("#btnAddBorder").click(addBorder);
    // todo.
    $("#btnTextChange").click(textChanges);
});
function textColor(){
    var $divs = $("div");
    $divs.css("color","#f00");
}
function sayHello(){
    alert('hello');
}
function addBorder(){
    $("#panel").css("border","5px solid black");
}
/*
$("#btnAddBorder").click(function(){
    $("#panel").css("border","5px solid black");
});
*/
// todo. 
function textChanges(){
    // $("#panel2").css("font-size","25px");
    // $("#panel2").css("color","green");
    // $("#panel2").css("font-weight","bold");
    // $("#panel2").css("line-height","31px");
    $("#panel2").css({
        "font-size" : "25px",
        "color" : "green",
        "font-weight" : "bold",
        "line-height" : "31px"
    });
}