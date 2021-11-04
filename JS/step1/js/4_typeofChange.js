/*
    ?형변환
    * JS - "10" + "10" = 1010. 사람 - "10" + "10" = 20. 이런 이해에 따른 문제를 해결하기위함.
    ! 암시적형변환 - JS Engine자체가 자동으로 변환. 명시적 형변환 - 개발자가 직접 지정변환.

    ? 암시적 형변환 case
    * 1. 숫자 형 + 문자 형 = 문자형. case.2
    * 2. 불린 형 + 숫자 형 = 숫자형. case.3
    * 3. 불린 형 + 문자 형 = 문자형. case.4
 */
// *case. 1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt('나이입력');
    var result = Number(age) + 20;
    console.log(result);
}
// *case. 2 강제 숫자 - 문자형 변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}
// *case. 3 강제 불린 - 숫자형 변환
function forcedNumber(){
    var result = 2 + true; //? true = 1, false = 0.
    console.log(result);
}
// *case. 4 강제 불린 - 문자형 변환
function forcedString2(){
    var a = '2' + true;
    console.log(a);
}
// *case.5 test1에 들어가있는 숫자를 문자로 형변환
/*
    ? String
    * String(value); - 문자형 변환.

    ? .toString()
    * Number.toString(); - 문자형변환 (16) > 16진.

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림처리)) 실수문자형.
*/
function stringNumb(){
    var test1 = 15;
    var result = String(test1); //? 전역함수 String
    console.log(typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString(); // ? Number 객체에서 제공하는 toString.
    console.log(typeof(result) + ' = ' + result);
}

// *case. 5-1 background-color random(1초마다?)
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xffffff;
        bgColor = parseInt(bgColor) //? parseInt 정수로 반환.
        bgColor = bgColor.toString(16);

        $("body").css("background-color", "#" + bgColor);
    }, 1000);
}
// *case.6 test에 들어있는 문자를 숫자로 형변환
/*
    ? parse
    * 1. parseInt(value); - 정수 형
    * 2. parseFloat(value); - 실수 형
    
    ? Number
    *Number(value) - 정수,실수 상관없이 있는 그대로 반환.

*/
function numbString(){
    var test = '300';
    var result = parseInt(test) + 10;
    console.log('result = ' + result);
}

// todo.1 변수 test 에 들어있는 숫자 100을 문자 형으로 변형. result에 대입하라.

// todo. 1-1 암시적 형변환
/*
function todo1(){
    var test = 100;
    var result = ? ;
    console.log(typeof(result) + " = " + result);
} */


function todo1(){
    var test = 100;
    var result = test + ""; //? 빈문자열 선언으로 강제변환
    console.log(typeof(result) + " = " + result);
}

// todo. 1-2 string 사용.
function todo2(){
    var test = 100;
    var result = String(test);
    console.log(typeof(result) + " = " + result);
}
// todo. 1-3 toString 사용.
function todo3(){
    var test = 100;
    var result = test.toString();
    console.log(typeof(result) + " = " + result);
}

// todo.2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들어라.
/*
function todo4(){
    var test = "100.50";
    var result = test + 150 + "20";
    console.log("result = " + result);
}
*/

// todo.2-1 parse 사용

function todo4(){
    var test = "100.50";
    var result = parseFloat(test) + 150 + parseInt("20");
    console.log("result = " + result);
}

// todo. 2-2 Number 사용

function todo5(){
    var test = "100.50";
    var result = Number(test) + 150 + Number("20");
    console.log("result = " + result);
}