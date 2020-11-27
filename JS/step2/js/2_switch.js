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