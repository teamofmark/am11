/*
    ? 조건문
    * : 판별식. 분기문.

    * 실무사용의 예
    * sign in 후 id,password가 server에 저장된 정보와 같은지 비교후 승인 및 거부.
    * 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부 판별.
    * 삭제작업 등의 수행시 사용자가 Y를 눌렀을 때, N를 눌렀을 때 에 따라 수행여부 결정.
    * slider 같은 ui component의 좌, 우 방향(controler) 최대치에 도달 하였는지 판별.
*/

// *case.1 현재시각이 오후인가 오전인가.
//? (11:59:59초 = 오전 / 12:00 = 오후. 00:00 = 오전)
//? 시간(현재)을 불러올줄 알아야.. -> js time mdn...
function amORpm(){
    var date = new Date(); //? 연,월,일,시,분,초....
    var hour = date.getHours(); //? 호출되는 순간의 시간정보를 담는다 > hour.
    // ? 변수선언부

    if(hour < 12){
        //? 출력부
        alert('오전입니다.');
    }
    if(hour >= 12){
        //? 출력부
        alert('오후입니다.');
    }
    // ? 처리부
}

// *case.2 말일인지 아닌지
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day < 30){
        alert('아직 말일 아님.');
    }else{
        alert('말일!');
    }
}

// todo. 현재시각이 자신의 식사시간중 아침 / 점심 / 저녁 먹을 시간인지 판별하는 조건문.
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){
        alert('아침먹어라');
    }else if(hour < 15){
        alert('점심먹어라');
    }else{
        alert('저녁먹어라');
    }
}