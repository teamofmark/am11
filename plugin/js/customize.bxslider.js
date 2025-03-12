$(document).ready(function(){
    $(".slider").bxSlider({
        mode: 'horizontal',

        // pager
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'full', //? default: full-circle, short-count
        // pagerSelector: '.newPager' default: ''. 공간 생성 및 class 부여 하면 pager 뼈대제공.
        pagerCustom: '.customPager'
    });
    createCustomPager('.slider');
});
function createCustomPager(target){
    var slideLength = $(target).children("li").length;
    console.log(slideLength);
    for(var i = 0; i < slideLength - 2; i++){
        $(".customPager").append("<li><a data-slide-index='"+i+"'><img src='images/wallpaper"+(i+1)+".jpg' alt='slide"+(i+1)+"'></a></li>");
    }
    $(".customPager li:first-of-type a").addClass("active");
}