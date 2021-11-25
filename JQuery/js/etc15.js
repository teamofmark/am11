/*
? 요구사항
* 시작 버튼을 누르면 경기가 시작한다. 움직임은 0.2초간격으로 설정한다.
* 물고기는 실제 경주 게임처럼 어떤 물고기가 1등이 될지 예측 할 수 없게.
* 물고기가 골인 지점을 통과하면 몇 번째 물고기가 우승 했는지 알려주고 게임 종료.
*/
var $fishList = null;
var timerID = -1;
var $info = null;
var goalLine = 0;
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
    goalLine = $("#bar").position().left - $fishWidth;
}

function fishStartPosition(){
    //  물고기 초기배치하기 - 마릿수만큼 반복. css로 설정. for / length, eq 
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);

        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
}

function initEvent(){
    $("#start").click(startGame); //? 게임 시작 함수 작동
}

function startGame(){ //? 게임시작함수
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); //? 1. 물고기 움직임 함수
            displayFishPositionInfo(); //? 2. 물고기 위치정보 출력 함수
            checkGoalFish(); //? 3. 결승선을 통과했는지? 판별 함수.(게임종료함수 내재)
        }, 200);
    }
}

function updateFishPosition(){
    console.log("1. 물고기 움직인다.");
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? 루프당 개별(ex> i = 0 -> 0번물고기) 물고기
        var step = Math.ceil(Math.random()*10); //? 최대설정수치 이내로 +1 까지 범위 random
        var newLeft = $fish.position().left + step;
        //? 이동한 현재 위치에서 지속가산 ? = 10 (+5+2+3+6).....
        $fish.css("left", newLeft); //? 지속가산되는 newLeft를 css에 적용.
    }
}
function displayFishPositionInfo(){
    console.log('2. 물고기 정보 출력');
    var info = ""; //? 출력정보 text를 담을 지역변수 선언

    for(var i = 0; i < $fishList.length; i++){ //? 물고기 마릿수 만큼 반복
        var $fish = $fishList.eq(i); //? 각 i번째 물고기 선택

        info += i + "번 물고기 : " + $fish.position().left + "px <br>";
        //? 해당 string 조합식을 info에 담기 ($fish = ith 물고기);
    }
    $info.html(info); //? tag와 text를 별도로 적용.
}
function checkGoalFish(){
    var winnerList = [];

    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;

        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                // ? goalLine을 넘은 물고기가 발생시 winnerList 배열에 position 값 저장.
                index: (i),
                position: fishCurrentPosition
            });
        }
    }
    if(winnerList.length > 0){ //? 배열에 position 값이 담기고 나면
        winnerList.sort(function(a,b){
            return b.position-a.position; //? position 값 기준 내림차순 정렬
        });
    }
}