$(document).ready(function(){
    $(".slider").bxSlider({
        // !general
        mode: 'horizontal', //? default: horizontal(수평), vertical(수직), fade(사라지고나타나기)
        speed: 750, //? default: 500. 전환속도제어
        ticker: false, //? default: false. slider controler를 통하지 않고 흘러가는 상태로 전환.
        tickerHover: false, //? default: false. ticker 상태일 때 hover event로 중지시키기.
        easing: 'ease-in-out', //? default: null. slide전환 가속도 설정. = timing-function 옵션 모두 사용가능.
        captions: true, //? default: false.
        video: true, //? default: false. video option 활성화. fitvids.js 연결하기.(반응성향상).
        responsive: true, //? default: true. slider 자체 반응형 키고 끄기

        // * startSlide, randomStart 충돌.
        startSlide: 0, //? default: 0. 시작시 노출될 slider index 설정.
        randomStart: false, //? default: false. slide 순서를 random으로 전환.

        // * infiniteLoop, hideControlOnEnd 충돌.
        infiniteLoop: true, //? default: true. slider간 전환 무한반복.
        hideControlOnEnd: false, //? default: false. 0번 slide = prevBtn삭제. lastSlide = nextBtn 삭제.

        // ?adaptiveHeight
        adaptiveHeight: true, //? default: false. slide내 img의 높이에 따라 frame자체가 변함.
        adaptiveHeightSpeed: 750, //? default: 500. frame이 변하는 시간.

        // *pager - indicator
        pager: true, //? default: true. pager 키고 끄기.
        pagerType: 'short' //?default: full(circle). short: count로 변경.
    });
});