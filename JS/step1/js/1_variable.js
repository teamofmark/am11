/*
    ? 변수(variable) : data를 저장하는 장소. = 읽고 쓸 수 있는 장소.

    * sign in Status를 저장.(했는가? 안했는가?)
    * 사용자가 선택한 항목을 저장.
    * admin으로 관리하는 항목을 저장.
    * 쇼핑몰의 cart(장바구니) 목록을 저장.
    * 게시글 등을 저장.
    
    ! 주의사항
    ! 숫자로 시작하지 않기.
    ! 대,소문자 구분하여 사용.
    ! 대문자가 아닌 소문자로 시작.(cap)
    ! 예약어 사용금지(ex> class="class", id="id"... class="position"....)
    ! 변하지 않는 환경 변수(상수변수 : 관리자아이디 ex> administrator)는 모두 대문자 DB_ADMINNAME
    ? 변경이되지 않게 유도 (변수는 기본적으로 값을 덮는것에 익숙하다. EX> a = 0; -> a = 1;)
    ? js는 상수변수개념자체가 없음. java 상수변수등을 문법상에서 아예 잠궈버린다.

    * 변수의 종류
    * 전역변수 - 전체 영역 사용가능.
    * 지역변수 - 정해진 영역 내 에서만 사용가능.
    * 매개변수 - 함수 외부에서 내부로 data 혹은 value를 전달 할 때 사용하는 변수.
    * 멤버변수 - 클래스 내부에 만들어 질 수 있고, 객체에서 사용하는 정보를 담는 변수.
*/ 

// *만들기
// ? var 변수이름 = 담길값;(선언 및 초기화) , var 변수이름; (선언)

// *case.1 
var userName = 'Mark';
var userAge = 41;

// *case.2
var cup = 'Coffee';
var cup = 'Green Tea';
cup = 'water';

// *case.3 동시선언 / 동시초기화

var radius, pi; // ? 한번에 선언
var radius = 10, pi = 3.14159265; //? 한번에 선언 및 초기화

// *case.4 연산자 사용시
var value = 10;

value = value + 20;

console.log('value 에 20을 더하면? = ' + value);
// ! 변수는 무엇이든 담을 수 있다.
// todo. 30을 만들자.