/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
// case.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// 1-1 수동으로 반복함
/*
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
document.write("안녕. 방가와","<br>");
*/
// 1-2. 반복을 쉽게하기 위해 반복문
/*
var comment = "안녕. 방가와";
for(var i = 0; i < 3; i++){
    document.write(comment,"<br>");
}
*/
// 1-3. 원할 때 실행하기 위해 함수화
// function commentFunc(){
//     var comment = "안녕.";
//     for(var i = 0; i < 10; i++){
//         document.write(comment,"<br>");
//     }
// }
// function commentFunc2(){
//     var comment = "HI";
//     for(var i = 0; i < 3; i++){
//         document.write(comment,"<br>");
//     }
// }
// case. 2 매개변수(parameter)의 사용법
// ? 함수의 폐쇄성으로인해 함수내 정해진 변수의 value(값)를 변경하여 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function commentParam(count,comment){
    for(var i = 0; i < count; i++){
        document.write(comment,'<br>');
    }
}
// -1. 예를 들어 10이랑 20을 더해야된다. -> 20이랑 30도 더해야된다.
/*
function sumParam(){
    var num1 = 10;
    var num2 = 20;
    alert('두 수의 합은?' + (num1+num2));
}
function sumParam1(){
    var num1 = 20;
    var num2 = 30;
    alert('두 수의 합은?' + (num1+num2));
}
*/
function sumParam(x,y){
    alert('두 수의 합은?' + (x+y));
}
// case. 3 매개변수의 자리가 없어도 있는 것처럼 - arguments(가변인자함수 - 배열인듯배열아닌배열같은)
/*
    arguments
    - 모든 함수 안에서 사용하는 지역변수.
    - 이를 이용하여 함수내 인수들을 참조하거나 전달된 각 인수항목을 포함 한다.
    - array와 비슷해보이지만 length개념을 제외 하고는 array와 같지 않다.
    - 그렇기 때문에 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i<arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
// case.4 "자신의 이름"의 나이는 "자신의 나이"세 입니다. 라는 출력문을 arguments로 만들어보기
function showInfo(){
    alert(arguments[0]+" 의 나이는 " + arguments[1] + "세 입니다.");
} 

/*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를 함수 외부로 전달하기 위해 사용하는 출력 부.
*/
// case.5 함수 f(x) 에서 x가 매개변수(입력). 그럼 출력은?
function f(x){
    return x*x;
}
// case.6 arguments 총합 함수를 return으로 변화시키기

function sumAllEX(){
    console.log(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}
// case.7 return value(반환값)을 변수에 저장하고 전달하기
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
var valueTest = sumReturn1(20,10);
// sumReturn1 <-> sumReturn1();

// case.8 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// 단, 입력값이 0이면 즉시 실행을 멈춰야 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(prompt('숫자를입력해라'));
        if(value == 0){
            document.write("종료. 합산중");
            // break;
            return;
        }

        sum += value;
        document.write(count + '. ' + sum + '<br>');
        count ++;
    }
    document.write("총 " + count +"번 실행함.");
}