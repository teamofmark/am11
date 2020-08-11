
$(document).ready(function(){
    // *exp.1 대상 글자색 바꿔보기
    var $divs = $('div');
    $divs.css({
        'color' : '#f00',
        'background-color' : '#00f'
    });
    // *exp.2 버튼 클릭으로 alert 띄워보기
    sayHello();
    // *exp.3
    addBorder();
    // todo.1 버튼(#textChange)을 클릭하면 패널(#panel2)의 글자 크기와 색을 변경해보라.
    textChange();
});

// *exp.2
function sayHello(){
    $('#btnCheck').click(function(){
        alert('hello');
    });
}
// *exp.3
function addBorder(){
    $('#btnAddBorder').click(function(){
        $('#panel').css({
            'border' : '5px solid black'
        });
    });
}
// todo. 1
function textChange(){
    $("#btnTextChange").click(function(){
        // $("#panel2").css("font-size","25px");
        // $("#panel2").css("color","green");
        $("#panel2").css({
            "font-size" : 25, //! or fontSize
            "color" : 'green'
        });
    });
}