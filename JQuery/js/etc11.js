/*
    ? img swap Banner
    * 1. 1초에 한 번씩 배열에 넣어놓은 image를 순차적으로 전환.
    * 2. image가 무한 반복으로 전환되게 만들기.
    * ex > 마지막 image가 나오고 나면 0번 index image가 나오게.
*/
var currentIndex = 0; //? 배열내 선택변수.
var logos = ["logo_01.jpg","logo_02.jpg","logo_03.jpg","logo_04.jpg","logo_05.jpg","logo_06.jpg","logo_07.jpg","logo_08.jpg"];
//? image가 들어간 배열 = server에서 pull 받아온 data.
var $banner = null; //? 배너가 들어가는 변수.

$(document).ready(function(){
    init();
    swap(); //? banner image 전환 기능
    setInterval(swap,1000);
});
function init(){
    $banner = $(".banner");
}
function swap(){
    var imgName = "images/" + logos[currentIndex];
    $banner.attr("src", imgName);//? 고정인자 2개를 받는다. 첫번째 : attrName, 두번째 attrValue
    currentIndex ++;
    reset(); //? 무한반복 = length == currentIndex -> 0;
}
function reset(){
    if(currentIndex == logos.length){
        currentIndex = 0;
    }
}