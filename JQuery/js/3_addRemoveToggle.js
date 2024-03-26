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