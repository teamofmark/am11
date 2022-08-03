var $fishList = null;
var timerID = -1;
var goalLine = 0;
var $fishWidth = 0;
var $info = null;

$(document).ready(function(){
    init();
    fishStartPosition();
});

function init(){
    $fishList = $(".fish");
    $info = $("#info");
    $fishWidth = $(".fish").width();
    goalLine = $("#bar").position().left - $fishWidth;
}

function fishStartPosition(){
    for (var i = 0; i < $fishList.length; i++){
        var $fish = $fishList.eq(i);
        $fish.css({
            left : 0,
            top : 100 + (i * 150)
        });
    }
}