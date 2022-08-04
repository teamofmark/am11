$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고)
        speed: 750, //? default : 500. 전환속도 제어
        ticker: false, //? default :  false. slider를 controler통하지 않은 상태로 흘러가기. speed,mode 영향받음.
        tickerHover: false,//? default : false. ticker 상태일 때 onMouseOver로 중지시키기.
        infiniteLoop: true,

        // *pager - indicator
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'full', //? default: full.(circle). short: count로 변경
        //? pagerShortSeparator: ' - ' default: / -> . 식별자변경.
        //? pagerSelector: '.newPager', default: ''. 공간 생성 및 class 부여 하면 pager 뼈대제공.
        pagerCustom: '.customPager', //? default: null. pager 구조 직접 작성 및 data-slide-index="i"를 설정하면 원하는 style의 pager 구현가능.
    
        // *controler
        controls: true, //? default: true. control button 켜기 끄기.
        //? nextSelector: '.btn_next',
        //? prevSelector: '.btn_prev',
        //? nextText: '>',
        //? prevText: '<'

        // *auto
        auto: true, //? default: false. slide 자동전환 켜기. false로 설정시 autoControls에서 작동가능.
        autoControls: true, //? default: false. 시각장애인들을 배려 하는것.
        autoControlsCombine: false, //? default : false. play/pause toggle.
        autoStart: true, //? default: true. (false : autoConrols로 시작)화면 준비가 완료되면 바로 자동전환 시작? 중지?
        pause: 4000, //? default: 4000(m/s). 자동전환시 멈춰있는 시간.
        autoDelay: 1500, //? default: 0(m/s). 자동시작 전 지연시간 설정. (autoStart가 true일 경우 사용. systemDelay고려)
        autoHover: true, //? default: false. onMouseOver상태일 때 자동전환 중지.(autoStart: true일 경우 사용가능).
        stopAutoOnClick: true, //? controler Button을 클릭 하였을 때 자동전환 중지.
        //? autoControlsSelector: '.newAutoControls', default: null. 공간 생성 및 class 부여 하면 autoControl 뼈대제공.
        //? startText: '시작', 생성된 뼈대 안에 text 변경
        //? stopText: '중지'
    });
});