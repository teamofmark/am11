/*
    ? function (함수)

    기존 반복문의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/
function helloFunc(comment,count){
    // var comment = '안녕? 방가와!';
    for(var i = 0; i < count; i++){
        document.write(comment,'<br>');
    }
}
// *case.1 매개변수(Parameter)가 있는 함수 만들기
// ? 함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후 접근이 불가한 부분을 해결하기 위함.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert('두 수의 합은 =?' + result);
}
// *exp.4 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.
*/
function sumAll(){
    alert(typeof(arguments) + ' : ' + arguments.length);
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
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
 /*
    ?return (리턴)
    * 함수 내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 불가.
    * 이 때 매개변수를 활용하면 함수 내부로 data를 전달 할 수 있는데, return value는 이와 반대 되는 값.
    * 즉, 매개변수 값이 함수 외부에서 내부로 들어오는 입력 부라면, 리턴값은 함수 내부에서 처리한 결과를
    * 함수 외부로 전달하기 위해 사용하는 출력 부.


    !ex.1 함수f(x)안에 넣는 값이 매개변수, 결과로 나오는 x*x 가 리턴값.
        function f(x) { return x * x; }
        alert(f(3));

    !ex.2 alert에서 매개변수를 두개를 선언하면 추가된 매개변수를 무시한다.
    //*(매개변수가 초과 됐을 시) 또한 원래 함수의 매개변수보다 적게 입력하면 undefined를 출력한다.
        alert('기존매개변수', '추가매개변수');
        prompt('기존매개변수');
*/
function f(x){
    return x*x;
}
// *case.5 두 수를 매개변수로 받고, 그 값들을 더한 결과를 return하는 함수.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
// *case.6 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단, 입력값이 0이면 즉시 실행 중지.
function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만입력해라.'));
        if(value == 0){
            document.write('종료되었습니다.');
            return;
        }
        sum += value;
        document.write(count + ". " + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행함.');
}
// todo. 구구단 출력을 함수로 만들기
function printGugudan(){
    for(var i = 2; i <= 9; i++){
        document.write(i+'단 출력', '<br>');
        for(var m = 1; m <= 9; m++){
            document.write(i + 'x' + m + '=' + (i*m),'<br>');
        }
        document.write('<br>');
    }
}
// todo . 배열과제
function arraySum(){
    var data = [10,20,30,40,50];
    var result = 0;
    for (var i = 0; i < data.length; i++) {
        result+= data[i];
    }
    document.write('해당 배열의 총합은 = ' + result);
}

// todo. 다음실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수 만들기.
/*
    //* 실행구문
    document.write("1 결과 =" + calculator("+", 20, 10));
    document.write("2 결과 =" + calculator("-", 20, 10));
    document.write("3 결과 =" + calculator("*", 20, 10));
    document.write("4 결과 =" + calculator("/", 20, 10));
    document.write("5 결과 =" + calculator("%", 20, 10));
    //* 결과 
    결과 = 30
    결과 = 10
    결과 = 200
    결과 = 2
    결과 = 잘못된 연산자 입니다.
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
            result = '잘못된 연산자 입니다.';
            break;
    }
    return result;
}
// todo. 위의 예제에 추가로 사칙연산부를 함수로 변환하여 보다 편하게 응용 할 수 있는 계산기.
/*
* document.write(calculator2("+", 20, 10) + "<br>");
* document.write(add(20, 10) + "<br>"); -> 20 + 10
* document.write(sub(20, 10) + "<br>"); -> 20 - 10
* document.write(mul(20, 10) + "<br>"); -> 20 * 10
* document.write(div(20, 10) + "<br>"); -> 20 / 10
*/
function calculator2(op,numb1,numb2){
    var result = '';
    switch(op){
        case "+":
            result = add(numb1,numb2); //? 더하기 함수
            break;
        case "-":
            result = sub(numb1,numb2); //? 빼기 함수
            break;
        case "*":
            result = mul(numb1,numb2); //? 곱하기 함수
            break;
        case "/":
            result = div(numb1,numb2); //? 나누기 함수
            break;
        default:
            result = '잘못된 연산자 입니다.';
            break;
    }
    return result;
}
function add(numb1,numb2){
    var addResult = numb1 + numb2;
    return addResult;
}
function sub(numb1,numb2){
    var subResult= numb1 - numb2;
    return subResult;
}
function mul(numb1,numb2){
    var mulResult= numb1 * numb2;
    return mulResult;
}
function div(numb1,numb2){
    var divResult= numb1 / numb2;
    return divResult;
}