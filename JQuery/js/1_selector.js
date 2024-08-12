$(document).ready(function(){
    targetSelect();
    $("#btnCheck").click(sayHello);
    $("#btnAddBorder").click(addBorder);
    // todo
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