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