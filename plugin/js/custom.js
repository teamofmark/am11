$(document).ready(function(){
    $('.slider').bxSlider({
        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타나고)
        speed: 750, //? default : 500. 전환속도 제어
        ticker: false, //? default :  false. slider를 controler통하지 않은 상태로 흘러가기. speed,mode 영향받음.
        tickerHover: false,//? default : false. ticker 상태일 때 onMouseOver로 중지시키기.
    
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
    });
});