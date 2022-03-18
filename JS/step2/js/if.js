/*
    ? 조건문

    ? 실무사용의 예
    * login 시 id와 password가 server에 저장된 정보와 같은지 비교 후 같다면 승인. 아니라면 오류메시지.
    * game에서 자신이 공격을 했을 때  상대방을 타격 했는지 여부 판별.
    * 경품추첨시 사용자가 뽑은 번호에 따른 경품 당첨 여부를 판별.
    * 삭제작업 수행시 사용자가 Y/N를 눌렀을 때 각각 수행여부를 판별.

    if(condition){
        logic....
    }
*/
// *case.1 현재시각이 오후인가 오전인가 ()
function amORpm(){
    var date = new Date(); //? YYYY,MM,DD,HH,MM,SS............
    var hour = date.getHours();
    // ? 변수 선언부

    if(hour < 12){
        alert('오전입니다.');
        // ? 출력부
    }
    if(hour >= 12){
        alert('오후입니다.');
        // ? 출력부
    }
    // ? 조건 처리부
}
// *case.2 말일인가 아닌가
function lastDay(){
    var date = new Date();
    var day = date.getDate();
    // ? 변수 선언부

    if(day < 30){
        alert('아직 말일이 아닙니다.');
    }else{
        alert('말일입니다.');
    }
}

// *case.3 아침? 점심? 저녁?
function mealTime(){
    var date = new Date();
    var hour = date.getHours();

    if(hour < 11){ //? 11시보다 현시각이 작으면 아침
        alert('아침먹을시간');
    }else if(hour < 15){ //? 그것이 아니고 15시 보다 현시각이 작으면 점심
        alert('점심먹을시간');
    }else{ //? 그마저도 아닐 시 저녁.
        alert('저녁먹을시간');
    }
}
// *case.4 숫자판별(양,음수)
function numbJudgment(){
    var numb = prompt('숫자를 입력하세요','양,음수 상관없음.');
    console.log(typeof(numb) + ' = ' + numb);
    
    if(numb > 0){
        alert('양수입니다.');
    }else if(numb < 0){
        alert('음수입니다.');
    }else{
        alert('0 이거나 잘못된 값이 입력되었습니다.');
    }
}
// todo. 홀,짝 판별
function oddOrEven(){
    var numb = prompt('숫자를 입력하세요', '홀,짝을 구분해드립니다.');
    if(numb%2 == 0){
        alert('짝수입니다.');
    }else if(numb%2 == 1){
        alert('홀수입니다.');
    }else{
        alert('값똑바로넣어');
    }
    // ?조건처리부
}


// *case.6 사용자 id를 입력받아 맞다면 승인메시지 출력.
function userIDCheck(){
    var userID = window.prompt("사용자의 아이디");
    if(userID == "Mark"){
        alert('접속을 승인합니다.');
    }else{
        alert('잘못된 ID입니다.');
    }
}
// todo. 사용자 id "mark"와 password"1234"를 입력받고 둘다 맞을 경우에만 승인 메시지 출력. 
function userInfoCheck(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');

    if(userID == "Mark" && userPW == "1234"){
        alert('Mark님으로 확인 되었습니다.');
    }else if(userID != "Mark" || userPW != "1234"){
        alert('ID 혹은 Password가 틀렸습니다.');
    }
}
// todo. 사용자 id "mark"와 password"1234"를 입력받고 정보가 틀릴 경우 틀린정보에 대한 오류 메시지출력.
function userInfoCheck2(){
    var userID = window.prompt('사용자의 아이디');
    var userPW = window.prompt('사용자의 패스워드');
    
    if(userID == "Mark" && userPW == "1234"){
        alert("Mark님으로 확인되었습니다.");
    }else if(userID != "Mark"){
        alert('ID가 존재하지 않습니다.');
    }else{
        alert('password가 틀렸습니다.');
    }

}