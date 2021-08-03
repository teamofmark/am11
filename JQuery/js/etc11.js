var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
// ?  image File 배열.
var currentIndex = 0; //? 배열내 선택 변수 초기화
var $banner = null; //? jquery banner target 변수 초기화

$(document).ready(function(){
    init();
    swap();
    setInterval(swap, 1000);
});
function init(){
    $banner = $(".banner");
}
function swap(){
    var imgName = "images/" + logos[currentIndex];
    $banner.attr("src", imgName);
    currentIndex++;
    reset();
}
function reset(){
    if(currentIndex == logos.length){
        currentIndex = 0;
    }
}