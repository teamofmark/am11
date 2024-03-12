/*
    ? 형변환
    * JS - "10" + "10" = 1010 / 사람 - "10" + "10" = 20 - 이런 인식차를 해결하기위함.
    ! 암시적형변환 - js Engine이 자동으로 변환.  /  명시적 형변환 - 개발자가 직접 지정 변환.

    ? 암시적 형변환 CASE
    * 1. 숫자 + 문자 = 문자.
    * 2. 불린 + 숫자 = 숫자.
    * 3. 불린 + 문자 = 문자.
    
    ? 명시적 형변환
    * method 나 lib Core func를 이용하여 강제로 숫자 -> 문자 로 변환.
*/
// * case.1 자신의 나이를 입력받고 20을 더한 값 출력.
// ? 비동기 - async / 동기 - sync
function agePlus(){
    var age = prompt('나이입력');
    var result = Number(age) + 20; //? 전역함수 Number
    console.log(result);
}
// *case.2 강제 숫자 -> 문자형변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 10; //? 1, 문자 30, 10을 더해라.
    console.log("result의 자료유형은" + typeof(result) + " 값은" + result);
}
// *case.3 강제 불린 -> 숫자형변환
function forcedNumber(){
    var result = 2 + true; //? true = 1, false = 0.
    console.log("result의 자료유형은" + typeof(result) + " 값은" + result);
}
// *case.4 강제 불린 -> 문자형변환
function forcedString2(){
    var a ='2';
    var result = a + true;
    console.log("result의 자료유형은" + typeof(result) + " 값은" + result);
}
// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? String();
    * String(value); - 전역함수 -> 모든 자료형을 문자로 변환.

    ? .toString();
    * Number.toString(); - 문자형을 진수변환이 필요할때

    ? .toFixed();
    * Number.toFixed(); - (소수점자리를 반올림하는) 실수문자형이 필요할 때.
*/
function stringNumber(){
    var test1 = 15;
    console.log("변환 전 : " + typeof(test1) + ' = ' + test1);
    var result = String(test1);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    console.log("변환 전 : " + typeof(test1) + ' = ' + test1);
    var result = test1.toString();
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
// ! tune. background-color random
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xfff; //? 15*16^2 + 15*16^1 + 15*16^0.
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16);
        console.log(bgColor);
        $("body").css("background-color", "#" + bgColor);
    },1000);
}

// *case.6 test에 들어있는 문자를 숫자로 형변환.
/*
    ? Number();
    * Number(value); - 전역함수. 정수,실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환.(실수버림).
    * 2. parseFloat(value); - 실수형변환.(무조건실수화).
*/
function numbString(){
    var test = '300.15625';
    console.log("변환 전 : " + typeof(test) + ' = ' + test);
    var result = parseInt(test) + 10;
    console.log("변환 후 : " + typeof(result) + ' + 10 = ' + result);
}
// todo.1 변수 test에 들어있는 숫자 100을 문자형으로 변형하여 각 상황에 맞는 result로 출력.(typeof 검수!);

// todo. -1 암시적형변환 이용하기
function todo1(){
    var test = 100;
    var result;// todo. 암시적형변환을 이용하여 형변환.
    console.log('변환 후' + typeof(result) + " = " + result);
}
function todo2(){
    var test = 100;
    var result;// todo. 명시적형변환(전역함수String)을 이용하여 형변환.
    console.log('변환 후' + typeof(result) + " = " + result);
}
function todo3(){
    var test = 100;
    var result;// todo. 명시적형변환(꼬리함수toString)을 이용하여 형변환.
    console.log('변환 후' + typeof(result) + " = " + result);
}
// todo.2 변수 test에 들어있는 문자를 숫자형으로 변형하여 연산가능하게. 각 상황에 맞는 result로 출력.(typeof 검수!);

function todo4(){
    var test = "100.51";
    var result = test + 150 + "20";// todo. parse 이용하는 방법
    console.log('변환 후' + typeof(result) + " = " + result);
}
function todo5(){
    var test = "100.51";
    var result = test + 150 + "20";// todo. Number 이용하는 방법
    console.log('변환 후' + typeof(result) + " = " + result);
}