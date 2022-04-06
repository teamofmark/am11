// ? 변수 : 물고기들, interval초기화, 기록표시부, 결승선, 물고기사이즈
var $fishList = null;
var timerID = -1;
var $info = null;
var $goalline = 0;
var $fishWidth = 0;

$(document).ready(function(){
    init();
    fishStartPosition();

    initEvent();
});

function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish img").width();
    $goalline = $("#bar").position().left - $fishWidth;
}
function fishStartPosition(){
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        
        $fish.css({
            left : 0,
            top : 100 + (i * 150)
        });
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition();// ? 물고기 위치 랜덤 변화
            displayFishPositionInfo();// ? 변화된 좌표값 출력
            checkGoalFish();// ? 결승선 도달 감지(종료함수)
        },200);
    }
}
function updateFishPosition(){
    //? 0번 물고기 이동 > 1번 물고기 이동 > 2번 물고기 이동. = 모든 이동은 random으로 이동.
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? nth 물고기.
        var step = Math.ceil(Math.random()*10);
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
}
// todo. 물고기 위치 출력함수 만들기
function displayFishPositionInfo(){
    console.log('2.정보출력');
    var infoText = "";

    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); // ? nth물고기.
        infoText += i + "번 물고기 : " + $fish.position().left + "px <br>"; // ? 문구완성
    }

    $info.html(infoText);// ? 출력부 - 전광판 아이디 불러다 값넣어주기.
}

function checkGoalFish(){
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;

        if(fishCurrentPosition >= $goalline){
            winnerList.push({
                index: (i), position:fishCurrentPosition
            });
        }
    }
    // ? goalLine을 넘은 물고기를 기준으로 winnerList 배열에 position이라는 이름으로 저장

    if(winnerList.length>0){
        winnerList.sort(function(a,b){
            return b.position - a.position; //? position으로 저장된 값 기준 내림차순 정렬.
        });
        /*
             ? 배열(data).sort([compareFunction]);
             ! 매개변수 = compareFunction - 정렬순서 정의 함수(개발자). 생략시 오름차순정리.(unicodeValue)
        */
       endGame();
       alert('우승 !' + winnerList[0].index + '번 물고기!');
    }
}

function endGame(){
    console.log('4.게임종료');
    clearInterval(timerID);
    timerID = -1;
}