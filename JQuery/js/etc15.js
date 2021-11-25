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