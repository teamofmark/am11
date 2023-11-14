
/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// *case. 1 기본문법 - 홀,짝구분하기

function switchGrammar(){
    var input = Number(prompt('숫자를입력하라.'))%2;
    console.log(input);
    switch(input){
        case 0:
            alert("짝수여");
            break;
        case 1:
            alert("홀수여");
            break;
        default:
            alert("숫자가 아닙니다.");
            break;
    }
}
// todo. lotto과제 (if문) switch문으로 한번 풀어보기