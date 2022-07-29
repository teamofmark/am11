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
    // ? text: visibility -> 켜진눈 , visibility_off -> 꺼진눈.
    // todo. 켜진눈 -> input: text, 꺼진눈 -> input: password.
    // * attr('name') -> 값 불러오기 / attr ('name','value') 값 바꿔치기
    var $toggleTarget = $(".material-icons.toggleVisible");
    var toggleStatus = false;
    var $pwInput = $("#userPW");
    
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $pwInput.attr("type","text");
        }else{
            $toggleTarget.text("visibility_off");
            $pwInput.attr("type","password");
        }
    });

}