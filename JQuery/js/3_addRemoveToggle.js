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
    var $toggleTarget = $('.material-icons.toggleVisible');
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

    // ? .attr(); 
    // ! - .attr("속성") -> 속성의 값을 가져와라.
    // ! - .attr("속성","속성값") -> 속성의 값을 변경해라.
}