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
    alert(sumReturn1(10,20));
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