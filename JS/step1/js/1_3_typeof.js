/*
    ? 자료형
    * 1. 숫자형(Number)
    * - 정수형태의 10진수(일상생활 사용 숫자)
    * - 정수형태의 16진수(0x~로 시작하여 0~9,a~f로 모든 숫자 표현) ex> #f00 색상코드등
    * - 실수형태 (소수점을 갖는 숫자)
    
    * 2. 문자형(String)
    * - 일상생활 사용 문자. -> 숫자는 문자범위에 포함된다.
    * - ex> js -> '1' + '1' = '11' // 1 + 1 = 2 // '1' + 1 = '11'.
    
    * 3. 논리형(Boolean)
    * - true(참) / false(거짓)
    * - true : 맞음 -> 1
    * - false : 틀림 -> 0

    * 4. 미정의형(undefined)
    * - 미정의된(초기화 되지 않은, 기본 초기값) 들어오지 않은 자료형.
    * - ex.1 > var data1; alert('data1 =' + data1 );
    * 
        function exFunc(data1){
            alert("data1=" + data1);
        }
    * 5. 미참조형(null)
    * - 아무것도 참조하지 않은 자료형태. (객체를 담기위한 변수를 초기화 하는 상태)
    * ex> var data = null;
*/

// *case.1 자신이 가장 좋아하는 숫자를 favorNumber 변수에 담아 자료형 check 하기.
function testTypeof(){
    var favorNumber = 1;
    console.log('favorNumber 의 자료 유형은 ' + typeof(favorNumber) + '입니다.');
}

// todo.1 자신의 영어이름을 engName이라는 변수에 담아 자료형 check하기.
function textTypeof(){
    var engName = 'Mark';
    console.log('engName의 자료 유형은' + typeof(engName) + '유형 이고, 값은 ' + engName + '입니다.')
}

// todo.2 현재 자신이 춥다(true), 아니다(false)를 cold 변수에 담아 자료형을 check하기.
function booleanCheck(){
    var cold = false;
    console.log(typeof(cold) + '=' + cold);
}
// todo.3 현재 로그인 상태가 아니다를 loginStatus 변수에 담아 자료형을 check 해보자.


// todo.4 test 변수를 선언하고 초기화 하지 않은 상태에서 자료형을 check 해보자.


// todo.5 obj 변수에 객체를 담을 예정이니 null로 초기화해서 자료형을 check 해보자.