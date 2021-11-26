/*
    ? string
    * 특정 문자열을 다른 문자열로 치환하거나 삭제, 입력받은 데이터의 불필요요소(공백..)등을 없애기 위해.
*/

// ? 문자열 만드는 방법.

/*
    ! 리터럴 방식 - var str = "Hello";

    ! StringClass 객체 생성방식 var str = new String("Hello");
    ? 리터럴방식을 사용해도 js가 해석할 때 자동 변환.
    * ex> alert("hello".length); => alert(new String("hello").length);
*/

// *case.1 입력받은 문자열 길이 알아내기.(length)
// var str = prompt("문자를 입력");
// console.log("문자열 길이는 = " + str.length);

/*
    ? 특정 위치의 문자 구하기(charAt)
    ! charAt(indexNumber) :
    ! 매개변수 - index 문자열 위치 index value(index = 0부터 시작)
    ? ex > var ch = "ABCDEF"; charAt(0) = A, charAt(5) = F.
    ! return -> index위치의 문자.
*/

// *case. 3 #panel에 입력받은 문자열을 1초마다 한 문자씩 출력. 다되면 "종료" 메시지 출력.
function print1ch(){
    var str = prompt("문자를 입력");
    var charCount = 0;

    var timerID = setInterval(function(){
        $("#panel").text(str.charAt(charCount));
        charCount ++;

        // todo. 종료구문.
        if(charCount >= str.length){
            clearInterval(timerID);
            alert('종료.');
        }

    },1000);
}