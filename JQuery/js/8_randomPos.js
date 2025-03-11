var count = 0;
var $score = null;
var $circle = null;
var $btnStart = null;
var $panel = null;
var playState = false;
var timerID = 0;

$(document).ready(function(){
    init();
    initEvent();
});
function init(){
    $score = $("#score");
    $circle = $("#circle");
    $btnStart = $("#btn_start");
    $panel = $(".panel");
}
function initEvent(){
    $btnStart.click(gameStart); // 원이 무작위 움직임
    $circle.click(scoreCount); // 점수상승
}
function gameStart(){
    playState = true; // 시작 button click -> 상태전환.
    if(playState == true){ // 이하 true조건일 때 구동할 기능들. 
        gameEnd(); // 게임종료함수 - ? 일정시간후 끝나야 하기 때문에
        
        setInterval(moveCircle,500); // 일정 시간마다 함수를 실행하라. 고정인자 x2. (함수,시간차)
    }
}

function moveCircle(){
    $circle.css({
        left: Math.floor(Math.random()*($panel.width()-$circle.width())),// x axis random value
        top: Math.floor(Math.random()*($panel.height()-$circle.height()))// y axis random value
    });
    /*
        ! random method : 매개변수 = x, 리턴값 = 0 - 1 사이 소수값.
    ? 1. random 메서드는 0 - 1 범위에서 0 과 1을 포함하지 않는 소수를 랜덤하게 리턴한다. (0.111111111~0.999999999)
    ? 2. parseInt는 안의 수를 소수에서 정수로 변환한다.
    ? 3. random*50 이 되면 결과적으로 0 ~ 50 사이의 정수가 나오게 된다.(parseInt) 
    ? 4. 예를 들어 random 에서 0.9938 을 리턴했다면 * 50 이 되면서 49.69 가 되고 parseInt로 인해 49가 된다. 그 이후 50이 더해지며 99가 된다.
    */
   /*
        Math.floor - 내림 정수 / Math.ceil - 올림 정수
   */
}

function scoreCount(){

}
function gameEnd(){
    setTimeout(function(){
        playState = false; //? 게임상태 변수 초기화
        // 움직임종료 기능
        // 경고창출력(점수 출력)
        // 수치 초기화
        // 초기화된 수치를 다시 넣어줘야함($score)
    },10000); // 일정 시간 후 데리고있는 함수를 한번만 실행하라. - 고정인자 x 2 (함수,시간)
}