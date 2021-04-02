$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
});
function tabMenu(currentTab){
    var $selectMenu = null; // ? click한 tabMenu
    $(currentTab).click(function(){ //? 클로저함수 - 내부에서 selectMenu 변수 사용중.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}