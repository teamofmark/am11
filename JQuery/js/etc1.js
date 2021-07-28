$(document).ready(function(){
    // *case.1 
    var $divs = $("div");
    $divs.css("color","#f00");

    // *case.2
    $("#btnCheck").click(sayHello);

    // *case.3
    $("#btnAddBorder").click(addBorder);
    // addBorder();

    // todo.
    $("#btnTextChange").click(textChange);
    // textChange();
});

// *case.2
function sayHello(){
    alert('hello');
}

// *case.3
function addBorder(){
    $("#panel").css("border","5px solid black");
    // $("#btnAddBorder").click(function(){
        // $("#panel").css("border","5px solid black");
    // });
}

// todo.
function textChange(){
    $("#panel2").css({
        "font-size" : "25px", //! or fontSize
        "color" : "green",
        "font-weight" : "bold"
    });
    // $("#btnTextChange").click(function(){
    //     $("#panel2").css({
    //         "font-size" : "25px",
    //         "color" : "green",
    //         "font-weight" : "bold"
    //     });
    // });
}