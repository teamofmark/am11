$(document).ready(function(){
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
});
function tabMenu(tabNumb){
    var $selectMenu = null;
    $(tabNumb).click(function(){
        // ? closureFunction - 함수는 본래 실행된 이후 죽어야되는데, 죽지 못하고 살아있음.
        if($selectMenu != null){
            $selectMenu.removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}