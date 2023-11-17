/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// *case. 1 함수의 필요성
// document.write("방가와. <br>");
// document.write("방가와. <br>");
// document.write("방가와. <br>");
function helloExp(count){
    for (var i = 0; i < count; i++){
        document.write("방가와. <br>");
    }
}
// *case. 2 매개변수(parameter)가 있는 함수 만들기
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}