/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// case. 1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라'));
    // 홀,짝수 구하기
    switch(input%2){
        case 0:
            alert("짝수입니다.");
            break;
        case 1:
            alert("홀수입니다.");
            break;
        default:
            alert("잘못된입력값입니다.");
            break;
    }
}
// case. 2 복권과제를 switch로 미리풀어보기
function lotto(){
    var numbValue = prompt("입력하실번호는?");

    switch(numbValue){
        case "1":
            alert("1등 10억!");
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
// case.3 switch문을 이용한 계산기
function calculator(){
    var firstNumb = window.prompt("첫번째 숫자를 입력하세요.");
    var operator = window.prompt("사칙연산자중 하나를 입력하시오.");
    var lastNumb = window.prompt("두번째 숫자를 입력하세요.");

    switch(operator){
        case "+":
            alert(firstNumb + operator + lastNumb + " = " + Number(firstNumb + lastNumb));
            break;
        case "-":
            alert(firstNumb + operator + lastNumb + " = " + Number(firstNumb - lastNumb));
            break;
        case "*":
            alert(firstNumb + operator + lastNumb + " = " + Number(firstNumb * lastNumb));
            break;
        case "/":
            alert(firstNumb + operator + lastNumb + " = " + Number(firstNumb / lastNumb));
            break;
        default:
            alert("입력값에 오류가 있습니다.");
            break;
    }
}