$(document).ready(function(){
    // ? 움직일 대상, 움직이는 간격, x좌표를 저장할 곳, 막대 길이.
    var $circle = $("#circle");
    var runStep = 10;
    var xpos = $circle.position().left;
    var railWidth = $("#rail").width();

    startMove($circle, runStep, xpos, railWidth);
});
function startMove($circle, runStep, xpos, railWidth){
    $("#btn_start").click(function(){
        setInterval(function(){
            xpos += runStep;

            $circle.css({
                left: xpos
            });
            if(xpos > railWidth || xpos < 0){
                // todo. 원의 움직임에 방향전환
                
            }
        },0);
    });
}