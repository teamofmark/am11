$(document).ready(function(){
    // case.1
    toggleCheck();
    // todo
    toggleTodo();
    // case.2
    tabUI();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    // ! 실제 toggle 방식을 이해
    var checkStatus = false;
    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box");
        }else{
            // todo
            $checkTarget.text("check_box_outline_blank");
        }
    });
}
function toggleTodo(){
    // ? attr변경방법 - 대상.attr(); = attr([attrName],[attrValue]);
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text('visibility');
            $toggleInput.attr("type","text");
        }else{
            $toggleTarget.text('visibility_off');
            $toggleInput.attr("type","password");
        }
    });
}
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = "#" + $(this).attr("data-tabNumb");
        // console.log(activeTab);
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");

        $(".tabPage").removeClass("activated");
        $(activeTab).addClass("activated");
    });
}