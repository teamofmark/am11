$(document).ready(function(){
    // case.1
    textColor();
    // case.2 
    $("#btnCheck").click(sayHello);
    // case.3
    $("#btnAddBorder").click(addBorder);
    // todo.
    
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

}