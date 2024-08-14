$(document).ready(function(){
    // case.1
    toggleCheck();
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