/*
 ?switch
* switch는 딱딱 떨어지는 값의 조건을 비교할때 사용한다.
* ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case.1 문법

function switchGrammar(){
    var input = Number(prompt('숫자를 입력해라.'));

    // ?조건
    switch(input % 2){
        case 0:
            alert('짝수!');
            break;
        case 1:
            alert('홀수!');
            break;
        default:
            alert('숫자가 아닙니다.');
            break;
    }
}
// *case.2 switch 문을 이용한 계산기
function calculator(){
    var firstNumb = window.prompt('첫번째 숫자를 입력하세요.');
    var operator = window.prompt('사칙연산자중 하나를 입력하세요.');
    var lastNumb = window.prompt('두번째 숫자를 입력하세요.');

    //? 형변환
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
            alert('잘못된 값이 입력되었습니다.');
            break;
    }
}
// todo.1 1 입력했을 때 "1등 10억!", 2 입력했을 때 "2등 5천만원!", 3 입력했을 때 "3등 300만원!"
// todo. 그 외 숫자가 입력 되었을 때 "낙첨되었습니다."
function lotto(){
    var numbValue = window.prompt('입력하실번호는?');

    switch(numbValue){
        case "1":
            alert("1등 10억!");
            break;
        case "2":
            alert("2등 5천만원!");
            break;
        case "3":
            alert("3등 300만원!");
            break;
        default:
            alert("낙첨되었습니다.");
            break;
    }
}