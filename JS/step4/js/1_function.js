/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// *exp.1 다음 구문을 hello()라는 함수를 만들어 유지보수 하기 쉽게 만들어보기.
/*
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
*/
function helloExp(){
    var comment = '안녕. 방가와!';
    for (var i = 0; i < 3; i++){        
        document.write("안녕. 방가와","<br>");
    }
}
function helloFunc(){
    var comment = '안녕. 방가와!';
    document.write(comment,'<br>');
}

// *case.1 매개변수(parameter)가 있는 함수 만들기.
//? 함수내 정해진 변수의 value를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결!
function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
} 

//  *case.2 매개변수의 자리가 없어도 있는것처럼 .. arguments(가변인자함수)
function sumAll(){
    alert(typeof(arguments) + ':' + arguments.length);
    
    var willReturn = 0;
    
    for(var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}

// *case.3 매개변수의 자리가 없는 곳에 입력된 매개변수를 arguments를 이용하여 출력해보자.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1]);
}