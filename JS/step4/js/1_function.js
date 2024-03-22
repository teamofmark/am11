/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// document.write("안녕? 방가와!");
// document.write("안녕? 방가와!");
// document.write("안녕? 방가와!");

// ! 현재까지의 진행
function helloExp(){
    var comment = "안녕? 방가와!";
    for (var i = 0; i < 30; i++){
        document.write(comment,"<br>");
    }
}
// *case. 1 매개변수(Parameter)가 있는 함수 만들기
// ? 매개변수 or 인자, parameter -> paramVal...
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 것을 해결하기 위함.

function helloExp(loopCount){
    var comment = "안녕? 방가와!";
    for (var i = 0; i < loopCount; i++){
        document.write(comment,"<br>");
    }
}
// *case.2 간단한 예 - 두개의 매개변수를 설정
function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합은 ? " + result);
}
// *case.3 매개변수의 자리가 없어도 있는것처럼 - arguments(가변인자함수)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역 변수.
    * arguments를 이요해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length 산출 등을 제외하고는 array와 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수는 있다.
*/

function sumAll(){
    console.log(typeof(arguments) + " : " + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}

// * case.4 "자신의 이름" 의 나이는 "자신의 나이" 세 입니다. 를 arguments를 이용해 출력.
function showInfo(){
    console.log("[0] = " + arguments[0]);
    console.log("[1] = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}

/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
// *case. 5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수를 만들어보자.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
// *case. 6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력 하는 함수 
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(prompt('숫자만'));
        if(value == 0){
            document.write("종료");
            return; //? returnBreak (x)
        }
        sum += value;
        document.write(count + ". " + sum + "<br>");
        count++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo. 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10) + "<br>");
    document.write("2 결과 =" + calculator("-", 20, 10) + "<br>");
    document.write("3 결과 =" + calculator("*", 20, 10) + "<br>");
    document.write("4 결과 =" + calculator("/", 20, 10) + "<br>");
    document.write("5 결과 =" + calculator("%", 20, 10) + "<br>");
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
// todo. 과제 - 위의 예제에 추가로 사칙연산부를 함수로 분리하여 보다 편하게 사용 할 수 있게 만들기.
/* 
//* 실행구문
document.write(calculator2("+", 20, 10) + "<br>");
document.write(add(20, 10) + "<br>");
document.write(sub(20, 10) + "<br>");
document.write(mul(20, 10) + "<br>");
document.write(div(20, 10) + "<br>");
*/
function calculator2(op,numb1,numb2){
    // ! 아래 기술된 함수를 끌어와서 각 연산 가능하게 만들기.
    // ! 위 예제처럼 이 함수 내에서 연산자 직접 표기 금지. ex> numb1 + numb2;
    var result = '';
    switch(op){
        case "+":
            result = add(numb1,numb2);
            break;
        case "-":
            result = sub(numb1,numb2);
            break;
        case "*":
            result = mul(numb1,numb2);
            break;
        case "/":
            result = div(numb1,numb2);
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){
    var addResult = numb1 + numb2;
    return addResult;
}
function sub(numb1,numb2){
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1,numb2){
    var mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1,numb2){
    var divResult = numb1 / numb2;
    return divResult;
}

// *case. 7 함수를 변수에 담기.
function hello(name){
    console.log(name + "환영합니다.");
}
var func = hello;

// *case. 8 매개변수 값으로 함수 사용하여 중계하기.
function hi1(){
    console.log("밥먹었니?");
}
function hi2(){
    console.log("니취팔로마?");
}
function execute(func){
    func();
}

// *case. 9 button click 시 매개변수 값으로 넘긴 함수 호출하기
function welcome(){
    alert("혼자왔니?");
}
$(document).ready(function(){
    $("#runEx9").click(welcome); //? jquery 문법
    // ? $("#runEx9") => document.body.getElementsById("runEx9") V/JS
}); 