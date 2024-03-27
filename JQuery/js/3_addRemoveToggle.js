$(document).ready(function(){
    // *case.1
    toggleCheck();
    // *case.2
    toggleTodo();
    // *case.3
    tabUI();
    // *case.4
    accControl(".accComponent li h3");
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box");
            /*
                ? target.text(); : text 불러와. / target.text("blah"); : text를 blah로 교체해.
            */
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}
// todo. 
/*
    * 1. 눈 켜진 상태 text를 찾아야지 -> material에서..
    * 2. type='password' -> 'text' 변경방법? -> target.attr("type","text") = type을 text로 변경해라.
*/
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = "#"+$(this).attr("data-tabNumb");
        // console.log(activeTab);
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $(activeTab).addClass("activated");
    });
}
function accControl(target){
    $(target).click(function(){
        $(this).toggleClass("active");
        // ? add - 추가 / remove - 제거
    });
}