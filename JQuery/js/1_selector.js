$(document).ready(function(){
    textColorChange();
    $("#btnCheck").click(sayHello);
    $("#btnAddBorder").click(addBorder);
    $("#btnTextChange").click(textChange);
});
function textColorChange(){
    var $divs = $("div");
    $divs.css("color","#f00");
}
function sayHello(){
    alert('Hello..it,s me...');
}
function addBorder(){
    $("#panel").css("border","5px solid black");
}
function textChange(){
    $("#panel2").css({
        "font-size": "25px",
        "color": "green",
        "font-weight": "bold"
    });
    // $("#panel2").css("font-size", "25px");
    // $("#panel2").css("color","green");
    // $("#panel2").css("font-weight","bold");
}