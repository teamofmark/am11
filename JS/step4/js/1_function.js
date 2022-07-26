/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.
*/


// *case.1 함수의 필요성
// document.write('안녕? 방가와.', "<br>");
// document.write('안녕? 방가와.', "<br>");
// document.write('안녕? 방가와.', "<br>");

// var comment = "안녕? 방가와.";
// for(var i = 0; i < 3; i++){
//     document.write(comment,'<br>');
// }
/*
var comment = "안녕? 방가와.";
var comment2 = "안녕하세요? 반갑습니다.";
var comment3 = "hi? hello! nice to meet u.";

function commentGuide(comment,count){
    for(var i = 0; i < count; i++){
        document.write(comment,'<br>');
    }
}
*/
// *case.2 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)을 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// *case.3 매개변수가 없어도 있는 것처럼...arguments(가변인자함수 - 배열은 아닌데 변수를 배열처럼 저장함)
/*
    ? arguments
    * 1. arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * 2. arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 3. 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 4. 필요에 따라 array로 추가변환하여 사용 할 수 있다.
*/

// *case.4 arguments Test
function sumAllEX(){
    console.log('입력한 자료형과 갯수는 '+typeof(arguments)+' : '+arguments.length);
    var willReturn = 0;
    for (var i in arguments){
        // var i = 0; i < arguments.length; i++....
        willReturn += arguments[i];
        // ? willReturn 이라는 변수에 arguments(매개변수의나열)내 값을 더하여 담기.
    }
    return willReturn; //? 최종결과값을 호출부(sumAllEX)로 리턴
}
// *case.5 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 를 arguments를 이용해 만들어보기.
function showInfo(){
    console.log("이름 =" + arguments[0]);
    console.log("나이 =" + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
}
/*
    ? return(리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return Value는 이와 반대되는 개념.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는(input) 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 외부로 전달하기 위해 사용하는 출력부.

    * function f(x){ return x * x; }

*/
// *case. 6 두 수를 매개변수로 입력받고, 두 값을 더한 결과를 리턴하는 함수.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result; //! 호.출.부.리.턴
}
// *case. 7 무한루프를 돌며 숫자를 입력받고, 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// ! 단, 입력값이 0이면 즉시 실행 중지.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만 입력하라'));
        if(value == 0){
            document.write('종료');
            return; //! break는 해당 로직범위를 빠져 나오지만 return은 함수를 빠져나온다.
        }

        sum += value;
        document.write(count + ". " + sum + "<br>");
        count++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo. 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    ? 실행구문
    todo. document.write(" 1. 결과 = " + calculator("+",20,10));
    todo. document.write(" 2. 결과 = " + calculator("-",20,10));
    todo. document.write(" 3. 결과 = " + calculator("*",20,10));
    todo. document.write(" 4. 결과 = " + calculator("/",20,10));
    todo. document.write(" 5. 결과 = " + calculator("%",20,10));

    ? 결과
    * 결과 = 30
    * 결과 = 10
    * 결과 = 200
    * 결과 = 2
    * 결과 = 잘못된 연산자입니다.
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

// todo.위의 예제에 추가로 사칙연산부를 함수로 변환하여 보다 편하게 사용 할 수 있게 만들기.

/*
    ? 실행구문
    * document.write(" 1. 결과 = " + calculator("+",20,10));(이전 실행구문은 모두 실행됨.)
    todo. document.write(add(20,10) + "<br>");
    todo. document.write(sub(20,10) + "<br>");
    todo. document.write(mul(20,10) + "<br>");
    todo. document.write(div(20,10) + "<br>");
    todo. 그 외 나머지

    ? 결과
    * 결과 = 30
    * 결과 = 10
    * 결과 = 200
    * 결과 = 2
    * 결과 = 잘못된 연산자입니다.
*/
function calculator2(op,numb1,numb2){
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
function add(numb1,numb2){ return numb1 + numb2; }
function sub(numb1,numb2){ return numb1 - numb2; }
function mul(numb1,numb2){ return numb1 * numb2; }
function div(numb1,numb2){ return numb1 / numb2; }

// *case. 8 함수를 변수에 담기.
function hello(name){
    console.log(name+"환영합니다.");
}
var func = hello;

// *case. 9 매개변수 값으로 함수를 사용하기.
function hi1(){
    console.log("Hello."); 
}
function hi2(){
    console.log("안녕하세요.");
}
function execute(func){
    func();
}
// *cased. 10 button click시 매개변수 값으로 넘긴 함수 호출하기.
function welcome(){
    alert("환영합니다. 반갑습니다.");
}
$(document).ready(function(){
    $("#runEx8").click(welcome);
});
// todo. 함수를 매개변수로 전달받아 반복호출하기.
function callFunctionTenTimes(otherFunction){
    for (var i = 0; i < 10; i ++){
        otherFunction();
    }
}
function justFunction(){
    document.write("hello, world!", "<br>");
}
// *case. 11 returnValue로 함수 사용하기.

function createHello(){
    function hello(user){
        document.write(user + 'welcome!');
    }
    return hello;
}
var result = createHello();
// ? result = hello 함수와 같음.