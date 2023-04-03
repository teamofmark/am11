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
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left: 0,
            top: 100 + (i * 150)
        });
    }
}
function initEvent(){
    $("#start").click(startGame);
}
function startGame(){
    if(timerID == -1){
        timerID = setInterval(function(){
            updateFishPosition(); //? 물고기 움직임 함수
            displayFishPositionInfo(); //? 물고기 위치 출력 함수
            checkGoalFish(); //? 결승선감지 함수
        },200);
    }
}
function updateFishPosition(){
    console.log('1. 물고기 움직인다.');
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i); //? n번째 물고기 0,1,2..
        var step = Math.ceil(Math.random()*10);//? 물고기 이동 범위 (큰값-x, )
        var newLeft = $fish.position().left + step;

        $fish.css("left", newLeft);
    }
}

function displayFishPositionInfo(){
    console.log('2. 물고기 정보 출력');
    // todo. 물고기 위치 정보 출력하기.
    var info = '';
    for(var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        info += i + 'th Fish : ' + $fish.position().left + "px <br>";
    }
    $info.html(info);
}

function checkGoalFish(){
    console.log('3. 결승선 통과 감지중');
    var winnerList = [];
    for(var i = 0; i < $fishList.length; i++){
        var fishCurrentPosition = $fishList.eq(i).position().left;
        if(fishCurrentPosition >= goalLine){
            winnerList.push({
                index: (i), position: fishCurrentPosition
            });
        }
    } //? 0~2번물고기의 현재 위치정보를 0,1,2,번 index에 position이라는 이름으로 저장.
    
    if(winnerList.length > 0){
        winnerList.sort(function(a,b){
            return b.position - a.position;
        }); //? compareFunction - 비교함수를 매개변수로 삽입하여 사용.
        /*
            ! data.sort([compareFunction]);
            ! 매개변수 = compareFunction - 정렬순서 정의 함수. 생략시 오름 차순 처리. (정순)
            ? (문자열변환 후 유니코드값의 크기에 따라 정렬)
            ! 리턴값 = 정렬이 완료된 결과 값.
            ? 리턴값 < 0 : a가 b보다 앞에
            ? 리턴값 = 0 : a와 b순서를 바꾸지 않음.
            ? 리턴 값 > 0 : b가 a보다 앞에

            * 한글정순 -> target.sort();
            * 한글역순
            * sort(function(a,b){
            *   var a = a.toString().toLowerCase();
            *   var b = b.toString().toLowerCase();
            *   return (b < a) ? -1 : (b == a) ? 0 : 1;
            * });
        */
        
        endGame(); //? 게임종료 함수
        alert('vict! ' + winnerList[0].index + 'th Fish!');
    }
}
function endGame(){
    console.log('4. 결승선 도달. 게임종료.');
    clearInterval(timerID);
    timerID = -1;
}