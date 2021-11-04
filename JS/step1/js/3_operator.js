/*
    ? 기본사칙연산자.
    * +, -, *, /, % 나머지, ()우선.

    ? 문자열연산자.
    * + 만 가능.

    ? 복합 대입 연산자.
    * +=, -=, *=, /=, %= : 기존 변수의 값에 값을 연산함.
    * var a = a + 10; -> a += 10;
    
    ? 증감 연산자.
    * ++, -- : 1씩 증가 및 감소.

    ? 조건비교 연산자.
    * >=, <=, >, <, ==(같다), !=(다르다) ? ! : 논리부정연산자.(ex> true -> !true -> false)

    ? 논리 연산자.
    * && : 그리고, || 이거나

    ? 접근 연산자.
    * .
*/
// *case.1 10이 저장된 변수a, 숫자20, 그리고 30을 더해서 result 변수에 저장 후 출력.
function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}
// *case.2 50이 저장된 변수a, 20이 저장된 변수 b. 를 곱한 값을 10으로 나누어 result변수에 저장 후 출력
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b / 10;
    console.log(result);
}
// todo.1 숫자 5를 2로 나누었을 때 나머지 값이 몇인지 result 변수에 저장 후 출력.
function numbOP3(){
    var result = 5%2;
    console.log(result);
}
// todo.2 'hello' 가 담긴 변수 a와 'WEB'이 담긴 변수 b를 합쳐 'Hello WEB'을 출력.
function stringOP(){
    var a = 'Hello';
    var b = 'WEB';
    console.log(a + b);
}
// *case.3 ul, li 구조의 tag를 html page에 넣기.
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JS..!</li>';
    list += '</ul>';

    document.body.innerHTML = list;
}
// *case.4 연산자가 뒤로 올 경우.
function numberPlusAfter(){
    var number = 10; //? number 라는 변수의 선언 및 10으로 초기화.
    alert(number++); //? 10을 출력후 ++증가. 다시 number로-
    alert(number++); //? 11을 출력후 ++증가. 다시 number로-
    alert(number++); //? 12를 출력후 ++증가. 다시 number로 = 최종 13.
    console.log(number);
}

// *case.5 연산자가 앞으로 올 경우/
function numberPlusBefore(){
    var number = 10;
    alert(++number); //? 10에 1을 더해서 (11) 출력후, 다시 number 로 -
    alert(++number); //? 11에 1을 더해서 (12) 출력후, 다시 number 로 -
    alert(++number); //? 12에 1을 더해서 (13) 출력후, 다시 number 로 -
}
// todo. 증감연산자복합사용
function numberPlusTodo(){
    var number = 10;
    alert(number++); //? 출력: 10 / 이후 : 11
    alert(--number); //? 출력: 10 / 이후 : 10
    alert(++number); //? 출력: 11 / 이후 : 11
    alert(number--); //? 출력: 11 / 이후 : 10
    console.log(number); //? 최종 : 10
}

// *case.6 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b의 크기를 비교하여 결과출력.
function compareOperator1(){
    var a = 10, b = 20;
    var result = a > b;
    console.log("10 > 20 = " + result);
}
// *case.7 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b가 같은지 비교및 결과출력.
function compareOperator2(){
    var a = 10;
    var b = 20;
    var result = a == b;
    console.log("10 = 20 ? " + result);
}
// todo. 숫자 10이 담긴 변수a와 숫자 20이 담긴 변수b가 "다른지" 비교하여 결과출력.
function compareOperator3(){
    var a = 10;
    var b = 20;
    var result = a!=b;
    console.log("10 != 20 ? " + result);
}

/* 
    * case.8 a변수에는 '여자, b변수에는 '웹디자이너' 라는 값이 저장되어 있다.
    * 담겨있는 두 값이 모두 맞는지 result 변수에 저장 후 출력.
*/
function logicalOperator1(){
    var a = '여자';
    var b = '웹퍼블리셔';
    var result = (a=='여자')&&(b=='웹디자이너');
    console.log('result = ' + result);
}
/*
    * case.9 a변수에는 '남자', b변수에는 '웹퍼블리셔' 라는 값이 저장되어 있다.
    * 담겨있는 두 값중 하나라도 맞는지 result 변수에 저장 후 출력.
*/
function logicalOperator2(){
    var a = '여자';
    var b = '웹퍼블리셔';
    var result = (a=='남자')||(b == '웹퍼블리셔');
    console.log('result = ' + result);
}
// todo. 다음 코드의 결과를 예상한 다음 출력.
function compareOperator4(){
    console.log(30 > 20 > 10); //? 예상결과 : true / 출력결과 : false
}

// todo. 정상적인 결과가 출력되도록 코드 수정.
function compareOperator4R(){
    console.log(30 > 20 && 20 > 10);
}
/*
    ! (30 > 20 > 10); 의 결과식은 거짓으로 판별
    ? (30 > 20) > 10, true > 10, 1> 10, false.
    *그래서 논리곱연산자로 좌,우측을 따로 비교 후 결과 값 산출.
*/