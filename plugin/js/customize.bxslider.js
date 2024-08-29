$(function(){
    $(".slider").bxSlider({
        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타남)
        speed: 8000, //? default: 500. 전환속도제어
        ticker: false, //? default : false. slider를 controler의 통제를 받지 않는 상태로 흘러가게 만들기. speed,mode의 영향 받음.
        tickerHover: false, //? default : false. ticker 상태 일 때 onMouseOver로 중지시키기
    
        // ! startSlide, randomStart 충돌
        startSlide: 0, //? default : 0. 시작시에 우선 노출될 slideIndex 설정.
        randomStart: false, //? default : false. slide 노출 순서를 random으로 전환.
    
        // ! infiniteLoop, hideControlOnEnd 충돌
    });
});