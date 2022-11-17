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
// * case. 1 현재시간이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // ? 변수 선언부

    if(hour < 12){
        alert("오전입니다.");
    }
    if(hour >= 12){
        alert("오후입니다.");
    }
}
// *case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day<30){ //? 어떠한 조건을 잡을 것인가? 30일보다 작은 상황? 30일과 같거나 큰 상황?
        alert('아직 말일이 아니다.');
    }else{
        alert('말일입니다.');
    }
}
// *case.3 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 11){
        alert('아침먹을시간');
    }else if(hour < 15){
        alert('점심먹을시간');
    }else{
        alert('저녁먹을시간');
    }
}
// *case.4 숫자판별 (양,음수,0)
function numbJudgment(){
    var numb = Number(prompt('숫자를 입력하세요','양수음수상관없음'));
    // console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('0 혹은 잘못된 입력값입니다.');
    }
}
// todo. 홀수와 짝수를 판별하는 조건문작성
function oddOrEven(){
    var numb = Number(prompt('숫자를 입력하세요','홀,짝을 구분해드립니다.'));
    // todo. 1. 선행조건은 어떤것으로?(ex> 짝수? 2 -> 나머지0) 2. 그외 조건(ex> 홀수 2-> 나머지 1) 3.예외처리.(ex>올바른값을넣어라.)
    if(numb%2 == 0){
        alert('짝수!');
    }else if(numb%2 == 1){
        alert('홀수!');
    }else{
        alert('올바른값을 입력하세요.');
    }
}
// *case. 5 다음 세과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오');
    var englishScore = prompt('영어점수를 입력하시오');
    var mathScore = prompt('수학점수를 입력하시오');
    var avg = (Number(koreanScore)+Number(englishScore)+Number(mathScore)) / 3;
    if(avg > 100 || avg < 0){
        alert('점수똑바로입력하라.');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다. 특급이다야');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다. 우수하구만');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다. 아름답구만');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다. 망했는데?');
    }else if(avg < 60){
        alert('평균' + avg + '점 \n' + '가 입니다. 맞겠다야');
    }else{
        alert('숫자를 입력해야지?');
    }
}

// *case. 6 사용자 id를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = prompt('사용자의 아이디');
    if(userID == 'Mark'){
        alert('접속승인!');
    }else{
        alert('잘못된 ID입니다.');
    }
}
// *case. 7 사용자 id "Mark"와 password "1234"가 맞을 경우 승인 메시지 출력.
function userInfoCheck(){
    var userID = window.prompt('사용자의 아이디?');
    var userPW = window.prompt("사용자의 패스워드?");
    if(userID == "Mark" && userPW == "1234"){
        alert("Mark님으로 확인되었습니다.");
    }else{
        alert("ID 혹은 Password가 틀렸습니다.");
    }
}
// ! 간소화
function userInfoCheck1(){
    var userID = window.prompt('사용자의 아이디?');
    var userPW = window.prompt("사용자의 패스워드?");
    (userID == "Mark" && userPW == "1234")? alert("Mark님으로 확인되었습니다.") : alert("ID 혹은 Password가 틀렸습니다.");
    // * 조건식 ? (참실행):(거짓실행);
}
// todo. 사용자 id "Mark"와 password "1234"의 정보가 틀릴경우 틀린정보에대한 오류 메시지 출력.
function userInfoCheck2(){
    var userID = window.prompt('사용자의 아이디?');
    var userPW = window.prompt("사용자의 패스워드?");
    // todo. 선행조건 - 승인 or 거부(2개case..)
    // todo. 1차부 - ID가 틀렸습니다.
    // todo. 2차부 - password가 틀렸습니다.
}