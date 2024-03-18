/*
    ? switch
    switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
    ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case. 1 문법 - 홀,짝구분 
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라'));
    switch (input % 2) {
        case 0:
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.');
            break;
        default:
            alert('숫자가 아닙니다.');
            break;
    }
}
// *case. 2 lotto과제를 switch로 변경
function lotto(){
    var numbValue = prompt("입력하실 번호는?");
    switch(numbValue){
        case "1":
            alert("1등 15억!");
            break;
        case "2":
            alert("2등 5천만원!");
            break;
        case "3":
            alert("3등 3백만원!");
            break;
        default:
            alert("낙첨되었습니다.");
            break;
    }
}
// todo. switch문을 이용한 계산기
// ? 첫번째 숫자와 연산자와 두번째 숫자를 입력받아 계산해주는 사칙연산기.
function calculator(){
    var firstNumb = prompt("첫번째 숫자를 입력하세요.");
    var operator = prompt("사칙연산자(+,-,*,/)중 하나를 입력하세요.");
    var lastNumb = prompt("두번째 숫자를 입력하세요.");

    // ?형변환
    firstNumb = Number(firstNumb);
    lastNumb = Number(lastNumb);

    switch(operator){
        case "+":
            alert(firstNumb+lastNumb);
            break;
        case "-":
            alert(firstNumb-lastNumb);
            break;
        case "*":
            alert(firstNumb*lastNumb);
            break;
        case "/":
            alert(firstNumb/lastNumb);
            break;
        default:
            alert("연산이 불가능한 값이 입력되었습니다.");
            break;
    }
}