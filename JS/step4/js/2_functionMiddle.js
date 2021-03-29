/*
    ? 함수의 그룹핑
    복잡한 기능을 담은 컴포넌트일 수록 하나의 함수안에 동작 코드를 모두 작성하면, 이후 재사용 및 수정, 유지보수가
    어려워 지기 떄문에, 각 기능별 함수를 만들어 분리하여 만드는 것이 재사용, 수정, 유지보수에 용이하다.

    ! grouping 순서
    1. 중복 코드 및 재사용 코드 를 찾고 함수화
    2. 중복 코드에서 변경되지 않는 부분과 변경되는 부분확인.
    3. 변경되는 부분을 매개변수화.
*/
//* exp.1 다음은 10, 15, 19가 홀수인지 짝수인지 출력하는 예제입니다. 함수를 이용해 다듬어보기.
/*
var n1 = 10;
document.write(n1+"은 ");
if(n1%2){
    document.write("홀수입니다.<br>");
} else{
    document.write("짝수입니다.<br>");
}
var n2 = 15;
document.write(n2+"은 ");
if(n2%2){
    document.write("홀수입니다.<br>");
} else{
    document.write("짝수입니다.<br>");
}
var n3 = 19;
document.write(n3+"은 ");
if(n3%2){
    document.write("홀수입니다.<br>");
} else{
    document.write("짝수입니다.<br>");
}
*/
function oddOrEven(numb){
    document.write(numb + '은(는)');
    if(numb%2){
        document.write('홀수. <br>');
    }else{
        document.write('짝수. <br>');
    }
}
/*
    ! 함수의 종류

    *크게 나누면 사용자 정의 함수 와 자바스크립트 코어 함수(기본제공되는함수) 로 나뉜다.

    ? 용도에 따른 함수 종류
    * 1. 일반 함수 - 지금까지 썼던 함수들
    * 2. 중첩 함수 - 함수 안에 함수가 있는 경우 중첩 함수.
    * 3. 콜백 함수 - 함수 실행 결과값을 리턴이 아닌 매개변수로 넘어온 함수를 호출하여 넘겨주는 방식.
    * 이 방식 자체를 콜백 이라 하며, 넘어온 매개변수(함수)가 콜백 함수.
    * 4. 클로저 함수 - 일반적인 함수의 경우 함수 호출에 의해 함수 내부의 실행구문을 모두 실행하게 되면
    * 함수 내부에서 만든 지역변수가 자동으로 사라지지만 어떤 경우에는 사라지지 않고 남는 경우가 있는데.
    * 이 현상 을 클로저라 부르고, 이 현상을 일으키는 함수를 클로저함수 라고 한다.
    * 5. 멤버함수 - 멤버함수는 클래스 내부에 만들어지며, 메서드라 불린다. 
*/

// *case.1 중첩함수화 된 사칙연산 계산기
function calculatorCustom(op,numb1,numb2){
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
            result = '잘못된 연산식 입니다.';
            break;
    }
    return result;
    
    function add(numb1, numb2){
       return numb1 + numb2;
    }
    function sub(numb1, numb2){
        return numb1 - numb2;
    }
    function mul(numb1, numb2){
        return numb1 * numb2;
    }
    function div(numb1, numb2){
        return numb1 / numb2;
    }
}

// *case.2 중첩 함수 관련 주의 사항
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

// *ex.4 callBack 함수를 이용한 사칙연산 계산기 1
// ? 함수 내부의 처리 결과값을 함수 외부로 내보낼 때 사용. (return 같은)
function calculatorCallBack(op,numb1,numb2,callBack){//? callBack 이라는 매개변수 생성 = 선택한 로직처리함수
    var result = "";

    switch(op){
        case "+":{
            result = add(numb1, numb2);
            break;
        };
        case "-":{
            result = sub(numb1, numb2);
            break;
        };
        case "*":{
            result = mul(numb1, numb2);
            break;
        };
        case "/":{
            result = div(numb1, numb2);
            break;
        };
        default:{
            result = "잘못된 입력값입니다.";
        }
    }
    function add(numb1,numb2){
        return numb1 + numb2;
    }
    function sub(numb1, numb2){
       return numb1 - numb2;
    }
    function mul(numb1, numb2){
       return numb1 * numb2;
    }
    function div(numb1, numb2){
       return numb1 / numb2;
    }
    //! 여기까지가 logic 구현부
    
    callBack(result); //? 기존 계산결과로 리턴 되던 result를 callBack매개변수에 들어오는 처리함수를 호출하여 매개변수에 담음(ex. addPrint(value) = callBack(result)).

}
function addPrint(value){ //? 외부에 있는 add~divPrint 로직처리함수에서  value를 찾아 사용할 수 있음.
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
//! calculatorCallBack("op", numb1, numb2, addPrint); addPrint(처리함수)가 실행되면서 처리부분 실행.
//? 결과적으로 로직을 구현하는 부분과 처리부분을 나누어 서로를 조립 및 연결 하여 사용할 수있다.

// ? return 대신 callBack?
// ! 그렇지않다. 구현부와 처리부가 나눠져 있지 않은 단순 값 return은 return이 더 효율적이다.
/*
function sum(numb1, numb2){
    return numb1 + numb2;
}
var result = sum(10,20);
document.write('두 수 합' + result);

function sum1(numb1, numb2, callBack){
    var temp = numb1 + numb2;
    callBack(temp);
}
function result(value){
    document.write('두 수 합' + value);
}
sum(10, 20, result);
*/

// *case.3 동기와 비동기
// * 동기 - 함수 호출이후 끝날 때 까지 다음 구문 수행 안함.
function sync(){
    alert('hi');
    document.write('End Alert');
}
// *비동기 - 함수 호출 이후 끝나는 것과 상관없이 다음 구문 수행.
//          *callBack함수를 이용하여 완료 이후 실행될 수 있도록 처리.

function async(){
    var count = 1;
    setInterval(function(){
        document.write('2. count = ' + count + '<br>');
    },3000);

    document.write('1. 동작과 상관없이 바로 실행');
}

// *case.4 클로저
//? 함수내부에 만ㅇ든 지역변수가 사라지지 않고 계속해서 값을 유지하고 있는 상태.

// *일반함수 - 함수내 지역변수가 함수 호출 이후 사라진다.
function addCount(){
    var count = 0;
    count ++;
    return count;
}
// *클로저함수
function createCount(){
    var count = 0;
    function addCount(){
        count ++;
        return count;
    }
    return addCount;
}
var counter = createCount();

/*
    ? 왜 그런것인가.
    createCount 함수가 종료 되더라도 addCount 함수내부에서 count 라는 변수를 사용중인 상태에서 외부로 리턴 되기 때문에 
    삭제되지 않고 남아있기 때문이다. 이런 현상을 클로저 현상이라고 한다.
    또한 이런 내부함수를 클로저 함수라고 말한다.
*/
// *ex.4-1 사용중인 함수를 리턴해야만 클로저? 
$(document).ready(function(){
    $("#btnStart").click(function(){
        start();
        document.write('countStart');
    });
});
function start(){
    var count = 0;
    setInterval(function(){
        count ++;
        document.write(count);
    },1000);
}

/*
    ! 클로저 장점.
    ? 1. 연관 있는 변수와 기능을 하나의 함수로 묶어 독립적으로(여러개) 실행 시킬 수 있다.
    ? 2. 함수 내부에 data가 만들어지기 때문에 함수 외부에서 수정 할 수 없는 보호된 data(private)를 만들 수 있다.
*/