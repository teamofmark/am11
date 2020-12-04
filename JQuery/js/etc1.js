$(document).ready(function(){
    // *exp.1 대상 글자색 바꿔보기
    var $divs = $("body > div:nth-child(n+1):nth-child(-n+3)");
    $divs.css('color','#f00');

    // *exp.2 button 클릭으로 alert띄워보기
    sayHello(runFunc);
    
    // *exp.3
    addBorder();
});
 // *exp.2
function sayHello(playFunc){
    $("#btnCheck").click(playFunc);
}
function runFunc(){
    alert('hello');
}

 // *exp.3
 function addBorder(){
     $("#btnAddBorder").click(function(){
        $("#panel").css({
            "border" : "5px solid black",
            "font-size" : '25px',
            "color" : 'blue'
        });
     });
 }