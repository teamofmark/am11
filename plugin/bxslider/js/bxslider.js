/*
    ? PLUGIN(동적구현에 목적) -> API(가져와 쓰는것에 목적)
    * SLIDER를 내가 만들지 않아도 쓸 수 있는 것[PLUGIN]
    * 우편번호를 내가다 조사하지 않아도 쓸 수 있는 것[API]
    
    ! PLUGIN 왜 사용하는가?
    * SLIDER를 만든다 > SLIDER/Q 수준에 따라 난이도가 다르고 제작시간이다름.
    * 이미 만들어져 있는 SLIDER가 있다. -> 편하게 가져다 쓸 수 있다.
    * 초급개발자 - 만들 수 없으니까 사용 / 고급개발자 - 작업시간을 확보할수있으니까
    
    ! PLUGIN 자체를 너무 과도하게 사용할 경우.
    * A PLUGIN (SLIDER) / B PLUGIN (GALLERY) -> 제작자가 다름.
    * CODE FLOW 역시 다름.
    * A PLUGIN - OBJ(객체) / B PLUGIN - FUNC(함수) -> 충돌발생.
    * JS - 특정부분에서 충돌 및 ERROR가 발생되면 그 이하 나머지 부분도 실행불가.
    * 충돌부를 분해해서 해결해야함. -> 초급개발자는 불가능. 고급개발자도 그런상황이면 사용안함. 
*/

$(document).ready(function(){
    $(".slider").bxSlider({
        // !general
        mode: 'horizontal', //? default : horizontal(수평전환), vertical(수직전환), fade(in-out)
        speed: 750, //? default : 500. 전환속도제어
        ticker: false, //? default : false. slider controler를 통하지 않고 흘러가는 상태로.
        tickerHover: false, //? default : false. ticker 상태일 때 mouse Over event로 중지.
    
        // *startSlide, randomStart 충돌.
        startSlide: 0,  //? default : 0. 시작시에 노출될 slide index 설정.
        randomStart: false, //? default : false. slide 순서를 random으로 전환.
        // * +@ : admin 'random으로 slide 시작' : togglebutton -> randomStart를 조작가능.
        // ! if randomStart : true -> startSlide delete.

        // *infiniteLoop, hideControlOnEnd 충돌.
        infiniteLoop: true, //? default: true. slide간 전환 무한반복.
        hideControlOnEnd: false, //? default: false. 0번 slide일 경우 prevBtn 삭제. 마지막(4)slide 일 경우 nextBtn 삭제.

        // *adaptiveHeight
        adaptiveHeight: true, //? default: false. slide내 img의 높이에 따라 frame 높이변환.
        adaptiveHeightSpeed: 750, //? default: 500. adaptiveHeight가 적용되는 시간.

        easing: 'ease-in-out', //? default: null. slide전환 가속도. CSS timing-function option 사용가능. 
        captions: true, //? default : false. img에 title Attr을 img 위에 띄워주기.
        video: true //! default: false. video 미사용시 절대 활성화 하지 말것.
        //! video option 활성화. fitVids.js를 연결하면(iframe, video) width,height 자동설정.
    });
});