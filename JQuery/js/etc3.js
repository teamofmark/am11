$(document).ready(function(){
    // *case. 1
    toggleMenu();

    // *case. 2
    toggle();
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