/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

// *case.1 다음 구문의 유지보수어려움을 쉽게 바꿔보기.

/*
document.write('안녕? 반가워');
document.write('안녕? 반가워');
document.write('안녕? 반가워');
*/
function helloExp(count){
    var comment = "안녕? 반가워";
    for(var i = 0; i < count; i++){
        document.write(comment);
    }
}
// *case.2 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}

// *case.3 가변인자함수 (arguments - 배열은 아니지만 배열처럼 사용된다.)

function sumAll(){
    // alert(typeof(arguments) + ':' + arguments.length);
    // ? typeof -> arguments
    var willReturn = 0;
    for (var i in arguments){ //for in 반복문은 IE9 이상에서만 가능. vue.js 등의 프론트엔드 프레임워크에서 사용.
         // var i = 0; i<arguments.length; i++
        willReturn += arguments[i];
        // willReturn 이라는 변수에 arguments(매개변수의 배열) 내의 값을 더해서 대입해라. 배열의 갯수만큼.
    }
    return willReturn;
}

// *case.4 returnExample
function f(x){
    return x * x;
}
// *case. 5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수를 만들어보자.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
var value = sumReturn1(10,20);

// *case.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단 입력값이 0 이면 즉시 실행 중지.

function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt("숫자만 입력해라."));
        if(value == 0){
            document.write('종료!');
            return;
        }

        sum += value;
        document.write(count + "." + sum + "<br>");
        count++;
    }
    document.write("총 " + count + "번 실행함");
}

// todo.1 구구단 출력을 함수로 만들기.
function printGugudan(){
    for(var i = 2; i <= 9; i++){
        document.write(i + "단 출력", "<br>");
        for(var m = 1; m <= 9; m++){
            document.write(i + "*" + m + "=" + (i*m), "<br>");
        }
        document.write("<br>");
    }
}