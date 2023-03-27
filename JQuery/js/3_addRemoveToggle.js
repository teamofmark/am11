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
        }else{
            $checkTarget.text("check_box_outline_blank");
        }
    });
}

// todo. passwordComponent 만들어보기
function toggleTodo(){
    // todo. $target.attr('attr이름') -> target의 'attr이름'의 값을 가져와라.
    // todo. $target.attr('attr이름','attr속성값') -> target의 'attr이름'의 값을 'attr속성값'으로 바꿔라.
}