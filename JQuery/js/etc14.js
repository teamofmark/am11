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
    $btnStart.click(gameStart);
    $circle.click(scoreCount);
}
function gameStart(){
    // ?1. playState = > true 로 변경되야함.
    // ?2. playState true가 되었을 때 게임을 종료시킬 함수 불러오기
    // ?3. 조건문으로 playState상태에따라 특정시간간격마다 실행(원움직임함수,몇초마다)하는 함수를 짜기.
}
function moveCircle(){
    // ? 원 움직임 : random으로 움직이는데 제한값(박스의 너비 에서 원의 너비를 뺀 숫자) 안에서 움직임.
    // ? css로 적용해야지.
}

function scoreCount(){
    // ? 원을 클릭했을 때, count를 증가시키고 증가된 count를 점수판에 출력.(.text());
}

function gameEnd(){
    // ! 특정시간(10초)이 경과된 이후 단 한번만 실행. 
        // ? 게임 종료 함수에는 playState => false로 변경되야함.(초기화)
        // ? 특정시간간격마다 실행되는 함수를 clear하기.
        // ? 경고창띄우기 - 게임종료.
        // ? count(점수) 0으로 초기화.
        // ? 초기화된 count를 점수판에 재출력.(.text());
}