$(document).ready(function(){
    toggleCheck();
    toggleTodo();
    tabUI();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box"); //ex > 대상.text() -> 대상의 글자 불러와, 대상.text("Blah"); ->대상의 글자를 Blah로 바꿔.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;
    
    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text("visibility");
            $toggleInput.attr("type","text");
            // attr 구성은 이름,값으로 구성됨. = 내가 변경하고자하는 이름을 지정하고 값을 넣어야함 = parameter x 2.
            // ex> attr("type"); - type값을 불러와라
            // ex> attr("type","text") - type값을 text로 바꿔라.
        }else{
            $toggleTarget.text("visibility_off");
            $toggleInput.attr("type","password");
        }
    });
}
function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        // this - event가 일어난 당사자
        $(".tabMenu li").removeClass("activated"); // class삭제
        $(this).addClass("activated"); //class추가
    
        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");    
    });
}