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
    // console.log(typeof(age));
    var result = Number(age) + 20; //? Number - 전역함수 정,실수 무관 변환.
    console.log(result);
}

// *case. 2 강제 숫자 -> 문자형 변환.
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log(result);
}
// *case. 3 강제 불리언 -> 숫자형 변환.
function forcedNumber(){
    var result = 2 + true; //? false = 0, true = 1.
    console.log(result);
}
// *case. 4 강제 불리언 -> 문자형 변환.
function forcedString2(){
    var a = '2' + true;
    console.log(a);
}

// *case.5 test1에 들어있는 숫자를 문자로 명시적 형변환.
/*
    ? String
    * String(value) -> value를 문자형으로 변환. 

    ? .toString()
    * numberValue.toString(); - 문자형(진수) 변환.

    ? .toFixed()
    * numberValue.toFixed(); - 실수(반올림발생) 문자형 변환.
*/
function stringNumb(){
    var test1 = 15;
    var result = String(test1);
    console.log(typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    var result = test1.toString();
    console.log(typeof(result) + ' = ' + result);
}
// *case. 5-1 random Background-color
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xfff;
        bgColor = parseInt(bgColor);
        bgColor = bgColor.toString(16);

        $("body").css("background-color", "#" + bgColor)
    },1000);
}