/*
    ? 형변환
    * JS - '10' + '10' = '1010' / 사람 - '10' + '10' = 20 - 이런 인식차를 해결하기위함.

    ? 암시적 형변환 CASE - JS Engine이 자동으로
    * 1. 숫자 + 문자 = 문자.
    * 2. 불리언 + 숫자 = 숫자.
    * 3. 불리언 + 문자 = 문자.

    ? 명시적 형변환 CASE - 개발자가 직접
    * method 나 libCoreFunc를 이용하여 강제로 숫자 -> 문자로 변형.
*/
// *case.1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt('나이를 입력하시오');
    // console.log(typeof(age) + ' = ' + age);
    var result = Number(age) + 20; //? Number(전역함수) - 정,실수 무관 변환. 
    console.log(result);
}

// *case.2 강제 숫자 -> 문자 형변환.
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}

// *case.3 강제 불리언 - 숫자형 변환
function forcedNumber(){
    var result = 2 + true; //? true = 1, false = 0.
    console.log(result);
}

// *case.4 강제 불리언 - 문자형 변환
function forcedString2(){
    var a = '2' + true;
    console.log(a);
}

// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? String
    * String(value); - 문자형으로 변환

    ? .toString()
    * value.toString(); - 문자형(진수)으로 변환

    ? .toFixed()
    * Number.toFixed(); -  실수를 문자형으로 변환.
*/
function stringNumb(){
    var test1 = 15;
    var result = String(test1); //? 전역함수 string
    console.log(typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result) + ' = ' + result);
}

// * example - background-color random
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xfff;
        bgColor = parseInt(bgColor);
        bgColor = bgColor.toString(16);

        $("body").css("background-color", "#" + bgColor);
    },1000);
}
// *case.6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? Number
    * Number(value); - 정수,실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환
*/
function numbString(){
    var test = '300';
    var result = parseInt(test) + 10;
    console.log('result = ' + result);
}
// todo.1 변수 test에 들어있는 숫자 100을 문자형으로 변형. result 로 출력(typeof 검수필요).

// todo. 1-1 암시적형변환
function todo1(){
    var test = 100;
    var result = test + ''; //? 형변환처리하기
    console.log(typeof(result) + ' = ' + result);
}
// todo. 1-2 String 형변환
function todo2(){
    var test = 100;
    var result = String(test); //? 형변환처리하기
    console.log(typeof(result) + ' = ' + result);
}
// todo. 1-3 toString 형변환
function todo3(){
    var test = 100;
    var result = test.toString(); //? 형변환처리하기
    console.log(typeof(result) + ' = ' + result);
}

// todo.2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들기.

// todo. 2-1 parse 형변환
function todo4(){
    var test = "100.51";
    var result = parseFloat(test) + 150 + parseInt("20"); //? 형변환해서 연산가능하게 처리하기.
    console.log(typeof(result) + ' = ' + result);
}
// todo. 2-2 Number 형변환
function todo5(){
    var test = "100.51";
    var result = Number(test) + 150 + Number("20"); //? 형변환해서 연산가능하게 처리하기.
    console.log(typeof(result) + ' = ' + result);
}