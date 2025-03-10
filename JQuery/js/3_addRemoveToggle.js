$(document).ready(function(){
    toggleCheck();
});
function toggleCheck(){
    var $checkTarget = $(".material-icons.checkIco");
    var $checkLabel = $(".label.checkLabel");
    var checkStatus = false;

    $checkLabel.click(function(){
        checkStatus = !checkStatus;
        // console.log(checkStatus);
        if(checkStatus == true){
            $checkTarget.text("check_box"); //? ㄷㅌ> 대상.text() -> 대상의 글자 불러와, 대상.text("Blah"); ->대상의 글자를 Blah로 바꿔.
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}