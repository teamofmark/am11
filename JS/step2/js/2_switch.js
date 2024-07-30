/*
?switch
switch는 조건식의 결과가 case에 걸리는 경우, 비교할때 사용한다.
( >,<,>=,<=,!= 와 같은 연산자를 사용 안했을 경우에만)
*/
// case.1 문법
function switchGrammar(){
    var input = Number(prompt('숫자입력'));
    
    switch (input % 2){
        case 0:
            alert("짝수입니다.");
            break;
        case 1:
            alert("홀수입니다.");
            break;
        default:
            alert('숫자가아닙니다.');
            break;
    }
}
// case.2 lotto과제를 switch로 변경
function lotto(){
    var numbValue = prompt("입력하실번호는?");
    switch(numbValue){
        case "1" :
            alert("1등 10억!");
            break;
            //todo  alert("2등 5천만원!");
            //todo  alert("3등 300만원!");
            //todo  alert("낙첨되었습니다.");
    }
}