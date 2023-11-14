/*
    조건문
    
    실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	if(273 < 100){
		//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
		 alert('273<100=>true');
	}
	alert('종료');
    
*/
// *case. 1 현재시각이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // console.log(hour);

    if(hour < 12){
        alert('오전이야.');
    }
    // ! 위,아래의 조건은 연결되어있지 않음.
    if(hour >= 12){
        alert('오후야');
    }
}
// *case.2 말일이냐 아니냐
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // console.log(day);
    if(day<30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일 입니다.');
    }
}
// todo. 아침먹을? 점심먹을? 저녁먹을? 시간인지 판별
function mealTime(){
    var date = new Date();// todo. 시간 가져오기
    var hour = date.getHours();

    if(hour < 11){
        alert("아침먹어");
    }
    // todo. 아침먹을시간 alert으로 띄우기
    else if(hour < 15){
        alert("점심먹어");
    }
    // todo. 점심먹을시간 alert으로 띄우기
    else{
        alert("그만먹어");
    }
    // todo. 저녁먹을시간 alert으로 띄우기
}
// *case.3 양,음수 판별
function numbJudgment(){
    var numb = prompt('숫자를입력하세요.',"양,음수상관없음. 숫자만!!!");
    console.log(typeof(numb) + "=" + numb);
    numb = parseFloat(numb);
    console.log(typeof(numb) + "=" + numb);
    if(numb > 0){
        alert("양수.");
    }else if(numb < 0){
        alert("음수.");
    }else{
        alert("0이거나 잘못된 값입니다.");
    }

}
// todo. 위 방식같이 숫자를 입력받고 홀수인지 짝수인지 판별하는 함수 완성하기
function oddOrEven(){
    var numb = prompt('숫자를입력하세요','홀,짝을구분합니다.');
    // ? 짝수의 최소수 - 2 / 2로나눈 나머지가 0 = 짝수, 나머지가 1 = 홀수.
    if(numb%2 == 0){
        alert("짝수여");
    }else if(numb%2 == 1){
        alert("홀수여");
    }else{
        alert("올바른 값을 입력하세요.");
    }
}
// todo. 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    // todo.1 국어,영어,수학 점수를 입력 받을 변수 선언
    var koreanScore = prompt("국어점수를 입력하시오.");
    var englishScore = prompt("영어점수를 입력하시오.");
    var mathScore = prompt("수학점수를 입력하시오.");
    // todo.2 평균을 산출하는 변수(1번의 변수들을 받아다가 처리)
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore))/3;
    // console.log(avg);
    // todo.3 조건문을 작성 - 예외처리(100초과, 0미만 - 점수똑바로입력하라)
    if(avg > 100 || avg < 0){
        alert('점수똑바로입력하라');
    }else if(avg >= 90){
        alert("평균" + avg + "점 \n" + "수 입니다. 특급이구먼");
    }else if(avg >= 80){
        alert("평균" + avg + "점 \n" + "우 입니다. 우수하구먼");
    }else if(avg >= 70){
        alert("평균" + avg + "점 \n" + "미 입니다. 괜찮구먼");
    }else if(avg >= 60){
        alert("평균" + avg + "점 \n" + "양 입니다. 망했구먼");
    }else{
        alert("평균" + avg + "점 \n" + "가 입니다. 맞겠구먼");
    }
    // todo.4 조건문을 작성 - 90~ 수, 80~우, 70~미, 60~양, 외 나머지 가 를 alert으로 출력.
}
// *case. 4 사용자 id - Mark 를 입력받아 맞다면 승인 메시지출력.
function userIDCheck(){
    var userID = window.prompt("사용자의 아이디");
    if(userID == "Mark"){
        alert("접속을 승인합니다.");
    }else if(userID!="Mark"){
        alert("잘못된 ID입니다.");
    }
}
// *case. 5 사용자 id "mark"와 password "1234"를 입력받고 둘 다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    
}