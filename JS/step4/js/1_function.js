/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

//* exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기

// document.write("안녕. 방가와","<br>");
// document.write("안녕. 방가와","<br>");
// document.write("안녕. 방가와","<br>");

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

// *case.1 매개변수(Parameter)가 있는 함수 만들기.
// ?함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1,num2){
    var result = num1 + num2;
    // var result = 101 + 102;
    document.write('두 수의 합은 = ' + result);
}
// *case.2 매개변수의 자리가 없어도 있는 것처럼. - arguments(가변인자함수 - 배열인듯 배열아닌 배열같은)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    // console.log(typeof(arguments) + ' : ' + arguments.length + "ex > " + arguments[0]);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
function sumAllEX(){
    var willReturn = 0;
    for (var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}
// *case.3 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 활용 출력.
function showInfo(){
    console.log(" = " + arguments[0]);
    console.log(" = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}

/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
// *case.3 두 수를 매개변수로 받고, 두 값을 더한 결과값을 return 하는 함수.
function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result;
}
// var value = sumReturn1(13,26);
// alert(value);

// *case.4 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(window.prompt("숫자만 입력해라."));
        if(value == 0){
            document.write("종료");
            // break;
            return;
        }
        sum += value;
        document.write(count + ". " + sum + "<br>");
        count++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo. 구구단 출력을 매개변수를 통해 함수로 전달하기.
function printGugudan(numb){
    for (var i = 2; i <= numb; i++){ //? 
        document.write(i + '단 출력',"<br>"); //?
        for(var m = 1; m <= numb; m++){ //?
            document.write(i + '*' + m + " = " + (i*m), "<br>"); //?
        }
        document.write("<br>"); //?
    }
}
// todo. 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    * document.write("1 결과 =" + calculator("+", 20, 10));
    * document.write("2 결과 =" + calculator("-", 20, 10));
    * document.write("3 결과 =" + calculator("*", 20, 10));
    * document.write("4 결과 =" + calculator("/", 20, 10));
    * document.write("5 결과 =" + calculator("%", 20, 10));
    //* 결과 
    결과 = 30
    결과 = 10
    결과 = 200
    결과 = 2
    결과 = 잘못된 연산자 입니다.
*/
function calculator(op,numb1,numb2){
    var result = '';
    switch(op){
        case "+":
            result = numb1+numb2;
            break;
        case "-":
            result = numb1-numb2;
            break;
        case "*":
            result = numb1*numb2;
            break;
        case "/":
            result = numb1/numb2;
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
// todo. 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 보다 편하게 사용할 수 있게 만들기.
/* 
//* 실행구문
* document.write(calculator2("+", 20, 10) + "<br>");
* document.write(add(20, 10) + "<br>");
* document.write(sub(20, 10) + "<br>");
* document.write(mul(20, 10) + "<br>");
* document.write(div(20, 10) + "<br>");
*/
function calculator2(op, numb1, numb2){
    // ! HINT : return의 의미를 잘 떠올리기 ^-^
    var result = '';
    switch(op){
        case "+":
            result =  add(numb1,numb2);//? numb1 + numb2; -> add함수를 불러서 실행.
            break; 
        case "-":
            result =  sub(numb1,numb2);//? numb1 - numb2; -> sub함수를 불러서 실행.
            break;
        case "*":
            result =  mul(numb1,numb2);//? numb1 * numb2; -> mul함수를 불러서 실행.
            break;
        case "/":
            result =  div(numb1,numb2);//? numb1 / numb2; -> div함수를 불러서 실행.
            break;
        default:
            result = "잘못된 연산자입니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){
    var addResult = numb1 + numb2;
    return addResult;
    //! or only return numb1 + numb2;
}
//* document.write(add(20, 10) + "<br>");

function sub(numb1,numb2){
    var subResult = numb1 - numb2;
    return subResult;
}
//* document.write(sub(20, 10) + "<br>");

function mul(numb1,numb2){
    var mulResult = numb1 * numb2;
    return mulResult;
}
//* document.write(mul(20, 10) + "<br>");

function div(numb1,numb2){
    var divResult = numb1 / numb2;
    return divResult;
}
//* document.write(div(20, 10) + "<br>");

// *case. 5 함수를 변수에 담기.
function hello(name){
    console.log(name + "환영합니다. 고객님.");
}
var func = hello;

// *case. 6 매개변수 값으로 함수를 사용하기.
function h1(){
    console.log("Hello.");
}
function h2(){
    console.log("안녕하세요.");
}
function h3(){
    console.log("こんにちは");
}
function execute(func){
    func();
    console.log(func);
    return func;
}
// *case. 7 버튼 클릭 시 매개변수 값으로 넘긴 함수 호출하기.
function welcome(){
    alert("환영합니다. 방가와.");
}
// $(document).ready(function(){

// });
$(function(){
    $("#runEx7").click(welcome);
});
// *case. 8 1초마다 매개변수값으로 넘긴 익명 함수 호출.
function loopStart(){
    setInterval(function(){
        document.write("hi, hello");
    },1000);
}
// todo. 함수를 매개변수로 전달받아 반복호출하기.
function callFunctionTenTimes(otherFunction){
    for(var i = 0; i < 10; i++){
        otherFunction();
    }
}
function justFunction(){
    document.write("hello world","<br>");
}
// *case. 9 return Value로 함수를 사용하기
function createHello(){
    function hello(user){
        document.write(user + 'welcome!');
    }
    return hello;
}
var result = createHello();
// ! result == hello.