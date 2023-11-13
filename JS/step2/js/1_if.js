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
    
}