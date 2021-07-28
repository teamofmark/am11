$(document).ready(function(){
    // *case.1 
    var $divs = $("div");
    $divs.css("color","#f00");
    $("#btnCheck").click(sayHello);
});

// *case.2
function sayHello(){
    alert('hello');
}