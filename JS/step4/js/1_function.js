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
var comment = "안녕? 방가와.";
var comment2 = "안녕하세요? 반갑습니다.";
var comment3 = "hi? hello! nice to meet u.";

function commentGuide(comment,count){
    for(var i = 0; i < count; i++){
        document.write(comment,'<br>');
    }
}