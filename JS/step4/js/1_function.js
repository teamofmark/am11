/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/


//* exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기

//document.write("안녕. 방가와","<br>");
//document.write("안녕. 방가와","<br>");
//document.write("안녕. 방가와","<br>");

function helloExp(){ //! 반복문 사용시
    var comment = "안녕. 방가와!"
    for (var i = 0; i < 3; i++) {
        document.write(comment,"<br>");
    }
}

function helloFunc(){//!함수로 호출시
    var comment = "안녕. 방가와!"
    document.write(comment,"<br>");
}
//helloFunc();helloFunc();helloFunc();

//* exp.2 기존의 반절피라미드 2회를 함수를 만들어 간결하게.
/*
var star = '';
for (var i = 1; i <= 10; i++) { 
    for (var j = 0; j < i; j++) { 
        star += '*'; 
    }
    star += '<br>';
}
document.write(star);
var star = '';
for (var i = 1; i <= 10; i++) { 
    for (var j = 0; j < i; j++) { 
        star += '*'; 
    }
    star += '<br>';
}
document.write(star);

function starPrint(){
    var star = '';
    for (var i = 1; i <= 10; i++) { 
        for (var j = 0; j < i; j++) { 
            star += '*'; 
        }
        star += '<br>';
    }
    document.write(star);
}
starPrint();starPrint();
*/
// *exp.3 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.

function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// ?  NaN(Not a Number).표현 불가능한 수치형 결과를 나타내는 값. 은 연산 과정에서 잘못된 입력을 받았음을 나타내는 기호

// *exp.4 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
/*
    ?arguments? 
    * arguments 객체는 모든 함수 안에서 사용하는 지역변수다.
    * arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객체의
    * 함수에 전달된 각 인수항목을 포함한다.
    * 단 arguments는 Array와 비슷해보이지만 length를 구하는것을 제외
    * Array와 다르다. 하지만 필요에 따라 Array로 변환하여 쓸수있다.
*/

// !ex.1
// function sumAll(){
//     alert(typeof (arguments) + ':' + arguments.length);
//     // ? arguments는 배열같은 매개변수.
// }
// sumAll(1,2,3,4,5,6,7,8,9);
//? 함수를 호출할 때, 9개의 매개변수를 입력했기때문에, length가 9가 나옴

// !ex.2
function sumAll(){
    var willReturn = 0;
    for (var i in arguments){
        //? for in 반복문은 IE9 이상에서만 가능. vue.js 등의 frontend framework에서 사용.
        willReturn += arguments[i];
        // willReturn 이라는 변수에 arguments(매개변수의 배열) 내의 값을 더해서 대입해라. 배열의 갯수만큼.
    }    
    return willReturn;
    // 나온값을 리턴하라.
}
// alert(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9)); // sumAll이라는 함수를 출력하라 ( 매개변수들을 넣어 나온 함수의 결과)

// *exp.4 매개변수의 자리가 없는 곳에 입력된 매개변수 를 arguments를 이용하여 출력하게 만들어보자.

function showInfo(){
    console.log('0 = '+ arguments[0]);
    console.log('1 = ' + arguments[1]);
    alert(arguments[0] + '의 나이는' + arguments[1]);
}

/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할 수 없다.
    * 이때 매개변수를 활용하면 함수 내부로 데이터를 전달 할 수 있는데, 리턴값은 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과값을
    * 함수 외부로 전달하기 위해 사용 하는 출력값.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        * function f(x) { return x * x; }
        * alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/

// *exp.5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수를 만들어보자.
function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result; //! 외부로 출력하는 값. 기본 호출부리턴.
}
// * alert(sumReturn1(10,20));
// * console.log(sumReturn1(10,20));
// * var value = sumReturn1(13,26);

// *exp.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// ! 단 입력값이 0이면 즉시 실행을 멈추게 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만입력.'));
        if(value == 0){
            document.write('종료');
            break;
            /*
            * return 은 함수를 빠져나옴.
            
            * break는 루프를 빠져나오기 때문에
            * 총 x 번 실행함 구문이 출력.
            
            * continue는 조건이 참일시 상단무한반복.
            * = prompt 계속출력.
            */
        }
        sum += value;
        document.write(count + '. ' + sum + '<br>');
        count++;
    }
    document.write('총 ' + count + '번 실행함.');
}

// todo.1 구구단 출력을 함수로 만들기. (9단까지)

