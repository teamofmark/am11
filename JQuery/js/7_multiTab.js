$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null;
    $(tabNumb).click(function(){
        // ? closureEffect (function) - 내부에서 selectMenu라는 외부 변수 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}

/*
var $selectMenu = null;

function tabMenu(tabNumb){
    $(tabNumb).click(tabEvent);
}
function tabEvent(){
    if($selectMenu != null){
        $selectMenu.removeClass("activated");
    }
    $selectMenu = $(this);
    $selectMenu.addClass("activated");
}
*/