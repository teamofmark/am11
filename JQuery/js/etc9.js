$(document).ready(function(){
    var count = 0;
    var $score = $("#score");
    var $circle = $("#circle");
    var playState = true;

    scoreCount(count, $score, $circle, playState); //? 변수선언및 매개변수 전달.
});
// ? 1. page load 시에 게임 시작
// ? 2. 5초 시간 동안 play
// ? 3. circle을 click할 때마다 scoreBoard에 점수 출력.
// ? 4. 5초 후에는 play 중지.
function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){ //? click시 점수 출력 기능
        if(playState == true){ //? play상태 조건
            count++;
            $score.text(count + '점'); //? 점수출력.
        }
    });
    setTimeout(function(){
        playState = false;
        alert('게임종료');
    },5000);    
}