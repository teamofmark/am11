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
    while(i <= 10){ //?
        i++; //?
        continue; //?

        document.write(i + '<br>'); //?
    }
    document.write('최종 i = ' + i + '<br>'); //?
}
// *case.3 while Break
function whileBreak(){
    var i = 1;
    while(i <= 10){ //?
        i++; //?
        break; //?
        document.write(i + '<br>'); //?
    }
    document.write('최종 i = ' + i + '<br>'); //?
}