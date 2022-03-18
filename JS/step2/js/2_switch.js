/*
    ?switch
    switch는 딱딱 떨어지는 값의 조건을 비교할 때 사용된다.
*/
// *case.1 기본 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '숫자'));

    switch(input%2){
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

// *case.2 lotto 과제를 switch로 변경.
function lotto(){
    var numbValue = window.prompt("입력하실번호는?");
    
    switch (numbValue){
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

// todo. switch문을 이용한 계산기.
// ? 첫번째 숫자와 연산자와 두번째 숫자를 입력받아 계산해주는 계산기.
function calculator(){
    var firstNumb = window.prompt('첫번째 숫자를 입력해주세요.');
    var operator = window.prompt('사칙연산자중 하나를 입력해주세요.(+,-,*,/)');
    var lastNumb = window.prompt('두번째 숫자를 입력해주세요.');


    switch(key){
        case val:
    }
}