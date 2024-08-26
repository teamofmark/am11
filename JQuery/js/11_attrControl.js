var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
var currentIndex = 0;
var $banner = null;

$(document).ready(function(){
    init();
    setInterval(swap,1000);
});
function init(){
    $banner = $(".banner");
}
function swap(){
    var imgName = "images/" + logos[currentIndex];
    $banner.attr("src",imgName);
    currentIndex++;
    reset();
}
// todo 순환로직 마저 완성하기
function reset(){
    if(currentIndex == logos.length){
        currentIndex = 0;
    }
}