/*
    ? function (함수)
    * 기존 로직들의 유지보수가 어려운 문제를 함수화 하여 근본적으로 해결하기 위함.
    * ex> 중복코드가 너무 많다? 재사용이 어렵다? .....
*/


// * case.1 매개변수(Parameter)가 있는 함수 만들기.
//? 함수는 들어가기도힘들고, 나오기도 힘들다.
//? 기존의 함수가 실행된 이후 접근이 불가한 것을 미리 고정된 변수가 지나갈수있는 통로를 만들어 해결.

function sumParam(num1, num2){
    var result = num1 + num2;
    alert('두 수의 합은 = ' + result);
}
// *case. 2  arguments(가변인자)
//? 그렇다면 항상 몇개의 매개변수를 사용할지 짐작 혹은 계산을 하여 써야 된다 = param.

function sumAll(){
    var willReturn = 0;
    for (var i in arguments){
        willReturn += arguments[i];
        //? arguments배열내 값을 더해서 대입해라.
        //? []? = array(배열) = 가변인자를 임의로 생성해내면 => 배열화.
    }
    return willReturn; //? willRetrun을 return해라.
}
// *case.3 arguments 확인
function showInfo(){
    console.log("index[0] = " + arguments[0]);
    console.log("index[1] = " + arguments[1]);
    console.log("index[2] = " + arguments[2]);
    alert(arguments[0] + '의 나이는' + arguments[1] + '이고 혈액형은 ' + arguments[2] + '입니다.');
}
/*
    ? return
    * 함수내부는 함수라는 범위 안에 갇히기 때문에, 한번 실행되면 함수 외부에서 접근 할수 없다.
    * 매개변수 활용으로 함수내부에 data 전달 가능. 리턴값은 이와 반대로 함수외부로 data 전달 가능.

    function f(x){
        return x * x;
    }
    alert(f(3));
*/
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result; //? 외부로 나가는 data.
}

// *case.4 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단 입력값이 0이면 즉시 실행중지.

function infiniteSum(){
    var sum = 0;
    var count = 1;

    while(true){
        var value = parseInt(window.prompt('숫자만 입력해요.'));
        if(value == 0){
            document.write('종료');
            return;
            //? return은 함수를 이탈 / break는 해당 loop를 이탈.
        }

        sum += value;
        document.write(count + '. ' + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행함.');
}
// * case.5 구구단 출력 복습(다중 for)
function printGugudan(x){
    for (var i = 2; i <= x; i++){
        document.write(i + '단 출력', '<br>');
        for (var m = 1; m <= 9; m++){
            document.write(i + 'x' + m + '=' + (i*m), '<br>');
        }
        document.write('<br>');
    }
}
// todo. 다음 실행구문으로 전달받은 매개변수로 계산하여 결과를 출력하는 함수.(계산기)
/*
    ?실행구문
    ? document.write ( calculator("+", 20, 10) ); 30
    ? document.write ( calculator("-", 20, 10) ); 10
    ? document.write ( calculator("*", 20, 10) ); 200
    ? document.write ( calculator("/", 20, 10) ); 2
    ! document.write ( calculator("%", 20, 10) ); 잘못된 연산자 입니다.
*/

function calculator(op, numb1, numb2){
    var result;
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
        default:
            result = "잘못된 연산자 입니다.";
            break;
    }
    return result;
}
//todo. 위의 예제에 추가로 사칙연산 부분을 함수로 변환하여 보다 편하게 사용 할 수 있게 만들기.
/*
    ? 실행구문
    ? document.write(calculator2("+", 20, 10) + "<br>"); 1. calculator 함수로도 사용가능.
    ? document.write(add(20, 10) + "<br>"); . 개별 연산함수(add)로도 사용가능.
    ? document.write(sub(20, 10) + "<br>"); . 개별 연산함수(sub)로도 사용가능.
    ? document.write(mul(20, 10) + "<br>"); . 개별 연산함수(mul)로도 사용가능.
    ? document.write(div(20, 10) + "<br>"); . 개별 연산함수(div)로도 사용가능.
    ! 기존 calculator 함수 안에 작은 기능단위 함수들 (add,sub,mul,div) 연결.
*/
function calculator2(op, numb1, numb2){
    var result;
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
function add(numb1, numb2){
    var addResult = numb1 + numb2;
    return addResult;
}
function sub(numb1, numb2){
    var subResult = numb1 - numb2;
    return subResult;
}
function mul(numb1, numb2){
    var mulResult = numb1 * numb2;
    return mulResult;
}
function div(numb1, numb2){
    var divResult = numb1 / numb2;
    return divResult;
}

// *case. 6 함수를 변수에 담기.
function hello(name){
    console.log(name + 'welcome!');
}

var func = hello; //? func라는 변수에 hello라는 함수를 담았다.

// *case. 7 매개변수 값으로 함수를 사용하기.
function hi1(){
    console.log('Hello');
}
function hi2(){
    console.log('안녕하세요');
}
function execute(func){
    func();
}
// *case. 8 button Click 시 매개변수 값으로 넘긴 함수 호출.
function welcome(){
    alert('환영합니다. 반갑습니다.');
}
$(document).ready(function(){
    $("#runEx8").click(welcome); //? 본래 jquery click = 인자를 전달받을 때 함수형태를 전달 받는다.(실행목적);
    //? js : GlobalEventHandlers .on~(click)

    // $("#runEx8").click(function(){
    //     alert('환영합니다. 반갑습니다.');
    // });
});

// *case.9 1초마다 매개변수 값으로 넘긴 익명함수 호출.
function loopStart(){
    setInterval(function(){
        document.write('hi, hello');
    }, 1000);
    //? setInterval(func, interval)
}