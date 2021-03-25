/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// document.write('안녕. 방가와','<br>');
// document.write('안녕. 방가와','<br>');
// document.write('안녕. 방가와','<br>');
/*
function helloExp(){
    document.write('안녕. 반가워','<br>');
}
*/
$(document).ready(function(){
    // helloFunc();
    // sumParam(10,20,30);
    // alert(sumAll(1,2,3,4,5,6,7,8,9,10));
    // showInfo('Mark',99); //? ['Mark',99];
    // alert(f(3));
    // alert(sumReturn1(10,20));
});
function helloFunc(){
    var comment = '안녕. 방가와!';
    document.write(comment, '<br>');
}

// *case.1 매개변수(Parameter)가 있는 함수.
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.

function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은? = ' + result);
}

// *case.2 매개변수의 자리가 없어도 있는 것처럼.. arguments(가변인자함수, 인자의 배열화)
/*
function sumAll(){
    alert(typeof(arguments) + ':' + arguments.length);
}
*/

function sumAll(){//? [1,2,3,4,5,6,7,8,9,10]; 
    var willReturn = 0;
    for (var i in arguments){ //? for (var i = 0; i<10(arguments.length); i++)
        willReturn += arguments[i];
    }
    return willReturn;
}

// *case.3 매개변수의 자리가 없는 곳에 입력됨 매개변수를 arguments를 이용하여 출력.
function showInfo(){
    console.log('0 = ' + arguments[0]);
    console.log('1 = ' + arguments[1]);
    alert(arguments[0] + '의 나이는' + arguments[1]);
}

/*
    ?return (리턴)
    함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할 수 없다.
    이때 매개변수를 활용하면 함수 내부로 데이터를 전달 할 수 있는데, 리턴값은 이와 반대 되는 값.
    즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과값을
    함수 외부로 전달하기 위해 사용 하는 출력값.
*/

// *case. 4 함수 f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 returnValue(return값)
function f(x){
    return x*x;
}

// *case. 5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 return 하는 함수 만들기.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}

// *case.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// !단 입력값이 0일경우 즉시 실행중지.

function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만입력해라'));
        if(value == 0){
            document.write('종료');
            return;
        }

        sum += value;
        document.write(count+". " + sum + "<br>");
        count ++;
    }
    document.write('총 ' + count + '번 실행함.');


}

// todo.1 구구단출력을 함수로 만들기.
function printGugudan(){
    for (var i = 2; i <= 9; i++){
        document.write(i + '단 출력', "<br>");
        for(var m = 1; m <= 9; m++){
            document.write(i + 'x' + m + '=' + (i*m), '<br>' );
        }
        document.write('<br>');
    }
}
// *case.7 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수.
/*
    ? calculator("+ - * /",20,10);
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
            result = '잘못된 연산식 입니다.';
            break;
    }
    return result;
}

// todo.2 위의 예제에 추가로 사칙연산부분을 함수로 분리해서 조금 더 편하게 사용하게 만들기.
/*
    ? calculatorCustom("+ - * /",20,10);
    ? add(20,10); 더하기작동
    ? sub(20,10); 빼기 작동
    ? mul(20,10); 곱하기 작동
    ? div(20,10); 나누기 작동
*/
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
}

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
// *case.8  함수를 변수에 담기.
function hello(name){
    console.log(name + '환영합니다!');
}
var func = hello;

// *case.9 매개변수 값으로 함수 사용하기.
function hi1(){
    console.log('Hello.');
}
function hi2(){
    console.log('안녕하세요.');
}
function execute(func){
    func();
}