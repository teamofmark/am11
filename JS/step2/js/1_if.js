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
// *case.3 숫자 판별
function numbJudgment(){
    var numb = prompt('숫자입력하세요','양,음수 상관없음');
    // numb = Number(numb);
    console.log(typeof(numb) + '=' + numb);

    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('0이거나 잘못된 입력값입니다.');
    }

}
// *case.4 홀,짝 판별
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요', '홀,수를 구분합니다.');

    if(numb%2 == 0){
        alert('짝수입니다.');
    }else{
        alert('홀수입니다.');
    }
}
// *case.5 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오');
    var englishScore = prompt('영어점수를 입력하시오');
    var mathScore = prompt('수학점수를 입력하시오');
    var avg = (Number(koreanScore)+Number(englishScore)+Number(mathScore)) / 3;

    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라.');
    } else if (avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다.');
    } else if (avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다.');
    } else if (avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다.');
    } else if (avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다.');
    } else {
        alert('평균' + avg + '점 \n' + '가 입니다.');
    }
}

// *case.6 사용자의 id를 입력받아 맞다면 승인 메시지 출력.
// ? submit > server 요청. (니가 가진 DB 안에 입력된 value가 있니?)
// ? server > 응 있다. => password대조. // 아니 없다. => 경고(error)창 출력;
function userIDCheck(){
    var userID = prompt('사용자의 아이디');
    if(userID == "Mark"){
        alert("접속승인");
        // ? 요소 불러오기( mypage 권한관련정보들. ex> 탈퇴, 정보수정...)
    }else{
        alert('잘못된 ID입니다.');
        // ? 잘못된 횟수 count. 특정 count 넘어갈 시 점검(ex. 비행기사진을 고르세요..) > 차단...
    }
}
// *case.7 사용자 id "Mark"와 password "1234"를 입력받고 둘다 맞을 경우에만 접속승인.
function userInfoCheck(){
    var userID = prompt('사용자의 아이디');
    var userPW = prompt('사용자의 비밀번호');
    if(userID == "Mark" && userPW == "1234"){
        alert("Mark님으로 확인되었습니다.");
    }else if(userID != "Mark" || userPW != "1234"){
        alert("ID 혹은 Password가 틀렸습니다.");
    }
}

// todo. 사용자 id "Mark"와 password "1234"의 정보가 틀릴경우, 틀린 정보에 대한 오류 메시지 출력.
function userInfoCheck2(){
    
}