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
            $score.text(count + "점");
        }
    });
    setTimeout(function(){
        alert("게임종료.");
        playState = false;
    },5000);
};