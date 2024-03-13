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
//* case.1 현재시간이 오후인가 오전인가
function amORpm(){
    var date = new Date(); //? new -> 생성. Date()-연,월,일,시,분,초 < 객체 = 전역함수.
    var hour = date.getHours();
    console.log("가져온 시간 정보의 자료형은 " + typeof(hour) + ", 값은" + hour + " 입니다.");
    if(hour<12){
        // * 오전/오후의 기준? 12시 -> am/pm -> 0~=24 -> 0~23
        // ? if(condition=조건) -> 조건의 특징은 값의 반환이 무조건 true / false. -> 비교.
        alert("오전입니다.");
    }
    if(hour>=12){
        alert("오후입니다.");
    }
}

//* case.2 말일인가? 아닌가?
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    console.log("가져온 일자 정보의 자료형은 " + typeof(day) + ", 값은 " + day + " 입니다.");
    if(day<30){
        alert("아직 말일이 아닙니다.");
    }else{
        alert("말일입니다.");
    }
}