function printGugudan(){
    for (let i = 2; i <= 9; i++) {
        document.write(i + "단 출력", "<br>");
        for(var m = 1; m <= 9; m++){
            document.write(i + "*" + m + "=" +(i*m), "<br>");
        }
        document.write("<br>");
    }
}
// todo.2 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    ? document.write("1 결과 =" + calculator("+", 20, 10));
    ? document.write("2 결과 =" + calculator("-", 20, 10));
    ? document.write("3 결과 =" + calculator("*", 20, 10));
    ? document.write("4 결과 =" + calculator("/", 20, 10));
    ? document.write("5 결과 =" + calculator("%", 20, 10));
    //* 결과 
    ? 결과 = 30
    ? 결과 = 10
    ? 결과 = 200
    ? 결과 = 2
    ? 결과 = 잘못된 연산자 입니다.
*/
function calculator(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+":
            result = numb1 + numb2;
            break;
        case "-":
            result = numb1 - numb2;
            break;
        case "*":
            result = numb1 * numb2;
            break;
        case "/":
            result = numb1 / numb2;
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
// document.write("1 결과 = " + calculator("+",20,10) + '<br>');
// document.write("2 결과 = " + calculator("-",20,10) + '<br>');
// document.write("3 결과 = " + calculator("*",20,10) + '<br>');
// document.write("4 결과 = " + calculator("/",20,10) + '<br>');
// document.write("5 결과 = " + calculator("%",20,10) + '<br>');

function calculator2(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+":
            result = add(numb1,numb2);
            break;
        case "-" :
            result = sub(numb1,numb2);
            break;
        case "*" :
            result = mul(numb1,numb2);
            break;
        case "/" :
            result = div(numb1,numb2);
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
function add(numb1, numb2){
    var addResult = numb1 + numb2;
    return addResult;
    //! or only return numb1 + numb2;
}
function sub(numb1, numb2){
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1, numb2){
    var mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1, numb2){
    var divResult = numb1 / numb2;
    return divResult;
}
// *ex.6 함수를 변수에 담기.
function hello(name){
    console.log(name + 'welcome');
}
// hello('Mark');

var func = hello;

// func('Mark');

// *ex.7 매개변수 값으로 함수를 사용하기.
function hi1(){
    console.log('Hello');
}
function hi2(){
    console.log('안녕하세요.');
}
function execute(func){
    func();
}
execute(hi1);
execute(hi2);

// *ex.8 button click시 매개변수 값으로 넘긴 함수호출.

function welcome(){
    alert('환영! 반갑!');
} 
$(document).ready(function(){
    $('#runEx8').click(welcome);
});

// *ex.9 1초마다 매개변수 값으로 넘긴 익명 함수 호출.
function loopStart(){
    setInterval(function(){
        console.log('hi,hello Interval');
    },1000);
}
// todo.4 함수를 매개변수로 전달받아 반복호출하기

function callFunctionTenTimes(otherFunction){
    for (var i = 0; i < 10; i++) {
        otherFunction
    }
    //? 매개변수로 otherFunction 전달.
    //? 전달받은 otherFunction 함수를 10번 출력하라.
}

// ?otherFunction = 문서에 'hello.'를 출력.
function writeHello(){
    document.write('Hello');
}
// *ex. 10 리턴값으로 함수를 사용.
function createHello(){
    function hello(user){
        document.write(user + 'welcome!');
    }
    return hello;
}
var result = createHello();

/*
? 리터럴
    * 현재까지 변수를 만들 때 사용하던 방식

    *ex 리터럴방식
    var age = 10, var name = "mark"
    
    *ex 객체방식
    var age = new Number(10);
    var name = new String("Mark");

    * ex.1 함수만드는 방법의 4가지
    var hello = function(name){ //? 리터럴방식
        alert(name + "hello");
    }
    hello("mark");

    function hello(name){ //? 일반함수방식
        alert(name + "hello");
    }
    hello("mark");

    var hello2 = new Function("name", "alert(name+'hello');"); //? 객체방식 (실용도없음)
    hello2("mark");

    (function(name){ //? 익명함수확장 (재사용이 목적이 아닌 다른 함수간의 충돌을 막기위함.)
        document.write(name + "님 환영합니다.");
    })("mark");

    *익명함수 와 일반함수 사용법
    ? 함수를 재사용 할 경우 일반함수, 아닐 경우 익명함수. (jquery etc8번참고)

    
*/