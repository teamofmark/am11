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

function sumNumb(){
    var i = 1; // ? count Var
    var result = 0; //? 최종합 (결과)을 담을 변수.
    while(true){
        var numb = window.prompt(i + '번째 입력'); //? 무한루프로 숫자 입력받기

        if(numb=="end"){ //? end라는 값과 일치하면
            alert('입력이 종료되었습니다.'); //? 경고창발생.
            break; //? 루프중단.
        }

        result += parseInt(numb); //? result 변수에 형변환후 기존값에 더해서 저장.
        document.write('현재까지의 총합 : ' + result + '<br>'); //? 저장된 result값을 매번 출력.(while이 끝나기 전에는 확인불가.)
        i++; //? write누적이후 i count 증가.
    }
}