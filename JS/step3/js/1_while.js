/*
    ?while
    * while loop는 조건이 참일경우 실행(반복)된다.
    * 정해진 횟수만큼의 반복 for, 무한반복처리(특정조건 충족시 까지 반복) while
*/

// *case.1 password '1234'가 입력되면 '접속승인' 아니면 계속 되 묻기.
function pwCheck(){
    while(true){ //? condition Part
        var value = window.prompt('password를 입력하세요.'); //? 실행구문

        if(value == 1234){
            alert('접속승인');
            break; //? while 반복문 이탈.
        }else{
            alert('잘못 입력하였습니다. 다시 입력하세요.');
        }
    }
}
// *case.2 while Continue
function whileContinue(){
    var i = 0;
    while(i < 10){ //? 총 10회 반복
        i++; //? i 초기값부터 1씩증가.
        continue; //? continue 기준 위로 다시 받아치기.
        document.write(i + "<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
// *case.3 while Break
function whileBreak(){
    var i = 0;
    while(i < 10){ //? 총 10회 반복
        break; //? 반복문 이탈. (break(속한logic) / return(함수부이탈))
        i++; //? i 초기값부터 1씩증가.
        document.write(i+"<br>");
    }
    document.write("최종 i = " + i + "<br>");
}

// todo. 구구단 숫자를 입력받아 출력하는 while문
// ? 1. 숫자입력받을 prompt 출력.
// ? 2. 숫자를 입력받으면 해당 구구단을 출력.
// * 9단이내로만 입력받기. ex> 9단이 넘어 갈시 '9단 이하로 입력하세요.'
function gugudan(){
    var guguNumb = window.prompt('구구단 숫자를 입력(1~9)');
    var i = 1;
    // while(i<=9){
    //     if(guguNumb > 9){
    //         alert('9단 이하로 입력하세요.');
    //         break;
    //     }
    //     document.write(guguNumb + 'x' + i + '=' + guguNumb * i + '<br>') //? ex. 9 x 1 = 9
    //     i++;
    // }
    if(guguNumb <= 9){
        while(i<=9){
            document.write(guguNumb + 'x' + i + '=' + guguNumb * i + '<br>') //? ex. 9 x 1 = 9
            i++;
        }
    }else{
        alert('9단 이하로 입력하세요.');
    }
}
// *case. 4 end가 입력될 때 까지 숫자를 계속해서 입력받고 합을 출력함과 동시에 prompt에 몇번수행했는지 표시.

function sumNumb(){
    var i = 1; //? count var
    var result = 0; //? 결과담기.

    while(true){
        var numb = window.prompt(i + "번째 입력"); //? 무한루프로 입력받기
        if(numb == "end"){
            alert('입력이 종료되었습니다.'); //? 종료 alert 출력.
            break; //? loop 이탈
        }

        result += parseInt(numb); //? 결과변수에 형변환후 더해서 저장.
        document.write('현재까지의 총합 : ' + result + '<br>'); //? 저장된 result 출력.
        i++; //? 수행시 마다 i 1씩 증가
    }
}