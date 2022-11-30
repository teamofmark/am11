var $ex2 = null;
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + " - hi, hello it's me... </p>"); //? html() <-> write() 함수와 유사.
    $(window).scroll(appendCount);
    // ! position - left, top , offset - x,y , if, target.height(); target.css("padding-top")
    // $("#ex2append").click(appendCount);
    $("#ex2prepend").click(prependCount);
});
function appendCount(){
    count ++;
    $ex2.append("<p>" + count + " - hi, hello it's me... </p>");
}
function prependCount(){
    count --;
    $ex2.prepend("<p>" + count + " - hi, hello it's me... </p>");
}