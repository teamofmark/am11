$(document).ready(function(){
    // *case. 1
    toggleMenu();

    // *case. 2
    toggle();

    // *case. 3
    tabUI();
});
function toggleMenu(){
    var $menuTarget = $(".material-icons.menu");
    var menuStatus = false;

    $menuTarget.click(function(){
        menuStatus = !menuStatus;

        if(menuStatus == true){
            $menuTarget.text("menu_open");
        }else{
            $menuTarget.text("menu");
        }
    });
}

function toggle(){
    var $checkTarget = $(".ico.check");

    $(".label").click(function(){
        $checkTarget.toggleClass("fas fa-check");// ? class Toggle이 가능해야함.
    });
}

function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb"); //? 앞에 있는 대상의 attr을 불러오기.

        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");

        /* 
            todo. tabMenu에 반응하여 해당 tabPage 열리게 하기. 
         */
        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });
}