/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
function helloFunc(comment,count){
    // var comment = '안녕? 방가와!';
    for(var i = 0; i < count; i++){
        document.write(comment,'<br>');
    }
}
// *case.1 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 =?' + result);
}
// *exp.4 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/