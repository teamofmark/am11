$(document).ready(function(){
    var count = 0;
    var $score = $("#score");
    var $circle = $("#circle");
    var playState = true;
    scoreCount(count, $score, $circle, playState);

});
function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text(count + '점');
        }
    });
    setTimeout(function(){
        playState = false;
        alert('게임종료.');
    },10000); //? 시간 경과시 실행.
}