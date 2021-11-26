/*
    ? DateClass
    * 날짜와 시간에 관련된 것들.
*/
/*
    ? 시, 분, 초, m/s 알아내기.
    * 1. Date인스턴스.getHours():
    * 매개변수 = 없음. 리턴값 = 0 - 23까지 정수.
    * 2. Date인스턴스.getMinutes():
    * 매개변수 = 없음. 리턴값 = 0 - 59까지 정수.
    * 3. Date인스턴스.getSeconds():
    * 매개변수 = 없음. 리턴값 = 0 - 59까지 정수.
    * 4. Date인스턴스.getMilliseconds():
    * 매개변수 = 없음. 리턴값 = 0 - 999까지 정수. 
*/

// *case.1 현재 시간(시,분,초,m/s) 출력
function nowTime(){
    var nowTime = new Date();
    //? Date 객체 우선 생성.
    //! 시간을 구할 때 마다 new Date(); - 생성하는 시점의 시간 정보를 가져옴. = delay가 걸릴 시 오차발생.
    var hour = nowTime.getHours();
    var minutes = nowTime.getMinutes();
    var seconds = nowTime.getSeconds();
    var mSeconds = nowTime.getMilliseconds();

    var whatTime = hour + ":" + minutes + ":" + seconds + ":" + mSeconds;

    console.log(whatTime);
}
/*
    ?년, 월, 일, 요일 알아내기
    * 1. Date인스턴스.getFullYear(): 매개변수 - 없음, 리턴값 = 네자리 숫자 (년도).
    * 2. Date인스턴스.getMonth() : 매개변수 - 없음, 리턴값 = 0(1월) - 11(12월)까지 정수.
    * 3. Date인스턴스.getDate() : 매개변수 - 없음. 리턴값 = 1 - 31까지(날짜) 정수.
    * 4. Date인스턴스.getDay() : 매개변수 - 없음. 리턴값 = 0(일요일) - 6(토요일)까지 정수.
*/
// *case.2 오늘날짜 출력하기.
function nowDay(){
    var nowDay = new Date();
    var year = nowDay.getFullYear();
    var month = nowDay.getMonth() + 1; //? 음력구현시 y - m - d 묶임(음력기준으로).
    var date = nowDay.getDate();
    var day = nowDay.getDay(); //? 정수를 주기 때문에 이를 string으로 변환할 배열 필요.
    var dayList = ['일','월','화','수','목','금','토']; //? 반환정수로 사용할 요일 변환배열.

    console.log(year + '년' + month + '월' + date + '일' + dayList[day] + "요일");
}

// todo. 시계만들기.
var $clock = null;

$(document).ready(function(){
    init();
    clock();
    setInterval(clock, 500);
});
function init(){
    $clock = $("#clock");
}
function clock(){
    var nowTime = new Date();
    var hour = addZero(nowTime.getHours());
    var minutes = addZero(nowTime.getMinutes());
    var seconds = addZero(nowTime.getSeconds());

    var whatTime = hour + " : " + minutes + " : " + seconds;
    //? 기존 - 시,분,초 조합하기.
    //? addZero - return Value 조합하기.

    $clock.text(whatTime);
}
function addZero(numb){
    if(numb < 10){
        numb = "0" + numb;
    }
    return numb; //? 호출부 리턴
}