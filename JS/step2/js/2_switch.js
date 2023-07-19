
/*
    ?switch
    switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
    ( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case. 1 기본문법 - if에서 홀,짝 구분하는 switch
function switchGrammar(){
    var input = Number(prompt('숫자를 입력하라'));
    switch(input % 2){
        case 0:
            alert('짝수!');
            break;
        case 1:
            alert('홀수!');
            break;
        default:
            alert('하여간 말 참 안들어');
            break;
    }
}
// *case. 2 lotto과제를 switch로 변경
function lotto(){
    var numbValue = prompt("입력하실번호는 ? ");
    switch(numbValue){
        case "1":
            alert("1등 10억!");
            break;
        case "2":
            alert("2등 5천!");
            break;
        case "3":
            alert("3등 3백!");
            break;
        default:
            alert("낙첨되었습니다.");
            break;
    }
}
// todo. switch 사칙연산계산기 만들기.
function calculator(){
    /*
        ? 1. 첫번째 숫자를 입력하세요.
        ? 2. 사칙연산 연산자중 하나를 입력하세요.(+,-,*,/)
        ? 3. 두번째 숫자를 입력하세요.
        ? 4. alert으로 결과 출력.
    */
}