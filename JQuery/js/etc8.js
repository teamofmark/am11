var $ex2 = null;
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + "- hi, hello, 안녕하세요. </p>");
    $("#ex2prepend").click(prependCount);
    $("#ex2append").click(appendCount);
});

function appendCount(){
    count ++;
    $ex2.append("<p>" + count + "- hi, hello, 안녕하세요. </p>"); //? 대상안에 정순추가
}
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + "- hi, hello, 안녕하세요. </p>"); //? 대상안에 역순추가
}