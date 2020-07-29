$(document).ready(function(){
    addRemove();
});

function addRemove(){
    var $checkTarget = $('.checkSpan');
    var clickStatus = false;

    $(".label").click(function(){
        clickStatus = !clickStatus;

        if(clickStatus==true){
            $checkTarget.addClass('material-icons');
        }else{
            $checkTarget.removeClass('material-icons');
        }
    });
}