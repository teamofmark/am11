/*
    ? 형변환
    * JS - "10" + "10" = 1010. 사람 - "10" + "10" = 20. 이러한 문제를 해결하기 위함.
    ! 암시적 형변환 - js 엔진이 자동으로 변환. 명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 형 + 문자 형 = 문자형. case.2
    * 2. 불린 형 + 문자 형 = 문자형. case.3
    * 3. 불린 형 + 숫자 형 = 숫자형. case.4
    
    ? 명시적 형변환 CASE
    * 1. 숫자 -> 문자. 
*/
// *case.1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt('나이입력.');
    var result = Number(age) + 20;
    // or parseInt(age). 실수변환 필요시 Number, 정수변환 필요시 parseInt
    console.log(result);
}
// *case.2 강제 숫자 - 문자형 변환

function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}

// *case.3 강제 불린 - 숫자형 변환

function forcedNumber(){
    var result = 2 + true; // true = 1, false = 0
    console.log(result);
}

// *case.4 강제 불린 - 문자형 변환

function forcedString2(){
    var a = '2' + true;
    console.log(a);
}