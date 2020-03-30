/*
    랜덤으로 배너이미지 변경하기 (etc12 코드 수정)
    -기존 코드를 수정해 1초에 한 번씩 배열에 들어 있는 이미지를 랜덤 순으로 전환되게 만들어 주세요.
*/

var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
var speed = 0;
var $banner1 = null;
var $banner2 = null;
//? 이상 etc11 과 동일

$(document).ready(function(){
    init();
    swap($banner1, 1000); //? 배너전환 기능에 대상과 속도 매개변수로 전달.
    swap($banner2, 3000);
});


function init(){
    $banner1 = $("#banner1");
    $banner2 = $("#banner2");
}

function swap(selector, speed){ //? 매개변수 전달받음.
    setInterval(function(){
        currentIndex = Math.floor(Math.random()*logos.length); //? random 배열값 잡아오기.

        var imgName = "images/" + logos[currentIndex];
        selector.attr("src", imgName); //? 전달받은 대상 매개변수로 etc11과 동일한 로직수행.
        
        // reset();
    }, speed); //? 전달받은 속도 매개변수로 속도설정.

}

// function reset(){
//     if(currentIndex >= logos.length){
//         currentIndex = 0;
//     }
// }