$(document).ready(function(){
    targetSelect();
    $("#btnCheck").click(sayHello);
    $("#btnAddBorder").click(addBorder);
    // todo
    $("#btnTextChange").click(textChange);
});
function targetSelect(){
   var $divs = $("div");
   $divs.css("color","#f00"); 
}
function sayHello(){
    alert("Hi?");
}
function addBorder(){
    $("#panel").css("border","5px solid black");
}
function textChange(){
    $("#panel2").css({
        "fontSize": "25px",
        "color" : "green",
        "fontWeight" : "bold",
        "lineHeight" : "31px"
    });
}