/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// *case. 1 함수의 필요성
// document.write("방가와. <br>");
// document.write("방가와. <br>");
// document.write("방가와. <br>");
function helloExp(count){
    for (var i = 0; i < count; i++){
        document.write("방가와. <br>");
    }
}
// *case. 2 매개변수(parameter)가 있는 함수 만들기
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// *case. 3 매개변수의 자리가 없어도 있는 것처럼... arguments(가변인자함수)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    // console.log(typeof(arguments) + ':' + arguments.length);
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
// alert(sumAllEX(1,2,3,4,5,6,7,8,9,10));
document.write(sumAllEX(1,2,3,4,5,6,7,8,9,10));
/*
    ? return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하거나 arguments를 활용하면 함수 내부로 data를 전달 할 수 있는데,
    * returnValue는 이와 반대 되는 개념.
    * 즉, 매개변수 값이 입력부라면 return 값은 함수 내부에서 외부로 나가는 출력부.
*/
function f(x){
    // console.log(x * x);
    return x * x;
}
// *case. 4 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단, 입력값이 0이면 즉시 실행을 멈추게 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt("숫자만 입력해라."));
        if(value == 0){
            document.write("종료");
            return;
        }
        sum += value;
        document.write(count + ". " + sum + "<br>");
        count++;
    }
    document.write("총" + count + "번  실행함.");
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