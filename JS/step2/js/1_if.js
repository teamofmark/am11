/*
    ?조건문
    
    *실무사용의 예
    1. 로그인 시 아이디와 패스워드가 서버에 저장된 정보와 같은지 비교 후 같다면 승인, 아니라면 오류메세지를 띄운다.
    2. 게임같은 경우 자신이 공격을 했을 때 상대방을 타격 했는지 여부를 판별 할 수 있다.
    3. 경품추첨시 유저가 뽑은 번호에 따라 경품 당첨 여부를 따질 수 있다.
    4. 삭제작업 수행시 사용자가 yes를 눌렀을 때와 no 를 눌렀을 때 수행할지 말지를 결정 할 수있다.
    5. slide 같은 ui component 의 좌, 우 방향으로 최대치로 이동 하였는지 판별 할 수있다.

	* if(273 < 100){
	* 	//표현식 "273 < 100" 이 참일때 실행 = 거짓이기때문에 당연히 실행안함.
	* 	 alert('273<100=>true');
	* }
	* alert('종료');
    
*/
// *case. 1 현재 시간이 오후인가 오전인가.
function amORpm(){
    var date = new Date();
    var hour = date.getHours();
    // 변수선언

    // 조건문
    if(hour < 12){
        alert('오전입니다.');
    }
    if(hour >= 12){
        alert('오후입니다.');
    }
}
// *case. 2 현재 날짜가 말일인가 아닌가.
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ? 변수선언

    if(day < 30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
    // ? 조건문
}
// todo. 현재 시각이 아침 / 점심 / 저녁 먹을 시간인지를 판별하는 기능.
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    // ?변수선언 - 시간을 불러오기

    if(hour < 8){
        alert('아침먹을시간');
    }else if(hour < 15){
        alert('점심먹을시간');
    }else{
        alert('저녁먹을시간');
    }
    // ?조건문 - if(아침먹는조건) elseif(점심먹을조건) else(나머지는 저녁먹는시간)
    // *출력은 alert('xx먹을시간');
}
// *case. 3 숫자판별
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요.', '양,음수판별');
    console.log(typeof(numb) + ' = ' + numb);
    if(numb > 0){
        alert('양수');
    }else if(numb < 0){
        alert('음수');
    }else{
        alert('0 이거나 잘못된 값이 입력되었습니다.');
    }
}