$(document).ready(function(){
    tabMenu("#tabMenuDepth0 li");
    tabMenu("#tabMenuDepth1 li");
    tabMenu("#tabMenuDepth2 li");
});

function tabMenu(tabNumb){
    var $selectMenu = null; //? click한 tabMenu를 저장하는 변수.

    $(tabNumb).click(function(){
        //? 클로저함수 - 내부에서 밖에 있는 selectMenu 변수 사용중.
        if($selectMenu != null){
            $($selectMenu).removeClass("activated");
        }
        $selectMenu = $(this);
        $selectMenu.addClass("activated");
    });
}