/*
    조건문
    
    실무사용의 예
    1. 로그인 후 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
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
// *case. 1 현재 시각이 오후냐 오전이냐.
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// *case. 2 말일이냐? 아니냐? (윤달음력무시)
function lastDay(){
    var date = new Date();
    var day = date.getDate();

    if(day < 30){
        alert('아직 말일아니야');
    }else{
        alert('말일이야');
    }
}
// *case.3 아침먹을 시간이냐 점심이냐 저녁이냐..
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 10){
        alert('아침먹어');
    }else if(hour < 16){
        alert('점심먹어');
    }else{
        alert('저녁먹어');
    } 
}
// todo.1 prompt로 임의의 숫자를 입력받아 양수인지 음수인지 판단해주는 함수를 만들어보자.
function numbJudgment(){
    
}