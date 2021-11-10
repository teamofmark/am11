/*
    ?while
    * while loop는 조건이 참일경우 실행(반복)된다.
    * 정해진 횟수만큼의 반복 for, 무한반복처리(특정조건 충족시 까지 반복) while
*/

// *case.1 password '1234'가 입력되면 '접속승인' 아니면 계속 되 묻기.
function pwCheck(){
    while(true){ //? condition Part
        var value = window.prompt('password를 입력하세요.'); //? 실행구문

        if(value == 1234){
            alert('접속승인');
            break; //? while 반복문 이탈.
        }else{
            alert('잘못 입력하였습니다. 다시 입력하세요.');
        }
    }
}
// *case.2 while Continue
function whileContinue(){
    var i = 0;
    while(i < 10){ //? 총 10회 반복
        i++; //? i 초기값부터 1씩증가.
        continue; //? continue 기준 위로 다시 받아치기.
        document.write(i + "<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
// *case.3 while Break
function whileBreak(){
    var i = 0;
    while(i < 10){ //? 총 10회 반복
        break; //? 반복문 이탈. (break(속한logic) / return(함수부이탈))
        i++; //? i 초기값부터 1씩증가.
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}