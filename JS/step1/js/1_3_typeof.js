/*
    ? 자료형
    * 1. 숫자형 (Number)
    * 정수형 10진수(일상생활 사용 숫자 소수점x) ex > 33, 44
    * 정수형 16진수(0x ~ 로 시작하여 0~9, A~F 로 모든 숫자 표현) ex> #f00 색상코드
    * 실수형 (소수점을 갖는 숫자) ex > 60.6 

    * 2. 문자형 (String)
    * 일상생활 사용 글자
    
    * 3. 논리형 (Boolean)
    * true(참) or false(거짓)
    * true : 맞음, 1, 같음, 진실, 성공
    * false : 틀림, 0, 같지않음, 거짓, 실패
    
    * 4. undefined
    * 미정의된(초기화 되지 않은, 기본초기값), 들어오지 않은 자료형.
    * ex.1 > var data1; alert('data1 =' + data1);
    * ex.2 >
    function exFunc(data1){
        alert("data1 = " + data1);
    }
    exFunc();

    * 5. null
    * 아무것도 참조하지 않은 자료형. (객체를 담기위한 변수를 초기화 하는 상태)
    * ex > var data = null;

    ! 이외 함수(function), 객체(object) 등이 존재.
*/

// *case.1 자신이 가장 좋아하는 숫자를 favorNumber라는 변수에 담아 자료형을 check.
function testTypeof(){
    var favorNumber = 1;
    console.log(typeof(favorNumber));
}

// *case.2 자신의 영어이름을 engName 변수에 담아 자료형을 check 해보자.
function textTypeof(){
    var engName = 'Mark';
    console.log('engName 의 자료 유형은 ' + typeof(engName) + '입니다.');
}

// *case.3 현재 자신이 춥다,아니다를 cold 변수에 담아 자료형으로 check 해보자.
function check1(){
    var cold = false;
    console.log('현재 내가 추운가? ' +  cold + ' 의 자료유형은 ' + typeof(cold));
}
// *case.4 현재 sign in 상태가 아니다를 signInStatus 변수에 담아 자료형을 check.
function check2(){
    var userID = 'Mark';
    var signInStatus = false;
    console.log(userID + '님 의 접속 상태는' + signInStatus + '입니다.');
}
// *case.5 test변수를 선언하고 초기화 하지 않은 상태에서 자료형을 check 해보자.
function check3(){
    var test;
    console.log(typeof(test) + ' = ' + test);
}
// *case.6 obj변수에 null로 초기화 하여 자료형을 check 해보자.
function check4(){
    var obj = null;
    console.log(typeof(obj) + ' = ' + obj);
}