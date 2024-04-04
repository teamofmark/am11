/*
    ! 함수의 종류
    * 큰 분류상 사용자 정의함수 (function name(){}) js core function(기본제공되는함수)로 나뉜다.

    ? 큰 분류 이하 용도에 따른 함수 종류
    * 1. 일반 함수 - 지금까지 우리가 썼던 함수들.
    * 2. 중첩 함수 - 함수 안에 함수가 또 있는 경우.
    * 3. 콜백 함수 - 함수 실행 결과값을 리턴이 아니라,
    * 매개변수를 통해 들어온 함수를 호출해서 넘겨주는 방식(방식자체의 이름 : callBack).
    * 넘어온 매개변수(함수)자체가 콜백함수(callBack function). (ex> plugin, api....)
    * 4. 클로저 함수 - 일반적인 함수의 경우 함수 호출에 의해 함수 내부의 실행구문을 모두 실행하게
    * 되면 함수 내부에서 만든 지역변수는 자동으로 사라지지만(죽는다.) 특정 경우에는 사라지지 않고
    * 남는 경우가 있는데 이 현상을 클로저(closure)라 부르고, 이 현상을 일으키는 함수를 클로저함수.
    * 5. 멤버함수 - 멤버함수는 클래스 내부에 만들어 지며 이를 보통 메서드(method)라고 함.
*/

// ! 중첩함수

// *case.1 중첩함수 사용시 주의할 것.
function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 200;
        var c = 300;
        function innerFunc(){
            var c = 3000;
            console.log('1 = ' + a);
            console.log('2 = ' + b);
            console.log('3 = ' + c);
        }
        innerFunc();
    }
    outerFunc();
}

// *case.2 callBack 함수를 이용한 사칙연산 계산기 만들기.

function calculatorCallBack(op, numb1, numb2, callBack){
    var result = "";

    switch(op){
        case "+":{
            result = add(numb1, numb2);
            break;
        }
        case "-":{
            result = sub(numb1,numb2);
            break;
        }
        case "*":{
            result = mul(numb1,numb2);
            break;
        }
        case "/":{
            result = div(numb1,numb2);
            break;
        }
        default:{
            result = "잘못된 입력값 입니다.";
            break;
        }
    }

    // ? 내부중첩함수 : 처리부

    callBack(result);
}

function add(numb1,numb2){
    return numb1 + numb2;
}
function sub(numb1,numb2){
    return numb1 - numb2;
}
function mul(numb1,numb2){
    return numb1 * numb2;
}
function div(numb1,numb2){
    return numb1 / numb2;
}
function addPrint(value){
    document.write('두 수의 합은' + value);
}
function subPrint(value){
    document.write('두 수의 차는' + value);
}
function mulPrint(value){
    document.write('두 수의 곱은' + value);
}
function divPrint(value){
    document.write('두 수의 나누기는' + value);
}
// ? callBack 함수.

// *case.3 return 대신 callBack?
// ? 그렇지 않다. 구현부와 처리부가 나눠져있지 않은 상태 일때  단순 value 는 return이 더편하다.
/*
// * 기존 단순 리턴.
function sum(numb1, numb2){
    return numb1 + numb2;
}
var result = sum(10,20);
document.write('두 수 합' + result);

// * 단순 리턴을 callBack으로 전환?

function sum(numb1, numb2, callBack){
    var temp = numb1 + numb2;
    callBack(temp);
}
function result(value){
    document.write('두 수 합 ' + value);
}
sum(10,20,result);
*/