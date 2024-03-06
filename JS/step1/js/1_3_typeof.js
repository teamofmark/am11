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
// *case. 1 자신이 가장 좋아하는 숫자를 favorNumber변수에 담아 자료형을 check 해보자.
function testTypeof(){
    var favorNumber = 1;
    console.log(favorNumber + '의 자료형은' + typeof(favorNumber) + '입니다.');
}
// *case. 2 자신의 영어이름을 engName 변수에 담아 자료형을 check 해보자.
function textTypeof(){
    var engName = 'Mark';
    console.log(typeof(engName));
}
// *case. 3 현재 로그인 상태가 아니다를 loginStatus 변수에 담아 자료형 check.
function checkStatus(){
    var loginStatus = false;
    console.log("현재 login 상태는" + loginStatus + ' = ' + typeof(loginStatus));
}
// *case. 4 변수를 선언만 하고 자료형을 check.
function varData(){
    var test;
    console.log('초기화 하지 않은 변수의 자료형은' + typeof(test) + '입니다.');
}
// ?etc. 1 null check.
function nullCheck(){
    var obj = null;
    console.log("obj에 담긴 값의 자료형은" + typeof(obj) + "입니다.");
}