$(document).ready(function(){
    $(".exSlider").bxSlider({
        mode: 'horizontal',  //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고)
        speed: 750, //? default : 500. 전환속도 제어
        ticker: false, //? default : false. slider를 controler의 통제를 받지 않는 상태로 흘러가게 만들기. speed,mode의 영향을 받음.
        tickerHover: false, //? default : false. ticker 상태일 때 onMouseOver로 중지시키기.
    
        // *startSlide, randomStart 충돌.
        startSlide: 0, //? default : 0. 시작시에 우선 노출될 slide index 설정.
        randomStart: false, //? default: false. slide 노출 순서를 random으로 전환.

        // *infiniteLoop, hideControlOnEnd 충돌.
        infiniteLoop: true, //? default : true. slide간 전환 무한반복.
        hideControlOnEnd: false, //? default : false. 0번 slide = prevBtn 삭제. last slide = nextBtn 삭제.
    
        // *adaptiveHeight
        adaptiveHeight: true, //? default : false. slide img 높이에 따라 frame 자체가 유동적으로 변함.
        adaptiveHeightSpeed: 750, //? default : 500. adaptiveHeight 작동속도. 특이사항없으면 speed 동기화
        video: true, //? default: false. video 활성화.(slide에 video가 있을 시만) fitvids.js를 연결해두면 iframe,video등의 width,height 자동설정 가능. 
        easing: 'ease-in-out', //? default : null. slide간 전환 가속도 설정. CSS timing-function option 사용가능.
        captions: true, //? default: false. img's에 title attr을 부여하면 그 부분을 이미지 위로 보여준다.
        responsive: true, //! default: true. slider 자체 반응형 켜기.

        // *pager - indicator
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'full', //? default: full.(circle). short: count로 변경
        //? pagerShortSeparator: '/'  default: / -> . 식별자변경.
        //? pagerSelector: '.newPager' default: ''. 공간 생성 및 class 부여 하면 pager 뼈대제공.
        pagerCustom: '.customPager', //? default: null. pager 구조 직접 작성 및 data-slide-index="i"를 설정하면 원하는 style의 pager 구현가능.

        // *controler
        controls: true, //? default: true. control button 켜기 끄기.
        //? nextSelector: '.btn_next', 공간 생성 및 class 부여 하면 controler 다음버튼 뼈대 제공. 
        //? prevSelector: '.btn_prev',  공간 생성 및 class 부여 하면 controler 이전버튼 뼈대 제공.
        //? nextText: '다음',  controler 뼈대 안에 text 변경
        //? prevText: '이전'

        // *auto
        auto: true, //? default: false. slide 자동전환 켜기. false로 설정시 autoControls에서 작동가능.
        autoControls: true, //? default: false. 시각장애인들을 배려 하는것.
        autoControlsSelector: '.newAutoControls', //? auto controler 뼈대 제공.
        startText: '시작', // ?생성된 뼈대 안에 text 변경
        stopText: '중지',
        autoStart: true, //? default: true. (false : autoConrols로 시작)화면 준비가 완료되면 바로 자동전환 시작? 중지?
        autoDelay: 1500, //? default: 0(m/s). 자동시작 전 지연시간 설정. (autoStart가 true일 경우 사용. systemDelay고려)
        pause: 4000, //? default: 4000(m/s). 자동전환시 멈춰있는 시간.
        autoHover: true, //? default: false. onMouseOver상태일 때 자동전환 중지.(autoStart: true일 경우 사용가능).
        stopAutoOnClick: true, //? controler Button을 클릭 하였을 때 자동전환 중지.
        autoControlsCombine: true //? default : false. play/pause toggle.
    });
});