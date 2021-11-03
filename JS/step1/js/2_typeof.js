/*
    ? 자료형
    * 1. 숫자형(Number) : 정수형(10진,16진...), 실수형..(60.66..) = 연산이 가능
    * 2. 문자형(String) : 숫자를 포함한 모든 사용 글자.
    * 3. 논리형(Boolean) : 참(true = 1) 과 거짓(false = 0)
    ! 객관적판단필요 : ex> sign in = 로그인을 하지 않은 상태(false)일 때 id,password field를 보여야 한다(true).
    ! 로그인을 한 상태(true)일때 id,password field를 보여주지 말아야 한다.(false)
    ! 회원가입을 하지 않은사람이 로그인을 수행하면(false) ? 회원가입을 진행하세요.
    * 4. 미정의형(undefined) : 정의되지 않은(초기화 되지 않은, 기본 초기값) 자료형태. (결과)
    * 5. 무형(null) : 아무것도 참조되지 않은 자료형태. (시작전)
    * etc. 함수형(function), 객체형(object)
*/

// *case.1 자신이 가장 좋아하는 숫자를 favorNumber 변수에 담아 자료형을 check.
function testTypeof(){
    var favorNumber = 1;
    console.log(favorNumber + ' = ' + typeof(favorNumber));
    // ! 1 + 1 = 2. '1' + 2 = '12' 12 typeof('1');
}