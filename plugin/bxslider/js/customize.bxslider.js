$(document).ready(function(){
    $(".bxslider").bxSlider({
        // ! general
        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고)
        speed: 750, //? default : 500. 전환속도 제어
        ticker: false, //? default :  false. slider를 controler통하지 않은 상태로 흘러가기. speed,mode 영향받음.
        tickerHover: false, //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.

        // * startSlide, randomStart 충돌.
        startSlide: 0, //? default: 0. 시작시에 우선 노출될 slide index 설정.
        randomStart: false, //? default: false. slide 노출 순서를 random으로 전환.
    
        // * infiniteLoop, hideControlOnEnd 충돌.
        infiniteLoop: true, //? default : true. slide간 전환 무한반복.
        hideControlOnEnd: false, //? default : false. 0번 slide = prevBtn 삭제. last slide = nextBtn 삭제.

        // * adaptiveHeight
        adaptiveHeight: true, //? default : false. slide img 높이에 따라 frame 자체가 유동적으로 변함.
        adaptiveHeightSpeed: 750, //? default : 500. adaptiveHeight 작동속도.
        
    });
});