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
// ? 지역변수처럼 함수내부에서만 활용하는 함수. 중복 코드나 코드그룹핑을 내부에서 처리해야 할 경우
// case. 1 1초에 한번씩 hi 출력.
function sayHi(){
    var count = 0;
    setInterval(function(){
        count++;
        document.write(count + ". hi <br>");
    },1000);
}
// case. 2 주의할 점
function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 200;
        var c = 300;
        function innerFunc(){
            var c = 3000;
            console.log("1. = " + a);
            console.log("2. = " + b);
            console.log("3. = " + c);
        }
        innerFunc();
    }
    outerFunc(); 
}
// case. 3 callBack 함수를 이용한 사칙연산기 만들기
function calculatorCallBack(op,numb1,numb2,callBack){
    var result = "";
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
            result = "잘못된 입력값 입니다.";
            break;
        }
    }
    callBack(result);
};
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
    document.write("두 수의 합은"+ value);
}
function subPrint(value){
    document.write("두 수의 차는"+ value);
}
function mulPrint(value){
    document.write("두 수의 곱은"+ value);
}
function divPrint(value){
    document.write("두 수의 나누기는"+ value);
}
// case. 4 return 대신 callBack?
function sum(numb1, numb2){
    return numb1 + numb2;
}
var result = sum(10,20);
document.write('두 수 합 : ' + result);

function sum1(numb1, numb2, callBack){
    var temp = numb1 + numb2;
    callBack(temp);
}
function resultFunc(value){
    document.write("두 수 합 : " + value);
}
sum1(10,20,resultFunc);
// ? 그렇지 않다. 구현부와 처리부가 나눠져있지 않은 상태 일때 단순 value 전달은 return이 훠어얼씬 편하다.

// case. 5 동기와 비동기처리
// ? 동기(sync) - 함수 호출 이후 끝날 때 까지 다음 구문이 수행 되지 않은 처리 형태.
function sync(){
    alert('hi');
    document.write('EndAlert');
    console.log('End Alert & write');
}
// ? 비동기(async) - 함수 호출 이후 끝나는 여부와 상관없이 다음 구문이 수행 될 수 있는 처리 형태.
function async(){
    var count = 1;
    setInterval(function(){
        document.write('2. Count = ' + count + '<br>');
    },3000);
    document.write('1. setInterval동작과 상관없이 바로 수행.',"<br>");
}