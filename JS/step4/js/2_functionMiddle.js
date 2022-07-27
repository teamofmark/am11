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
// ? 지역변수처럼 함수 내부에서만 활용하는 함수. 중복코드나 코드그룹핑을 내부에서 처리해야 될 경우.

// *case. 1 1초에 한 번씩 'hi' 출력.
function sayHi(){
    var count = 0;
    setInterval(function(){
        count++;
        document.write(count + 'hi <br>');
    },1000);
}
// !주의점
function innerFunctionTest(){
    var a = 10;
    var b = 20;
    var c = 30;
    function outerFunc(){
        var b = 20;
        var c = 30;
        function innerFunc(){
            var c= 3000;
            console.log('1. =' + a);
            console.log('2. =' + b);
            console.log('3. =' + c);
        }
        innerFunc();
    }
    outerFunc();
}

// *case. 2 callBack 함수를 이용한 사칙연산계산기 만들기.
function calculatorCallBack(op, numb1, numb2, callBack){
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
    function add(numb1, numb2){
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
    // ? 내부중첩함수 : 처리부.
    callBack(result);
}
function addPrint(value){
    document.write('두 수의 합은 ? ' + value + '입니다.');
}

// *case. 3 return 대신 callback?
// ? 그렇지 않다. 구현부와 처리부가 나눠져 있지 않은 상태 일 때는 단순 return이 더 편리하다.
function sum(numb1, numb2){
    return numb1 + numb2;
}
// var result = sum(10,20);

function sum2(numb1, numb2, callBack){
    var temp = numb1 + numb2;
    callBack(temp);
}
function result(value){
    document.write(value);
}
// *case. 4 동기(sync) 와 비동기(async)처리

// * 동기 - 함수 호출 이후 끝날 때 까지 다음 구문 수행 안됨.
function sync(){
    alert('hi');
    document.write('End Alert');
    console.log('End Alert & write');
}
// *비동기 - 함수 호출 이후 끝나는 여부와 상관없이 다음 구문 수행.
// ! 함수 호출 이후 끝나는 것과 상관없이 다음 구문 수행.
// ? callBack함수를 많이 쓸 수밖에 없는 방식. / 함수 실행이 다 완료된 이후에 실행 될 수 있도록 처리.
function async(){
    var count = 1;
    setInterval(function(){
        document.write('2. count = ' + count + '<br>');
    },3000);
    document.write('1. 동작과 상관없이 바로 실행');
}

// *case.5 클로저 (closer(x) / closure(o))
// ? 함수내부에 만든 지역변수가 안죽고 계속해서 값을 유지하고 있는 상태.

// * 일반함수
function addCount(){
    var count = 0;
    count ++;
    return count;
}
// * 클로저 사용시
function createCount(){
    var count = 0;
    function addCount(){
        count ++;
        return count;
    }
    return addCount;
}