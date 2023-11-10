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
// *case. 1 자신의 나이를 입력받고 20을 더한 값 출력.
function agePlus(){
    var age = window.prompt('나이입력');
    console.log(typeof(age));
    var result = parseInt(age) + 20;
    console.log(result);
}
// *case. 2 강제 숫자 - 문자형 변환.
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}
// *case.3 강제 불리언 - 숫자형 변환.
function forcedNumber(){
    var result = 2 + true; //? true = 1, false = 0.
    console.log(result);
}
// *case.4 강제 불린 - 문자형 변환.
function forcedString2(){
    var a = '2' + true;
    console.log(a);
}
// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? String
    * String(value); - 문자형으로 변환.

    ? .toString()
    * Number.toString(); - 문자형(진수)변환.

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림))실수문자형변환.
*/
function stringNumb(){
    var test1 = 15;
    console.log('변환전' + typeof(test1) + ' = ' + test1);
    var result = String(test1); //? 전역함수 String
    console.log('변환후' + typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    console.log('변환전' + typeof(test1) + ' = ' + test1);
    var result = test1.toString();
    console.log('변환후' + typeof(result) + ' = ' + result);
}
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xfff;
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16);
        console.log(bgColor);
        $("body").css("background-color", "#" + bgColor);
    },1000);
}