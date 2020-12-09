var $ex2 = null;
var count = 0;

$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + "hi, hello </p>");

    $("#ex2Print").click(plusCount);
});
function plusCount(){
    count ++;
    $ex2.append("<p>" + count + "hi, hello </p>");
}