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
        if(checkStatus == true){
            $checkTarget.text("check_box");
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
        var activeTab = "#" + $(this).attr("data-tabNumb"); //? $(this) = 위 event가 일어난 당사자.
        // console.log(activeTab);
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        // todo 연결되야하는 page를 켜고 끄기.
        $(".tabPage").removeClass("activated");// todo.1 tabPage 전체 activated class 제거
        $(activeTab).addClass("activated");// todo.2 위에서 저장한 id 불러다 activated class 부여하기.
    });
}