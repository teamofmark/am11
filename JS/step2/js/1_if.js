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
// todo. 홀수 / 짝수 판별
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요.','홀수,짝수를 구분해드립니다.');

    if(numb%2 == 0){
        alert('짝수입니다.');
    }else if(numb%2 == 1){
        alert('홀수입니다.');
    }else{
        alert('올바른 값을 입력하세요.');
    }
}

// *case.4 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.

function avgScore(){
    // ? 수 -> 90 ~ 100 / 우 -> 80 ~ 89 / 미 -> 70~79 / 양 -> 60~69 / 가 -> ~59.
    
    var koreanScore = prompt('국어 점수를 입력하시오');
    var englishScore = prompt('영어 점수를 입력하시오');
    var mathScore = prompt('수학 점수를 입력하시오');

    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;
    // console.log(avg);
    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라.');
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n' + '수 입니다. 특급!');
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n' + '우 입니다. 우수!');
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n' + '미 입니다. 괜찮.');
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n' + '양 입니다. 망했..');
    }else{
        alert('평균' + avg + '점 \n' + '가 입니다. 맞겠...');
    }
}