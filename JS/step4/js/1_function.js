/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/


//* exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기

//document.write("안녕. 방가와","<br>");
//document.write("안녕. 방가와","<br>");
//document.write("안녕. 방가와","<br>");

function helloExp(){ //! 반복문 사용시
    var comment = "안녕. 방가와!"
    for (var i = 0; i < 3; i++) {
        document.write(comment,"<br>");
    }
}

function helloFunc(){//!함수로 호출시
    var comment = "안녕. 방가와!"
    document.write(comment,"<br>");
}
//helloFunc();helloFunc();helloFunc();

//* exp.2 기존의 반절피라미드 2회를 함수를 만들어 간결하게.
/*
var star = '';
for (var i = 1; i <= 10; i++) { 
    for (var j = 0; j < i; j++) { 
        star += '*'; 
    }
    star += '<br>';
}
document.write(star);
var star = '';
for (var i = 1; i <= 10; i++) { 
    for (var j = 0; j < i; j++) { 
        star += '*'; 
    }
    star += '<br>';
}
document.write(star);

function starPrint(){
    var star = '';
    for (var i = 1; i <= 10; i++) { 
        for (var j = 0; j < i; j++) { 
            star += '*'; 
        }
        star += '<br>';
    }
    document.write(star);
}
starPrint();starPrint();
*/
// *exp.3 매개변수(Parameter)가 있는 함수 만들기

function sumParam(){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}