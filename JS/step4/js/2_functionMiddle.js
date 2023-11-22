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
// *case. 1 내부중첩함수
function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 200;
        var c = 300;
        function innerFunc(){
            var c = 3000;
            console.log('1. = ' + a);
            console.log('2. = ' + b);
            console.log('3. = ' + c);
        }
        innerFunc();
    }
    outerFunc();
}
// *case. 2 callBack 함수를 이용한 사칙연산 계산기 만들기.
function calculatorCallBack(op, numb1, numb2, callBack){
    var result = '';
    switch(op){
        case "+":{
            result = add(numb1,numb2);
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
            result = "잘못된 입력 값입니다.";
            break;
        }
    }
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
// *case. 3 그러면... return 대신 callBack?
// ? 그렇지않다. 구현부와 처리부가 나눠져 있지 않은 상태 일때 단순 value는 return이 더편함.
/*
function sum(numb1, numb2){
    return numb1 + numb2;
}
var result = sum(10,20);
document.write('두 수 합' + result);
*/

function sum2(numb1,numb2,callBack){
    var temp = numb1 + numb2;
    callBack(temp);
}
function result(value){
    document.write('두 수 합' + value);
}
// *case. 4 클로저(closure)
// ? 함수내부에 만든 지역변수가 죽지않고 계속해서 값을 유지하여 함수의 종료를 막는 현상.

// * 일반함수
function addCount(){
    var count = 0;
    count ++;
    return count;
}
// *closure
function createCount(){
    var count = 0;
    function addCount(){
        count ++;
        return count;
    }
    return addCount;
}
var counter = createCount();
//? createCount 함수 호출과 동시에 지역변수 count = 0을 초기화 및 생성.
//? 이후 내부 함수 addcount를 생성. 그것자체를 return 한후 함수 종료.
//todo. counter();가 실행되면 addCount(); 함수가 실행되는것과 같은 결과.
/*
    ? 왜 안죽지?
    ! createCount 함수가 종료 되더라도 내부함수인 addCount 안에서 createCount의 지역변수인 count를 사용중인 상태.
    ! 이 상태에서 "외부"로 return 되기때문에 해당 지역변수는 삭제되지 않고 남아있으니(클로저현상)
    ! addCount(클로저함수) 가 실행 될 때마다 해당 지역변수는 계속 값을 갱신하게 된다.
*/
// *case.5-1 사용중인 함수를 리턴해야만 클로저는 아니다.
$(document).ready(function(){
    $("#btnStart").click(function(){
        start(); //? 1. start함수 실행.
        document.write('count Start');
    });
});
function start(){
    var count = 0; //? 2. count 변수 초기화 및 생성.
    setInterval(function(){
        count ++; //? 3. start 함수 내부 setInterval core 함수가 count변수 사용중
        document.write(count); //? 4. 계속 증가되는(사용중인) count가 1초간격으로 출력.
    }, 1000);
}//? 5. start함수가 종료되어도 삭제되지 않고 계속 유지되면서 값이 이어져간다.(closure).

// *case. 5-2 익명함수 이용한 클로저
function outerFunction(name){
    var output = 'hello' + name + '..!'; //? 1. outerFunction 함수 실행시 output 변수 초기화 및 생성.
    return function(){  //? 2. 익명함수를 outerFunction이 실행된 위치로 return.
        return output; //? 3. 익명함수로 지역변수 output을 return (closure).
    }
}

var first = outerFunction('Java Script');
var second = outerFunction('JQuery');

/*
    ! closure를 사용하면 좋은것?
    * 연관성 있는 변수와 기능을 하나의 함수로 묶어 놓고 독립적으로 여러개(번)을 실행 시킬 수 있다.
    ? 함수 내부에 data가 만들어지기 때문에 함수 외부에서 수정할 수 없는 data를 생성하는것도 가능하다.
    ? (privateData)
*/