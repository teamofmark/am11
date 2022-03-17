/*
    ? 조건문

    ? 실무사용의 예
    * login 시 id와 password가 server에 저장된 정보와 같은지 비교 후 같다면 승인. 아니라면 오류메시지.
    * game에서 자신이 공격을 했을 때  상대방을 타격 했는지 여부 판별.
    * 경품추첨시 사용자가 뽑은 번호에 따른 경품 당첨 여부를 판별.
    * 삭제작업 수행시 사용자가 Y/N를 눌렀을 때 각각 수행여부를 판별.

    if(condition){
        logic....
    }
*/
// *case.1 현재시각이 오후인가 오전인가 ()
function amORpm(){
    var date = new Date(); //? YYYY,MM,DD,HH,MM,SS............
    var hour = date.getHours();
    // ? 변수 선언부

    if(hour < 12){
        alert('오전입니다.');
        // ? 출력부
    }
    if(hour >= 12){
        alert('오후입니다.');
        // ? 출력부
    }
    // ? 조건 처리부
}
// *case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ? 변수 선언부

    if(day < 30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}

// *case.3 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){ //? 11시보다 현시각이 작으면 아침
        alert('아침먹을시간');
    }else if(hour < 15){ //? 그것이 아니고 15시 보다 현시각이 작으면 점심
        alert('점심먹을시간');
    }else{ //? 그마저도 아닐 시 저녁.
        alert('저녁먹을시간');
    }

}