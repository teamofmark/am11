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
            count ++;
            $score.text(count + '점'); //? 점수출력
        }
    });

    setTimeout(function(){
        playState = false;
        alert('종료되었습니다.');
    },5000); // ? 특정 시간(m/s)이 경과시 실행.
}