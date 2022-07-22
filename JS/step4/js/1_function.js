/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/


// *case.1 함수의 필요성
// document.write('안녕? 방가와.', "<br>");
// document.write('안녕? 방가와.', "<br>");
// document.write('안녕? 방가와.', "<br>");

// var comment = "안녕? 방가와.";
// for(var i = 0; i < 3; i++){
//     document.write(comment,'<br>');
// }
/*
var comment = "안녕? 방가와.";
var comment2 = "안녕하세요? 반갑습니다.";
var comment3 = "hi? hello! nice to meet u.";

function commentGuide(comment,count){
    for(var i = 0; i < count; i++){
        document.write(comment,'<br>');
    }
}
*/
// *case.2 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)을 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// *case.3 매개변수가 없어도 있는 것처럼...arguments(가변인자함수 - 배열은 아닌데 변수를 배열처럼 저장함)
/*
    ? arguments
    * 1. arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * 2. arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 3. 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 4. 필요에 따라 array로 추가변환하여 사용 할 수 있다.
*/

// *case.4 arguments Test
function sumAllEX(){
    console.log('입력한 자료형과 갯수는 '+typeof(arguments)+' : '+arguments.length);
    var willReturn = 0;
    for (var i in arguments){
        // var i = 0; i < arguments.length; i++....
        willReturn += arguments[i];
        // ? willReturn 이라는 변수에 arguments(매개변수의나열)내 값을 더하여 담기.
    }
    return willReturn; //? 최종결과값을 호출부(sumAllEX)로 리턴
}