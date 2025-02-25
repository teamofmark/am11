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
// case.1 현재 시간이 오후인가 오전인가
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // console.log(hour);
    if(hour<12){
        alert('오전입니다.');
    }
    if(hour>=12){
        alert('오후입니다.');
    }
}

// case.2 말일인가? 아닌가?
function lastDay(){
    var date = new Date();
    var day= date.getDate();
    // console.log(day);
    if(day<30){
        alert('아직 말일이 아님.');
    }else if(day>=30){
        alert("말일임.");
    }else{
        alert("올바른 값을 입력 하시오");
    }
}

function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    dt = new Date();
    console.log(endOfMonth(dt).toString());
}
// todo. 현재 시각이 본인 기준으로 아침? 점심? 저녁? 을 먹을 시간인지 판별하는 조건문.
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
// case.3 양,음수 판별
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요.','양,음수를 판단합니다.');
    // console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수!');
    }else if(numb < 0){
        alert('음수!');
    }else {
        alert('0이거나 올바른 값이 아닙니다.');
    }
}
// todo. 홀,짝수 판별
function oddOrEven(){
    var numb = parseInt(prompt('숫자를 입력하세요.','홀,짝을 구분합니다.'));
    // numb = parseInt(numb);
    // 입력된 숫자를 홀수인지 짝수인지 올바른 값을 입력해야하는지 알려주는 조건문
    // 짝수의 절대조건 - 짝수의 최소수인 2로 나눈 나머지가 0이 되었을때(없을 때)
    // 홀수의 절대조건 - 짝수의 최소수인 2로 나눈 나머지가 1이 되었을때(있을 때)
    if(numb%2==0){
        alert('짝수!');
    }else if(numb%2==1){
        alert('홀수!');
    }else{
        alert('올바른 값을 입력하세요.');
    }
}
// case.4 사용자의 id를 입력받아 맞다면 승인 메시지 출력
function userIDCheck(){
    /*
    const axios = require('idName');
    axios.get('/user?ID=Mark')
        .then(function (response){
            // 성공 구문
            console.log(response);
        })
        .catch(function (error){
            // 오류 구문
            console.log(error);
        })
        .finally(function(){
            // 상시 구문
            console.log('running');
        });
    */
    var userID = prompt('사용자의 아이디를 입력하세요.');
    if(userID=="Mark"){
        alert('접속을 승인합니다.');
    }else{
        alert('잘못된 ID입니다.');
    }
}
// todo. 사용자 id "mark"와 password "1234"를 입력받고(prompt) 둘 다 맞을 경우에만 승인메시지 출력("Mark님으로 확인 되었습니다.")
// 오류 : "id 혹은 password가 틀렸습니다." 메시지 출력.
function userInfoCheck1(){
    var userID = prompt('사용자의 아이디');
    var userPW = prompt('사용자의 패스워드');
    /*
    if(userID =="Mark" && userPW=="1234"){
        alert("Mark님으로 확인되었습니다.");
    }else{
        alert("ID 혹은 Password가 틀렸습니다.");
    }
    */
   (userID =="Mark" && userPW=="1234")?alert("Mark님으로 확인되었습니다."):alert("ID 혹은 Password가 틀렸습니다.");
}
// todo. 사용자 id "mark"와 password "1234"를 입력받고(prompt) 둘 다 맞을 경우에만 승인메시지 출력("Mark님으로 확인 되었습니다.")
// 오류 : 1.  "모든 정보가 맞지 않습니다."
// 오류 : 2.  "ID가 존재하지 않습니다."
// 오류 : 3. "password가 틀렸습니다."
function userInfoCheck2(){
    var userID = prompt('사용자의 아이디');
    var userPW = prompt('사용자의 패스워드');
    if(userID =="Mark" && userPW=="1234"){
        alert("Mark님으로 확인되었습니다.");
    }else if(userID != "Mark" && userPW!="1234"){
        alert("모든 정보가 맞지 않습니다.");
    }else if(userID!="Mark"){
        alert("ID가 존재하지 않습니다.");
    }else if(userPW!="1234"){
        alert("password가 틀렸습니다.");
    }
}

// 최종예제. 다음 세 과목의 점수를 입력받고 평균을 구한 뒤 수,우,미,양,가를 점수(소수점두자리까지만)와 함께출력하라.
function avgScore(){
    var koreanScore = prompt("국어점수를 입력하시오.");
    var englishScore = prompt("영어점수를 입력하시오.");
    var mathScore = prompt("수학점수를 입력하시오.");
    // 1. 국어,영어,수학 점수를 차례대로 prompt 로 입력받기.

    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;
    // 2. 입력받은 세 점수의 평균 구하기(prompt로 입력받는다 -> 문자형 -> 숫자형 변환필요)
    
    if(avg > 100 || avg <0){
        alert('점수가 올바르지 않습니다.');
    }else if(avg >= 90){
        alert("평균" + avg.toFixed(2) + '점. 수입니다. 특급!');
    }else if(avg>=80){
        alert("평균" + avg.toFixed(2) + '점. 우입니다. 우수!');
    }else if(avg>=70){
        alert("평균" + avg.toFixed(2) + '점. 미입니다. 괜찮!');
    }else if(avg>=60){
        alert("평균" + avg.toFixed(2) + '점. 양입니다. 망했!');
    }else{
        alert("평균" + avg.toFixed(2) + '점. 가입니다. ...!');
    }
    // 3. 선조건 - 100점이 넘거나 0점보다 작을 때 - 경고창 : '점수가 올바르지 않습니다'
        // 1. 평균이 90이상일경우 "평균 [점수(소수점두자리))] 수 입니다. 특급!"
        // 2. 평균이 80이상일경우 "평균 [점수(소수점두자리))] 우 입니다. 우수!"
        // 3. 평균이 70이상일경우 "평균 [점수(소수점두자리))] 미 입니다. 괜찮!"
        // 4. 평균이 60이상일경우 "평균 [점수(소수점두자리))] 양 입니다. 망했!"
        // 5. 평균이 60미만일경우 "평균 [점수(소수점두자리))] 가 입니다. ...!"
}