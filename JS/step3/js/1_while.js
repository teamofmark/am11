/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.
*/
// *case.1 password "1234"가 입력되면 '접속승인', 아니면 '잘못 입력하였습니다.'를 출력하되
// * 접속승인이 날 때까지 반복하기.
function pwCheck(){
    while(true){
        var value = window.prompt('password를 입력하세요.');
        if(value == 1234){
            alert('접속승인');
            break;
        }else{
            alert('잘못입력하였습니다.');
        }
    }
}

// *case.2 while Continue
function whileContinue(){
    var i = 1; //? i ? - 반복전용변수. 암묵적인룰. i = index. 공식 Ref - [i], var i = 0;...
    while(i <= 10){ //? i가 10보다 작거나 같을때 까지는? 내부를 실행해라.
        i++; //? i 1씩증가.
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.3 while Break
function whileBreak(){
    var i = 1;
    while(i <= 10){
        i++;
        document.write(i + "<br>");
        break;
    }
    document.write('최종 i = ' + i + '<br>');
}