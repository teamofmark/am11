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
            $checkTarget.text("check_box");
            /*
                ? target.text(); : text 불러와. / target.text("blah"); : text를 blah로 교체해.
            */
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}