$(document).ready(function(){
    $('.slider').bxSlider({
        // !work method
        mode: 'horizontal', // 'horizontal' : 좌,우 'vertical' : 상,하 'fade' : fade in, out
        speed: 500, // m/s ex > 1000 = 1s
        easing : 'ease-in-out', // 동작 가속도 css와 동일
        startSlide : 0,  //시작시 로드될 이미지 (0부터시작)
        randomStart : false, // 시작시 랜덤으로 이미지 로드 여부 (boolean)
        preloadImages : 'visible', // "visible"은 보여질때 이미지를 로드, "all"로 설정하면 이미지가 모드 로드되야 작동.
        adaptiveHeight : true, //각 이미지의 높이에 따라 슬라이더 높이의 유동적 조절 여부
        adaptiveHeightSpeed : 500, //adaptiveHeight 동작속도
        video : true, //slide에 video 사용여부, 사용할 시에 plugins/jquery.fitvids.js include 필요
        captions : true,  // img 태그에 title 속성값을 사용할시, 그부분의 출력여부 단, css .bx-wrapper .bx-caption 부분 조절 필요
        mouseDrag : false, // mouseClickDrag 키고 끄기.
        
        // !responsive Key
        responsive : true, //반응형 지원 여부 
        /*
            responsive 가 false일 경우, slider에 고정폭과 고정높이가 필요하다.
            위치는 jquery.bxslider.css 17번라인 .bx-wrapper class에 width 고정
            height는 이미지 높이에 따라 자동 조정.

            pc 만 지원하는 반응형일 경우
            같은 class인 .bx-wrapper 에게 min-width를 1000px을 지정 하면 된다.
        */
        touchEnabled : true, //터치스와이프 기능 사용여부
        swipeThreshold : 50, //터치하여 스와이프 할때 변환 효과에 소모되는 시간 설정
        oneToOneTouch : true, // fade 효과가 아닌 슬라이드는 손가락의 접지상태에 따라 슬라이드를 움직일수있다.
        preventDefaultSwipeX: true, // onoToOneTouch 에서 true일 경우, 손가락을따라 x축으로 움직일지에 대한 여부
        preventDefaultSwipeY: false, // onoToOneTouch 에서 true일 경우, 손가락을따라 y축으로 움직일지에 대한 여부
    
        // !control Key
        controls: true, // 좌,우 컨트롤 버튼 출력 여부
        nextSelector : '.next',
        prevSelector : '.prev',
        // nextText : '다음',
        // prevText : '이전'
    });
});