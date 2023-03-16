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
// *case. 1 현재 시각이 오후인가 오전인가
function amORpm(){ //? 현재시간 불러오는거?... -> 전역함수 Date();를 찾을 수 있다.
    var date = new Date();
    var hour = date.getHours();
    console.log(hour);
    if(hour < 12){
        alert('오전!');
    }else if(hour >= 12){
        alert('오후!');
    }else{
        alert('올바른 값을 입력하세요.');
    }
}
// *case. 2 현재가 말일이냐? 아니냐?
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day < 30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}
// todo. 현재 시각이 자신의 식사시간중 아침? 점심? 저녁? 먹을 시간인지 경고창으로 알려주는 함수.
function mealTime(){
    var date = new Date(); // ? Date() 가져오기
    var hour = date.getHours(); // ? 현재 시각 빼오기
    // ? 조건처리 - 3번에 걸쳐서 아침 / 점심 / 저녁 - > alert("xx 먹을 시간!");
    if(hour < 11){
        alert('아침먹을시간!');
    }else if(hour < 15){
        alert('점심먹을시간!');
    }else{
        alert('저녁먹을시간!');
    }
}
// *case. 3 양,음수 판별
function numbJudgment(){
    var numb = prompt('숫자를입력하세요','양수음수상관없음');
    console.log(typeof(numb) + '=' + numb);

    if(numb > 0){ 
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('0입니다.');
    }
}
// todo. 짝수,홀수 판별
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요.','홀,짝을 구분해드립니다.');
    if(numb%2 == 0){ // ? 1. 짝수를 판별 - 나머지 -> 0(짝수), 1(홀수)
        alert('짝수!');
    }else if(numb%2 == 1){ // ? 2. 그것이 아닐 경우 홀수를 판별
        alert('홀수!');
    }else{// ? 3. 그마저도 아닐 경우 '올바른 값을 입력하세요.'
        alert('올바른 값을 입력하세요.');    
    }
}
// *case. 4 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = prompt('점수를 입력하세요.');
    var englishScore = prompt('점수를 입력하세요.');
    var mathScore = prompt('점수를 입력하세요.');
    var avg = (Number(koreanScore)+Number(englishScore)+Number(mathScore)) / 3; //? 평균구하는식

    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라.');
    }else if(avg >= 90){
        alert('평균' + avg + '점, 수 입니다.');
    }else if(avg >= 80){
        alert('평균' + avg + '점, 우 입니다.');
    }else if(avg >= 70){
        alert('평균' + avg + '점, 미 입니다.');
    }else if(avg >= 60){
        alert('평균' + avg + '점, 양 입니다.');
    }else{
        alert('평균' + avg + '점, 가 입니다.');
    }
}

// *case. 5 사용자 id를 입력받아 맞다면 승인 메시지 출력.
function userIDCheck(){
    var userID = window.prompt('사용자의 아이디');
    if(userID=="Mark"){
        alert('접속승인!');
    }else if(userID != "Mark"){
        alert("잘못된 ID입니다.");
    }
}
// *case. 6 사용자 id "Mark" 와 password "1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    var userID = window.prompt("사용자의 아이디");
    var userPW = window.prompt("사용자의 패스워드");
    if(userID=="Mark" && userPW=="1234"){
        alert("Mark 님으로 확인되었습니다.");
    }else{
        alert("ID 혹은 Password가 틀렸습니다.");
    }
}