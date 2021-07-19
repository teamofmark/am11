/*
    ?switch
    * switch는 딱딱 떨어지는 case value의 조건을 비교할 때 주로 사용된다.
*/

// *case.1 홀,짝구분

function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '홀,짝을 구분해주지'));
    
    switch(input % 2){
        case 0:
            alert('짝수');
            break;
        case 1:
            alert('홀수');
            break;
        default:
            alert('숫자가 아님');
            break;
    }
}
// todo.1 (if과제 풀고나서) 1번 복권문제를 switch로 변경.
function lotto(){

}

// *case. 2 switch문을 이용한 계산기

function calculator(){
    var firstNumb = window.prompt('첫번째 숫자를 입력하세요.');
    var operator = window.prompt('사칙연산자중 하나를 입력하세요.');
    var lastNumb = window.prompt('두번째 숫자를 입력하세요.');

    firstNumb = parseInt(firstNumb);
    lastNumb = parseInt(lastNumb);

    switch(operator){
        case "+":
            alert(firstNumb + lastNumb);
            break;
        case "-":
            alert(firstNumb - lastNumb);
            break;
        case "*":
            alert(firstNumb * lastNumb);
            break;
        case "/":
            alert(firstNumb / lastNumb);
            break;
        default :
            alert("연산자가 잘못되었습니다.");
            break;
    }
}