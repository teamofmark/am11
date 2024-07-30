/*
    조건문 (집합과명제)
    
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
// case.1 현재시각이 오후인가 오전인가?
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // var hour = prompt("시간을 입력하세요");
    console.log(hour);
    if(hour < 12){// 조건문
        alert('오전입니다.');// 오전입니다.
    }else{
        alert('오후입니다.');// 오후입니다.
    }
}
// case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    console.log(day);
    if(day<30){
        alert('아직 말일 아님.');
    }else{
        alert('말일.');
    }
}
function lastDayEx(){
    function endOfMonth(date){
        return new Date(date.getFullYear(), date.getMonth() + 1, 0);
    }
    dt = new Date(); 
        
    console.log(endOfMonth(dt).toString());
}
// todo. 아침?점심?저녁? 먹을시간 알려주기
function mealTime(){
    var date = new Date();
    var hour = date.getHours(); //todo 1. 현재 시간불러오기

    if(hour < 11){// todo. 조건 - 내가 아침먹을 조건
        alert('아침먹을시간');
    }else if(hour < 15){// todo. 조건 - 내가 점심먹을 조건
        alert('점심먹을시간');
    }else{ // todo. 조건 - 내가 저녁먹을 조건
        alert('저녁먹을시간');
    }
}
// case.3 양,음수판별
function numbJudgment(){
    var numb = Number(prompt('숫자를 입력하세요.'));
    console.log(typeof(numb) + '=' + numb);
    if(numb > 0){
        alert("양수입니다!");
    }else if(numb < 0){
        alert("음수입니다!");
    }else{
        alert('0이거나 올바른 값이 아닙니다.');
    }
}
// todo. 홀,짝수 판별
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요. 홀,짝구분');
    // * 짝수의 조건 - 짝수의 최소수로 나눈 나머지가 없을 때. / 홀수의 조건 - 짝수의 최소수로 나눈 나머지가 발생될 때.
    if(numb%2 == 0){
        // todo.1 짝수입니다! 조건
        alert('짝수입니다.');
        
    }else if(numb%2 == 1){
        // todo.2 홀수입니다! 조건
        alert('홀수입니다.');
    }else{
        // todo.3 올바른 값을 입력하세요. 조건
        alert('올바른 값을 입력하세요.');
    }
}
