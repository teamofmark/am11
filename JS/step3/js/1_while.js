/*
    ? while
    * while 반복문은 조건이 참일 경우 무한 반복.
    * (for문도 가능하지만..)
*/

// *case.1 password '1234'가 입력되면 '접속승인', 아니면 '접속거부'.
function pwCheck(){
    while(true){
        var value = window.prompt("password를 입력하세요.");

        if(value == 1234){
            alert('접속승인!');
            break;
        }else{
            alert('접속거부!');
        }
    }   
}

// *case.2 while Continue
function whileContinue(){
    var i = 1;
    while(i <= 10){ //? 총 10회 반복
        i++; //? i 초기값부터 10번증가.
        continue; //? continue로 인해 하단 logic 수행 불가.

        document.write(i + '<br>'); //? color 로 보인다.(vsCode)
    }
    document.write('최종 i = ' + i + '<br>'); //? 최종결과만 출력.
}
// *case.3 while Break
function whileBreak(){
    var i = 1;
    while(i <= 10){ //? 총 10회 반복
        i++; //? i 초기값 부터 10번 증가.
        break; //? break로 인해 loop 탈출.
        document.write(i + '<br>'); //? 실행불가
    }
    document.write('최종 i = ' + i + '<br>'); //? 증감부가 1회만 구동된 상태로 최종결과 출력.
}
// todo. 구구단 숫자를 입력받아 출력하는 while문
// ? 1. 숫자(단수)입력받을 prompt출력.
// ? 2. 입력받으면 해당 구구단을 출력.
// * 9단 이내로만 입력받기. ex> 9단이 넘어갈 시 '9단 이하로 입력하세요'.
function gugudan(){
    var guguNumb = window.prompt('구구단숫자를 입력하세요.(1~9)');// ? prompt로 입력받아서 변수에 담기.
    var i = 1;// ? 증감부 변수.
    // ? 조건부 (9단 이내 / 아닐때) -> 이 조건이 참일때 while. 그외는 경고창.
    if(guguNumb <= 9){
        while(i <= 9){
            document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요.');
    }
}
