$(document).ready(function(){
    //*case.1
    var $divs = $("div");
    $divs.css('color','#f00');//? css를 적용하는 함수 css([propName],[propValue]); 

    // *case.2
    $("#btnCheck").click(sayHello);

});
function sayHello(){
    alert('hello');
}

