$(document).ready(function(){
    addRemove();
    // toggle();
    tabUI();
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

function toggle(){
    var $checkTarget = $('.checkSpan');

    $('.label').click(function(){
        $checkTarget.toggleClass('material-icons');
    });
}

function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");

        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");

        $(".tabPage").removeClass("activated");
        $("#"+activeTab).addClass("activated");
    })
}