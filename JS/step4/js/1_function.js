/*
    ? function (함수)

    * 기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    * 중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

//* exp.1 다음 구문을 hello() 라는 함수를 만들어 유지보수 하기 쉽게 만들어보기
// document.write("안녕. 방가와","<br>");
// document.write("안녕. 방가와","<br>");
// document.write("안녕. 방가와","<br>");

function hello(){
    var comment = '안녕, 방가와!';
    for (var i = 0; i < 3; i++){
        document.write(comment,'<br>');
    }
}

// *exp.2 매개변수 (Parameter)가 있는 함수 만들기.
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.


function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// ?  NaN(Not a Number).표현 불가능한 수치형 결과를 나타내는 값. 은 연산 과정에서 잘못된 입력을 받았음을 나타내는 기호

// *exp.3 매개변수의 자리가 없어도 있는 것처럼..arguments(가변인자함수)
/*
    ?arguments? 
    arguments 객체는 모든 함수 안에서 사용하는 지역변수다.
    arguments를 이용해 함수내 인수들을 참조 할 수 있고 이 객채의
    함수에 전달된 각 인수항목을 포함한다.
    단 arguments는 Array와 비슷해보이지만 length를 구하는것을 제외
    Array와 다르다. 하지만 필요에 따라 Array로 변환하여 쓸수있다.
*/

// *exp. 3-1
function sumAll(){
    var sumArg = 0;// ? 선언
    for (var i = 0; i < arguments.length; i++){
        sumArg += arguments[i];
    }// ? 처리
    alert('arguments의 총합은 : ' + sumArg);// ? 출력
}

// function sumAllExt(){
//     var willReturn = 0;
//     for (var i in arguments){
//         willReturn += arguments[i];
//     }
//     return willReturn;
// }

// *exp.4 매개변수의 자리가 없는 곳에 입력된 매개변수 를 arguments를 이용하여 출력하게 만들어보자.

function showUserInfo(){
    console.log('이름 = ' + arguments[0]);
    console.log('나이 = ' + arguments[1]);
    alert(arguments[0]+ "의 나이는" + arguments[1] + "세 입니다.");
}
/*
    ?return (리턴)
    함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할 수 없다.
    이때 매개변수를 활용하면 함수 내부로 데이터를 전달 할 수 있는데, 리턴값은 이와 반대 되는 값.
    즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 값이라면, 리턴값은 함수 내부에서 처리한 결과값을
    함수 외부로 전달하기 위해 사용 하는 출력값.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
    * function f(x) { return x * x; }
    * alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/

// *exp.5 두 수를 매개변수로 받고, 두 값을 더한 결과값을 리턴하는 함수를 만들어보자.

function sumReturn1(num1, num2){
    var result = num1 + num2;
    return result;
}
var value = sumReturn1(13,26);

// *exp.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수를 만들어보자.
// ! 단 입력값이 0이면 즉시 실행을 멈추게 한다.

function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만 입력해라.'));
        if(value == 0){
            document.write('종료');
            return;
        }
        sum += value;
        document.write(count + '.' + sum + '<br>');
        count ++;
    }
    document.write('총' + count + '번 실행함.');
}

function printGugudan(){
    var startNumb = parseInt(window.prompt('최소단수'));
    var lastNumb = parseInt(window.prompt('최대단수'));

    for ( var i = startNumb; i <= lastNumb; i++){
        document.write(i + '단 출력', '<br>');
        for(var m = 1; m <= lastNumb; m++){
            document.write(i + '*' + m + '=' + (i*m), '<br>');
        }
        document.write('<br>');
    }
}

// todo.2 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    * document.write("1 결과 =" + calculator("+", 20, 10));
    * document.write("2 결과 =" + calculator("-", 20, 10));
    * document.write("3 결과 =" + calculator("*", 20, 10));
    * document.write("4 결과 =" + calculator("/", 20, 10));
    * document.write("5 결과 =" + calculator("%", 20, 10));
    
    //* 결과
    * 결과 = 30
    * 결과 = 10
    * 결과 = 200
    * 결과 = 2
    * 결과 = 잘못된 연산자 입니다.
*/
function calculator(op, numb1, numb2){
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
            result = '잘못된 연산자 입니다.';
            break;
    }
    return result;
}
function calculatorIF(op, numb1, numb2){
    var result = '';
    var firstNumb = parseInt(numb1);
    var secondNumb = parseInt(numb2);
    if(op == '+'){
        result = firstNumb + secondNumb;
    }else if (op == '-'){
        result = firstNumb - secondNumb;
    }else if (op == '*'){
        result = firstNumb * secondNumb;
    }else if (op == '/'){
        result = firstNumb / secondNumb;
    }else{
        result = "잘못된 연산자 입니다.";
    }
    return result;
}

/*
    //* 실행구문
    * document.write("결과 =" + divCalculator("+", 20, 10));
*/
function divCalculator(op, numb1, numb2){
    var result = '';
    switch(op){
        case "+" :
            result = add(numb1,numb2);
            break;
        case "-" :
            result = sub(numb1,numb2);
            break;
        case "*" :
            result = mul(numb1,numb2);
            break;
        case "/" :
            result = div(numb1,numb2);
            break;
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}

function add(numb1,numb2){
    var addResult = numb1 +numb2;
    return addResult;
}
function sub(numb1,numb2){
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1,numb2){
    mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1,numb2){
    divResult = numb1 / numb2;
    return divResult;
}