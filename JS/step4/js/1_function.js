/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

// * exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들기.
/*
    document.write("안녕. 방가와", "<br>");
    document.write("안녕. 방가와", "<br>");
    document.write("안녕. 방가와", "<br>");
*/
function helloExp(){ //! 반복문 사용시
    var comment = "안녕. 방가와!";
    for (var i = 0; i < 3; i++){
        document.write(comment, "<br>");
    }
}
function helloFunc(){
    var comment = "안녕. 방가와!";
    document.write(comment, "<br>");
}

//* exp.2 기존의 반절피라미드 2회를 함수를 만들어 간결하게.
/*
var star = '';
for (var i = 1; i <= 10; i++) { 
    for (var j = 0; j < i; j++) { 
        star += '*'; 
    }
    star += '<br>';
}
document.write(star);
var star = '';
for (var i = 1; i <= 10; i++) { 
    for (var j = 0; j < i; j++) { 
        star += '*'; 
    }
    star += '<br>';
}
document.write(star);

function starPrint(){
    var star = '';
    for (var i = 1; i <= 10; i++) { 
        for (var j = 0; j < i; j++) { 
            star += '*'; 
        }
        star += '<br>';
    }
    document.write(star);
}
starPrint();starPrint();
*/

// *exp.3 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.

function sumParam(num1, num2){
    var result = num1 + num2;
    alert("두 수의 합은 = " + result);
}

// *exp.4 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)

// !ex. 1
function sumAll(){
    alert(typeof (arguments) + ':' + arguments.length);
    // ? arguments는 배열같은 매개변수
}

// !ex.2
function sumAllForIn(){
    var willReturn = 0;
    for (var i in arguments){
        //? for in 반복문은 IE9 이상에서만 가능. vue.js 등의 frontend framework에서 사용.
        willReturn += arguments[i];
        //? willReturn 이라는 변수에 arguments(매개변수의 배열) 내의 값을 더해서 대입하라.
        //! 배열의 갯수만큼.
    }
    return willReturn;
    //? 총 합을 담고있는 willReturn변수를 return 하라.
}
// *exp.4 매개변수의 자리가 없는 곳에 입력된 매개변수 를 arguments를 이용해 출력.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1]);
}
/*
    ?return (리턴)
    함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할 수 없다.
    이때 매개변수를 활용하면 함수 내부로 데이터를 전달 할 수 있는데, 리턴값은 이와 반대 되는 값.
    즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과값을
    함수 외부로 전달하기 위해 사용 하는 출력값.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/

// *exp.5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수를 만들어보자.

function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result; //! 외부로 return. 기본 호출부 리턴.
}
// var value=sumReturn(13,26); 
// alert("두 수의 합은 = " + value); //! alert 함수에서 호출. alert으로 리턴됨.

// *exp.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면출력.
// !단 입력값이 0이면 즉시 실행을 멈추게 한다.

function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt("숫자만 입력."));
        if(value ==0){
            document.write("종료");
            continue;
            /*
            return 은 함수를 빠져나오지만, break는 루프를 빠져나오기 때문에
            "총 x 번 실행함 구문이 출력"
            continue는 조건이 참일시 상단무한반복. = prompt 계속출력.
            */
        }
        sum += value;
        document.write(count + '.' + sum + '<br>');
        count ++;
    }
    document.write("총 " + count + "번 실행함.");
}
// todo.1 구구단 출력을 함수로 만들기. 
function printGugudan(){
    for (let i = 2; i <= 9; i++) {
        document.write(i + "단 출력", "<br>");
        for(var m = 1; m <= 9; m++){
            document.write(i + "*" + m + "=" +(i*m), "<br>");
        }
        document.write("<br>");
    }
}

// todo. (함수실행시 2단 ~ 9단까지 출력. 각 단 상단엔 "x단 출력.");

// *exp. 7 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수.
/*
    ? 실행구문
    ? document.write("1 결과 =" + calculator("+", 20, 10));
    ? document.write("2 결과 =" + calculator("-", 20, 10));
    ? document.write("3 결과 =" + calculator("*", 20, 10));
    ? document.write("4 결과 =" + calculator("/", 20, 10));
    ? document.write("5 결과 =" + calculator("%", 20, 10));

    * 결과 
    * 결과 = 30
    * 결과 = 10
    * 결과 = 200
    * 결과 = 2
    * 결과 = 잘못된 연산자 입니다.
*/
function calculator(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+" :
            result = numb1 + numb2;
            break;
        case "-" :
            result = numb1 - numb2;
            break;
        case "*" :
            result = numb1 * numb2;
            break;
        case "/" :
            result = numb1 / numb2;
            break;
        default :
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
function calculatorDiv(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+" :
            result = add(numb1, numb2);
            break;
        case "-" :
            result = numb1 - numb2;
            break;
        case "*" :
            result = numb1 * numb2;
            break;
        case "/" :
            result = numb1 / numb2;
            break;
        default :
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
function add(numb1,numb2){
    addResult = numb1 + numb2;
    return addResult;
    //! or only return numb1 + numb2;
}
//* document.write(add(20, 10) + "<br>");

function sub(numb1,numb2){
    subResult = numb1 - numb2;
    return subResult;
}
//* document.write(sub(20, 10) + "<br>");

function mul(numb1,numb2){
    mulResult = numb1 * numb2;
    return mulResult;
}
//* document.write(mul(20, 10) + "<br>");

function div(numb1,numb2){
    divResult = numb1 / numb2;
    return divResult;
}
//* document.write(div(20, 10) + "<br>");

//* document.write(calculator("+", 20, 10) + "<br>");

// *ex.6 함수를 변수에 담기.

function hello(name){
    console.log(name + "welcome");
}
hello("Mark");
var func = hello; //? func 라는 변수에 hello라는 함수를 담았다.
func("Stark"); //? 변수를 호출해서 안에 매개변수를 넣으면 함수가 실행된다.

// *ex.7 매개변수 값으로 함수를 사용하기.

function hi1(){
    console.log("Hi."); //* hi를 log로 출력
}
function hi2(){
    console.log("안녕.");//* 안녕을 log로 출력
}
function execute(func){ //? 넘겨받을때는 그냥 변수.
    func();//?넘겨받은 매개변수를 함수로 사용.
}
execute(hi2); //? func 라는 매개변수에 hi2 함수를 넣음.

// *exp. 8 버튼 클릭 시 매개변수 값으로 넘긴 함수 호출.

function welcome(){
    alert("환영. 방가와");
}
$(document).ready(function(){
    $("#runEx8").click(welcome);
})

// *exp. 9 1초마다 매개변수 값으로 넘긴 익명 함수 호출.
function loopStart(){
    setInterval(function(){
        document.write("hi. hello");
    }, 1000);
} 