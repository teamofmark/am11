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