$(document).ready(function(){
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null; //? click 한 tabMenu를 저장하는 변수.

    $(tabNumb).click(function(){ //? closureFunction  - 내부에서 selectMenu라는 외부 변수를 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
};