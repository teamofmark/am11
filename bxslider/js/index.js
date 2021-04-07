$(document).ready(function(){
    $('.slider').bxSlider({
        mode : 'horizontal',
        speed : 500,
        startSlide: 0,
        randomStart : false,
        infiniteLoop : false,
        hideControlOnEnd : true,
        easing: 'ease-in-out',
        captions: true,
        ticker: false,
        tickerHover: false,
        adaptiveHeight: true,
        video: true,
        pager: true,
        // pagerType: 'short',
        // pagerShortSeparator : '번 이미지'
        // pagerSelector: '.pagerCustom', 
        pagerCustom : '.pagerCustom'
    });
});