var $ex2 = null;
var count = 0;
$(document).ready(function(){
    $ex2 = $("#ex2");
    $ex2.html("<p>" + count + " - hi,hello </p>");
    $("#ex2append").click(appendCount);
    $("#ex2prepend").click(prependCount);
});
function appendCount(){
    // alert('정순추가될예정');
    count ++;
    $ex2.append("<p>" + count + " - hi, hello </p>"); //? append 정순 (위로)
}
function prependCount(){
    // alert('역순추가될예정');
    count --;
    $ex2.prepend("<p>" + count + " - hi, hello </p>"); //? prepend 역순 (아래로)
}