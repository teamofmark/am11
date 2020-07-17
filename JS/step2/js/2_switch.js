/*
?switch
    ?switch는 딱딱 떨어지는 값의 조건을 비교할때 사용한다.
    ?( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *exp.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라', '숫자'));

    //? 조건처리부
    switch(input%2){
        case 0:
            alert('짝수');
            break;
        case 1:
            alert('홀수');
            break;
        default:
            alert('숫자가 아닙니다.');
            break;
    }
}

// *case.2 switch문을 이용한 계산기
//? 첫번째 숫자 와 연산자 와 두번째 숫자를 입력받아 계산해주는 계산기
function calculator(){
    var firstNumb = window.prompt('첫번째 숫자를 입력하세요.');
    var operator = window.prompt('연산자(+,-,*,/) 를 입력하세요.');
    var lastNumb = window.prompt('두번째 숫자를 입력하세요.');

    // * 형변환
    firstNumb = parseInt(firstNumb);
    lastNumb = parseInt(lastNumb);

    switch(operator){
        case '+':
            alert(firstNumb+lastNumb);
            break;
    }
}