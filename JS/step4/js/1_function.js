/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// case.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// 1-1 수동으로 반복함
/*
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
*/
// 1-2. 반복을 쉽게하기 위해 반복문
/*
var comment = "안녕. 방가와";
for(var i = 0; i < 3; i++){
    document.write(comment,"<br>");
}
*/
// 1-3. 원할 때 실행하기 위해 함수화
// function commentFunc(){
//     var comment = "안녕.";
//     for(var i = 0; i < 10; i++){
//         document.write(comment,"<br>");
//     }
// }
// function commentFunc2(){
//     var comment = "HI";
//     for(var i = 0; i < 3; i++){
//         document.write(comment,"<br>");
//     }
// }
// case. 2 매개변수(parameter)의 사용법
// ? 함수의 폐쇄성으로인해 함수내 정해진 변수의 value(값)를 변경하여 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,'<br>');
    }
}
// -1. 예를 들어 10이랑 20을 더해야된다. -> 20이랑 30도 더해야된다.
/*
function sumParam(){
    var num1 = 10;
    var num2 = 20;
    alert('두 수의 합은?' + (num1+num2));
}
function sumParam1(){
    var num1 = 20;
    var num2 = 30;
    alert('두 수의 합은?' + (num1+num2));
}
*/
function sumParam(x,y){
    alert('두 수의 합은?' + (x+y));
}