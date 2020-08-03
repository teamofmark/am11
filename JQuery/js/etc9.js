$(document).ready(function(){
    var count = 0;
    var $score = $("#score");
    var $circle = $("#circle");
    var playState = true;

    scoreCount($circle, playState, count, $score);
});

function scoreCount($circle, playState, count, $score){
    $circle.click(function(){
        if(playState == true){
            count++;
            $score.text(count + "점");
        }
    });

    setTimeout(function(){
        playState = false;
        alert('게임종료.');
    } , 5000);
}