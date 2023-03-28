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
            $checkTarget.text("check_box");
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}

// todo. passwordComponent 만들어보기
function toggleTodo(){
    var $toggleTarget = $(".material-icons.toggleVisible");
    var $toggleInput = $("#userPW");
    var toggleStatus = false;

    $toggleTarget.click(function(){
        toggleStatus = !toggleStatus;
        if(toggleStatus == true){
            $toggleTarget.text('visibility');
            $toggleInput.attr('type','text');
        }else{
            $toggleTarget.text('visibility_off');
            $toggleInput.attr('type','password');
        }
    }); 

    // todo. $target.attr('attr이름') -> target의 'attr이름'의 값을 가져와라.
    // todo. $target.attr('attr이름','attr속성값') -> target의 'attr이름'의 값을 'attr속성값'으로 바꿔라.
}

function tabUI(){
    $(".tabMenu li").click(function(){
        var activeTab = $(this).attr("data-tabNumb");
        $(".tabMenu li").removeClass("activated");
        $(this).addClass("activated");
        $(".tabPage").removeClass("activated");
        $("#" + activeTab).addClass("activated");
    });
}