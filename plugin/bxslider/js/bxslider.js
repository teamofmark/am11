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
        pagerType: 'full', //? default: full(circle). short: count로 변경.
        //? pagerShortSeparator: '|', type = short. 식별자 변경.
        // pagerSelector: '.newPager',
        pagerCustom: '.customPager', //? default: null. pager 구조직접 작성 및 data-slide-index attr 이용 targeting

        // *controler
        controls: false, //?default: true. controlButton 켜기 끄기.
        //? nextSelector: '.btn_next', next 대상 지정
        //? prevSelector: '.btn_prev', prev 대상 지정
        //? nextText: '다음', 대상 내부 text 변경
        //? prevText: '이전', 대상 내부 text 변경
        // ! img 변경시 contorls.png file 수정을 통해 변경가능. attr: background-position 조절.

        // *auto
        auto: true, //? default: false. slide 자동전환 켜기.
        autoHover: true, //? default: false. onMouseOver 상태일 때 자동전환 중지.
        pause: 4000, //? default: 4000(m/s). 자동전환시 멈추는 시간.
        autoStart: true, //? default: true. 화면준비가 완료되면 바로 자동전환 시작.
        autoDelay: 1500, //? default: 0(m/s). 자동시작전 지연시간 설정.
        autoControls: true, //? default: false. 시각장애인 배려.(auto 키고끄기 수동지원)
        //? autoControlsSelector: '.autoControls' default: null. 공간 생성. 뼈대 제공.
        //? startText: '시작', //? default: 'Start'. text 변경.
        //? stopText: '중지', //? default: 'Stop'. text 변경.
        autoControlsCombine: true, //? default: false. play > pause, pause > play toggle.

        //! carousel
        minSlides: 1, //? default: 1. 최소 노출 슬라이드 장수.
        maxSlides: 3, //? default: 1. 최대 노출 슬라이드 장수.
        slideWidth: 600, //? default: 0. 슬라이드 너비.
        //? shrinkItems: default: false. max/min 기준으로 viewport에 맞게 img를 축소.
        //? moveSlides: 2 default: 0. 전환시 이동할 슬라이드 장수.
        //? slideMargin: 100  slide간 간격 설정.(다수의 slide(carousel)를 사용시에 설정필요.)
    
     //! Accessibility 비사용 - 기본 접근성 보완 사항 준수시.
        /*
            ! Callbacks. - 기본 제공 기능 외  detail한 customize가 필요할 때 사용 하면 됨.
            ! onSliderLoad - slider load 완료 후 실행 할 로직.
            ! onSliderResize - slider size가 조정 된 직후 실행.
            ! onSlideNext - slide가 전환 되기 직전 실행.
            ! onSlidePrev - slide가 전환 된 직후 실행.
            ! onSlideBefore - slide가 전환되기 전 실행.
            ! onSlideAfter - slide가 전환된 후 실행.
            ! onAutoChange - 자동전환이 시작 / 중지 된 직후 실행.
        */
       
        // *Public methods.
        // ? goToslide : 특정 index 슬라이드로 전환.
        // ? goToNextSlide : '다음' 슬라이드로 전환. (ex> wheelScroll에 반응하여 다음,이전 작동..)
        // ? goToPrevSlide : '이전' 슬라이드로 전환. 
        // ! startAuto, stopAuto: 기존 auto로 충분히 대체가 가능.
        // ? getCurrentSlide : 현재 슬라이드 찾기(반환).
        // ? getSlideCount : 슬라이드.length 찾기(반환).
        // ? redrawSlider : slider . show / hide or display none / block 등의 숨김해제 이후 재생성 할때.
        // ? reloadSlider : slider를 다시 불러오기. jquery mediaQuery. (ex> 장치변환시 slider 다시부르기.)
        // ? destroySlider : slider 없애기. (slider 구조도 사라짐.) 
    });
});