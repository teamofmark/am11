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
// *case.1 현재시간이 오후인가 오전인가?
function amORpm(){
    var date = new Date();
    var hour = date.getHours(); //? 시간반환 -> 0 ~/ 12 /~ 23

    if(hour < 12){
        alert('오전. 일어나');
    }
    else if(hour >= 12){
        alert('오후. 밥먹어');
    }
    else{
        alert('값 똑바로 입력해라.');
    }
}
// * case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    if(day<30){
        alert('아직 말일 아님.');
    }else{
        alert('말일입니다.');
    }
}
// todo 아침? 점심? 저녁 먹을 시간인지 알려주는 함수 만들기.
function mealTime(){
    var date = new Date();
    var hour = date.getHours();
    if(hour < 11){
        alert('아침많이먹어');
    }else if(hour < 15){
        alert('점심적당히먹어');
    }else{
        alert('저녁꼭먹어야겠냐');
    }
}
// todo 홀,짝수 판별하는 함수 만들기
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요.','홀,짝을 구분합니다.');
    if(numb%2 == 0){
        alert('짝수입니다.');
    }else if(numb%2 == 1){
        alert('홀수일껄요.');
    }else{
        alert('값 똑바로 입력해라.');
    }
}
// *case. 3 다음 세 과목의 점수를 입력받고 평균을 구한 후 수,우,미,양,가를 출력하라.
function avgScore(){
    var koreanScore = prompt('국어점수를 입력하시오');
    var englishScore = prompt('영어점수를 입력하시오');
    var mathScore = prompt('수학점수를 입력하시오');
    var avg = (Number(koreanScore) + Number(englishScore) + Number(mathScore)) / 3;
    // todo. 나온 점수를 활용하여 각 해당 alert이 출력되게 만들어보기
    if(avg > 100 || avg < 0){
        alert('점수 똑바로 입력하라.'); //? 0 보다 작거나 100보다 클때
    }else if(avg >= 90){
        alert('평균' + avg + '점 \n 수 입니다. 특급이구먼.'); //? 평균 ?? 점 \n 수 입니다. 특급이구먼. 90 ~ 100
    }else if(avg >= 80){
        alert('평균' + avg + '점 \n 우 입니다. 우수하구먼.'); //? 평균 ?? 점 \n 우 입니다. 우수하구먼. 80 ~ 89
    }else if(avg >= 70){
        alert('평균' + avg + '점 \n'  + '미 입니다. 괜찮구먼'); //? 평균 ?? 점 \n 미 입니다. 괜찮구먼. 70 ~ 79
    }else if(avg >= 60){
        alert('평균' + avg + '점 \n'  + '양 입니다. 망했구먼'); //? 평균 ?? 점 \n 양 입니다. 망했구먼. 60 ~ 69
    }else{
        alert('평균' + avg + '점 \n'  + '가 입니다. 맞겠구먼'); //? 평균 ?? 점 \n 가 입니다. 맞겠구먼. 0 ~ 59
    }
}
// *case. 5 사용자의 id를 입력받아 'Mark' 가 맞다면 승인메시지를 출력, 아니라면 거부 메시지를 출력.

function userIDCheck(){
    var userID = window.prompt("사용자의 아이디를 입력하세요.");
    if(userID == "Mark"){
        alert("접속승인!");
    }else{
        alert("접속거부!");
    }
}
// *case. 6 사용자 id "Mark" 와 password "1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력.
function userInfoCheck(){
    var userID = window.prompt("사용자의 아이디를 입력하세요.");
    var userPW = window.prompt("사용자의 비밀번호를 입력하세요.");
    if(userID=="Mark"&&userPW=="1234"){
        alert("접속승인!");
    }else{
        alert("ID 혹은 Password가 틀렸습니다.");
    }
}
// todo. 사용자 id "Mark"와 password "1234"의 정보가 틀릴 경우 "틀린 정보에 대한 오류 메시지 출력"
function userInfoCheck2(){
    var userID = window.prompt("사용자의 아이디");
    var userPW = window.prompt("사용자의 패스워드");
    if(userID=="Mark"&&userPW=="1234"){
        console.log("Mark님으로 확인되었습니다.");
    }else if(userID != "Mark" && userPW != "1234"){
        console.log("모든 정보가 맞지않습니다.");
    }else if(userID!="Mark"){
        console.log("ID가 존재하지 않습니다.");
    }else if(userPW!="1234"){
        console.log("password가 틀렸습니다.");
    }
}