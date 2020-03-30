/*
    todo : 물고기 경주 게임

    ? 요구사항
    * 시작 버튼을 누르면 경기가 시작한다.
    * 물고기는 실제 경주 게임처럼 어떤 물고기가 1등이 될 것인지 예측할 수 없게 할 것.
    * 물고기가 골인 지점을 통과하면 몇 번째 물고기가 우승했는지 알려주고 게임을 종료.
    */

var $fishs = null;

$(document).ready(function() {
    init();
    fishStartPosition();
});

function init(){
    $fishs = $(".fish");
}

function fishStartPosition(){
    // 물고기 배열 하기
    for (var i = 0; i < $fishs.length; i++) {
        var $fish = $fishs.eq(i);
        /*
            .eq (색인)
            인덱스
            유형 : 정수
            요소의 0 기반 위치를 나타내는 정수.
        */
        // 물고기 위치는 100부터 시작
        $fish.css({
            left : 0,
            top : 100 + (i * 150)
        })
    }
}