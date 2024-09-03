$(function(){
    $(".slider").bxSlider({
        mode: 'horizontal', //? default : horizontal(수평방향전환), vertical(수직방향전환), fade(사라지고나타남)
        speed: 800, //? default: 500. 전환속도제어
        ticker: false, //? default : false. slider를 controler의 통제를 받지 않는 상태로 흘러가게 만들기. speed,mode의 영향 받음.
        tickerHover: false, //? default : false. ticker 상태 일 때 onMouseOver로 중지시키기
    
        // ! startSlide, randomStart 충돌
        startSlide: 0, //? default : 0. 시작시에 우선 노출될 slideIndex 설정.
        randomStart: false, //? default : false. slide 노출 순서를 random으로 전환.
    
        // ! infiniteLoop, hideControlOnEnd 충돌
        infiniteLoop: true, //? default : true. slide간 전환 무한 반복.
        hideControlOnEnd: false, //? default : false. slide(0) = prevBtn 삭제 /slide(Last) = nextBtn 삭제
         
        // *adaptiveHeight
        adaptiveHeight: true, //? default : false. slide content높이에 따라 frame이 적응형으로 변환.
        adaptiveHeightSpeed: 800, //? default : 500. adaptiveHeight 작동속도. 특이사항없으면 speed와 동기화
    
        video: true, //! default : false. video 종횡비활성화(slide에 video가 있을 때만!!)
        
        // 비중요
        easing: 'ease-in-out', // ? default: null. slide간 전환 가속도 설정. css timing-function 사용가능
        responsive: true, //? default: true. slider자체 반응형 켜기
        
        // attr추출
        captions: true, //? default: false. img's에 title attr을 부여하면 그 부분을 image위로 보여준다.
    
        // pager - indicator
        pager: true, //? default: true. pager 켜기/끄기
        pagerType: 'full', //? default: full.(circle). short: count로 변경
        //? pagerShortSeparator: '/'  default: / -> . 식별자변경.
        // pagerSelector: '.newPager' default: ''. 공간 생성 및 class 부여 하면 pager 뼈대제공.
        pagerCustom: '.customPager', //? default: null. pager 구조 직접 작성 및 data-slide-index="i"를 설정하면 원하는 style의 pager 구현가능.

        // controler
        controls: true, //? default: true. control button 켜기 끄기.
        //? nextSelector: '.btn_next',  공간 생성 및 class 부여 하면 controler 다음버튼 뼈대 제공. 
        //? prevSelector: '.btn_prev',  공간 생성 및 class 부여 하면 controler 이전버튼 뼈대 제공.
        //? nextText : '다음',  controler 뼈대 안에 text 변경
        //? prevText : '이전',    
        
        // auto
        auto: true, //? default : false. slide 자동전환 켜기. 
        autoControls: true, //? default : false. auto기능이 켜져있어야 함. 접근성위배인 auto를 완화시킴. auto켜고 끄기
        autoStart: true, //? default : true. 화면준비가 완료되면 바로 자동 시작? 중지시켜 놓을 지 (접근성측면에선 중지상태권장)
        pause: 4000, //? default: 4000(m/s). 자동전환시 멈춰있는 시간.
        autoDelay: 0, //? default: 0(m/s). 자동시작 전 지연시간 설정. (autoStart가 켜져있을때만)
        autoHover: true, //? default: false. onMouseOver상태일 때 자동전환 중지(autoStart가 켜져있을 때)
        stopAutoOnClick: true, //? default: false. button을 클릭 하였을 때 자동 전환 중지
        autoControlsCombine: false, //? default: false. play/pause button -> toggle(1개) or active(2개)
        autoControlsSelector: '.newAutoControls', //? auto 뼈대 제공 받을 곳
        startText: '시작', //? 생성된 뼈대안에 text 변경
        stopText: '중지'
    });
    createCustomPager(".slider");
});
function createCustomPager(target){
    var slideLength = $(target).children("li").length;  // todo. 1 target으로 들어온 .slider의 자손(.children(대상)) li의 갯수를 구하라.
    console.log(slideLength); // todo. 2 정확한 수량이 들어오는지 check.
    for(var i = 0; i < slideLength-2; i++){
        $(".customPager").append("<li><a data-slide-index='"+i+"'><img src='images/wallpaper"+(i+1)+".jpg' alt='slide"+(i+1)+"'></a></li>");
        // todo. 4 .customPager안에 li를 생성(추가)하는 구문을 작성하면 된다.
        // ? <li><a data-slide-index="$"><img src="images/wallpaper$.jpg" alt="slide$"></a></li>
    }// todo. 3 대상의 갯수를 이용하여 반복문을 작성
    $(".customPager li:first-of-type a").addClass("active");
}