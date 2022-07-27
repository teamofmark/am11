$(document).ready(function(){
    // *case. 1 (잘못된 예)
    var $divs = $("div");
    $divs.css("color","#f00");

    // *case. 2
    $("#btnCheck").click(sayHello);

    // *case. 3
    $("#btnAddBorder").click(addBorder);

    // $("#btnAddBorder").click(function(){
    //     $("#panel").css("border","3px solid black");
    // });
    // *case. 4
    $("#btnTextChange").click(textChange);
});
// *case. 2
function sayHello(){
    alert('Hello');
}

// *case. 3
function addBorder(){
    $("#panel").css("border","3px solid black");
}

// *case. 4
function textChange(){
    $("#panel2").css({
        "font-size" : "25px",
        "color" : "green",
        "font-weight" : "bold"
    });
}