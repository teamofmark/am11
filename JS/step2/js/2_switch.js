/*
    ?switch
    * switch는 딱딱 떨어지는 값(case)의 조건을 비교할 때 주로 사용.
*/
// *case.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '숫자만'));

    // ? 조건문
    switch(input % 2){
        case 0:
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.');
            break;
        default:
            alert('숫자가아닙니다.');
            break;
    }
}
// *case.2 switch 계산기
//? 숫자2, 연산자1.
function calculator(){
    var firstNumb = prompt("첫번째 숫자를 입력하세요.");
    var operator = prompt("사칙연산자중 하나를 입력하세요.(+,-,*,/)");
    var lastNumb = prompt("두번째 숫자를 입력하세요.");
    
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

// todo. if 복권과제. switch로 먼저 풀어보기
//? 1이 입력되었을 때 = 1등 10억!, 2가 입력되었을 때 = 2등 5천!, 3이 입력되었을 때 = 3등 3백!
//! 그외 나머지는 낙첨되었습니다.

function lotto(){
    var numbValue = prompt("입력하실 번호는?");
    // ?변수선언부
    
    switch(numbValue){
        case "1":
            alert("1등 10억!");
            break;
        case "2":
            alert("2등 5천!");
            break;
        case "3":
            alert("3등 3백!")
            break;
        default:
            alert("낙첨되었습니다.");
            break; 
    }
    // ?switch 조건처리부 (내 출력 alert.)

}