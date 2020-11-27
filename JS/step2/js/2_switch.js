/*
    ?switch
    * switch는 딱딱 떨어지는 값의 조건을 비교할때 사용한다.
    * ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
function switchGrammar(){
    var input = Number(prompt('숫자만입력해라.','숫자만'));

    // ? 조건문
    switch (input % 2){
        case 0:
            alert('짝수입니다.');
            break;
        case 1:
            alert('홀수입니다.');
            break;
        default:
            alert('숫자가아님.');
            break;
    }
}

// *exp.2 lotto과제를 switch로 변경
function lotto(){
    var numbValue = window.prompt('입력하실번호는?');

    switch(numbValue){
        case "1":
            alert('1등 10억!');
            break;
        case "2":
            alert('2등 5천!');
            break;
        case "3":
            alert('3등 300!');
            break;
        default:
            alert('낙첨...');
            break;
    }
}
//todo.1 switch 문을 이용한 계산기
//? 첫번째 숫자 와 연산자 와 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstNumb= window.prompt('첫번째 숫자를 입력하세요.');
    var operator= window.prompt('사칙연산자중 하나를 입력하세요.');
    var lastNumb= window.prompt('두번째 숫자를 입력하세요.');

    firstNumb = parseInt(firstNumb);
    lastNumb = parseInt(lastNumb);

    switch (operator) {
        case '+':
            alert(firstNumb+lastNumb);
            break;
        case '-':
            alert(firstNumb-lastNumb);
            break;
        case '*':
            alert(firstNumb*lastNumb);
            break;
        case '/':
            alert(firstNumb/lastNumb);
            break;
        default:
            alert('잘못된 값이 입력되었습니다.');
            break;
    }
}