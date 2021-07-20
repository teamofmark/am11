/*
    ? while
    * while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.

*/
// *case.1 password '1234'가 입력되면 '접속승인', 아니면 '잘못 입력하였습니다.'
function pwCheck(){
    while(true){
        var value = window.prompt('패스워드를 입력하세요.');

        if(value == 1234){
            alert('접속승인');
            break;
        }else{
            alert('잘못입력하였습니다.');
        }
    }
}
// *exp.1 while Continue
function whileContinue(){
    var i = 1;
    while (i <= 10){
        i++;
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

// *exp.2 while Break
function whileBreak(){
    var i = 1;
    while (i <= 10){
        i++;
        break;
        document.write(i+ '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

// todo.1 구구단 숫자를 입력받아 출력하는 while 문.
function gugudan(){
    var guguNumb = window.prompt('알고싶은 구단 숫자를 입력');
    var i = 1;
    while (i <= 9){
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
        i++; 
    }
}
// todo.2 end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력.
// todo. prompt에는 몇번 수행했는지 'x 번째 입력중' 이라는 text 표시.