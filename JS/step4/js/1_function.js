/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

//* exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// document.write("안녕. 방가와","<br>");
// document.write("안녕. 방가와","<br>");
// document.write("안녕. 방가와","<br>");

function hello(){
    var comment = '안녕, 방가와!';
    for (var i = 0; i < 3; i++){
        document.write(comment,'<br>');
    }
}

// *exp.2 매개변수 (Parameter)가 있는 함수 만들기.
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.


function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// ?  NaN(Not a Number).표현 불가능한 수치형 결과를 나타내는 값. 은 연산 과정에서 잘못된 입력을 받았음을 나타내는 기호

// *exp.3 매개변수의 자리가 없어도 있는 것처럼..arguments(가변인자함수)
/*
    ?arguments? 
    arguments 객체는 모든 함수 안에서 사용하는 지역변수다.
    arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객채의
    함수에 전달된 각 인수항목을 포함한다.
    단 arguments는 Array와 비슷해보이지만 length를 구하는것을 제외
    Array와 다르다. 하지만 필요에 따라 Array로 변환하여 쓸수있다.
*/

// *exp. 3-1
function sumAll(){
    var sumArg = 0;// ? 선언
    for (var i = 0; i < arguments.length; i++){
        sumArg += arguments[i];
    }// ? 처리
    alert('arguments의 총합은 : ' + sumArg);// ? 출력
}

// function sumAllExt(){
//     var willReturn = 0;
//     for (var i in arguments){
//         willReturn += arguments[i];
//     }
//     return willReturn;
// }