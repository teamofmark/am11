$(document).ready(function(){
    var $divs = $("div");
    $divs.css("color","#f00");
    sayHello();
    addBorder();
});

function sayHello(){
    $("#btnCheck").click(function(){
        alert('hello?');
    });
}

function addBorder(){
    $("#btnAddBorder").click(function(){
        $("#panel").css("border","5px solid black");
    });
}