$(document).ready(function(){

    var count = 0;
    var $score = $("#score");
    var $circle = $("#circle");
    var playState = true;

    scoreCount(count, $score, $circle, playState); //? 변수선언 및 매개변수로 전달.
    
});

function scoreCount(count, $score, $circle, playState){
    $circle.click(function(){ //? 클릭시 점수 출력기능
        if(playState == true){ //? 플레이상태 조건
            count++;
            $score.text(count + "점"); //? 점수출력
        }
    });

    setTimeout(function(){ //? 5초시간 경과시 플레이상태 변경 및 종료기능.
        playState = false;
        alert("게임종료.");
    }, 5000);
}