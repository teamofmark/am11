$(document).ready(function(){
    toggleCheck();
    toggleTodo();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        if(checkStatus == true){
            $checkTarget.text("check_box");
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}

function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $("#userPW").attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $("#userPW").attr("type","password");
        }
    });
}