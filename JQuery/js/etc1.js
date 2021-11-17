$(document).ready(function(){
    //*case.1
    var $divs = $("div");
    $divs.css('color','#f00');//? css를 적용하는 함수 css([propName],[propValue]); 

    // *case.2
    $("#btnCheck").click(sayHello);
    /*
        $("#btnCheck").click(function(){
            alert('hello');
        });
    */
    // *case.3
    $("#btnAddBorder").click(addBorder);

    // todo.
    $("#btnTextChange").click(textChange);
});
function sayHello(){
    alert('hello');
}

// *case.3
function addBorder(){
    $("#panel").css("border","5px solid black");
}
// todo.
function textChange(){
    $("#panel2").css({
        'font-size' : '25px',
        'color' : 'green',
        'font-weight' : 'bold'
    });
    //? 배열방식 기억하기 [1,2,3,4,5,6,7,8,9,10];
}