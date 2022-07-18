
/*
    ?switch
    * switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
    * ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라'));

    // ? 조건문
    switch(input%2){
        case 0:
            alert('짝수입니다.');
            break;
        case 1:
            alert("홀수입니다.");
            break;
        default:
            alert("숫자가 아닙니다.");
            break;
    }
}

// todo. switch문을 이용한 사칙연산계산기
// ? 첫번째 숫자와 연산자와 두번째 숫자를 입력받아 계산해주는 계산기

function calculator(){
    var firstNumb = window.prompt("첫번째 숫자를 입력하세요.");
    var operator = window.prompt("사칙연산자 중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = window.prompt("두번째 숫자를 입력하세요.");

    // ?형변환
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
        default:
            alert("잘못된 값이 입력되었습니다.");
            break;
    }
}