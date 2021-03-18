/*
   * 조건문
   * 
   * 실무사용의 예
   * 1. 로그인 후 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
   * 2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
   * 3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
   * 4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
   * 5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.
*
	*if(273 < 100){
	*	표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
	*	 alert('273<100=>true');
	*}
	*alert('종료');
    
*/

// *case.1 현재시각이 오후인가 오전인가.
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // ? 변수 선언부

    if(hour < 12){
        alert('오전!');
    }
    if(hour >= 12){
        alert('오후!');
    }
}
// todo. 말일인가? 아닌가? ( 30 보다 작으면 말일이 아님, 30보다 크거나 같으면 말일! 이라고 띄우기)
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ? 변수선언부
    if(day < 30){
        alert('말일아님');
    }else{
        alert('말일');
    }
}

// *case.2 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){
        alert('아침먹어');
    }else if(hour < 15){
        alert('점심먹어');
    }else{
        alert('저녁먹어');
    }
}

// *case.3 숫자판별
function numbJudgment(){
    var numb = prompt('숫자를 입력','양,음수상관없음');
    
    if(numb > 0){
        alert('양수!');
    }else if(numb < 0){
        alert('음수!');
    }else{
        alert('0이거나 잘못된값을 입력하였습니다.');
    }
}

// todo. 숫자를 입력받고 홀수인지 짝수인지 판별하는 조건문
function oddOrEven(){
    var numb = prompt('숫자입력','홀,수구분');
    // ?선언 및 입력부
    if(numb%2 == 0){
        alert('짝수!');
    }else{
        alert('홀수!');
    }
    // ?조건처리 및 출력부
}

// todo. 국어, 영어, 수학 점수를 입력받고 평균을 구한 후 
// todo. 수(100~90),우(90~80),미(80~70),양(70~60),가(59~)로 출력해라.
function avgScore(){
    
    // ?선언 및 입력부

    // ?조건처리 및 출력부
}

// *case.4 사용자 id(Mark)를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = window.prompt("사용자의 아이디를 입력하세요");
    if(userID == "Mark"){
        alert('접속을 승인합니다.');
    }else{
        alert('잘못된 ID입니다.');
    }
}