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
// * case. 1 - 숫자를 문자로 명시적 형변환.
/*
    ? String
    * String(value); - 문자형으로 변환

    ? .toString()
    * Number.toString(); - 문자형(진수)변환

    ? .toFixed()
    * Number.toFixed(); - (소수점자리수(반올림발생))실수문자형 변환.
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
function bgColorRandom(){
    setInterval(function(){
        var bgColor = Math.random()*0xfff;
        bgColor = parseInt(bgColor);
        bgColor = bgColor.toString(16);

        $("body").css("background-color", "#" + bgColor);
    },1000);
}
// *case. 2 - 문자를 숫자로 명시적 형변환.
/*
    ? Number
    * Number(value); - 정수, 실수 구분없이 형변환.

    ? parse
    * 1. parseInt(value); - 정수형변환
    * 2. parseFloat(value); - 실수형변환
*/
function numbString(){
    var test = '300.156295';
    var result = Number(test) + 10;
    console.log('결과 = ' + result + '이고, 자료유형은' + typeof(result) + '입니다.');
}
function numbString2(){
    var test = '300.156295';
    var result = parseInt(test) + 10;
    console.log('결과 = ' + result + '이고, 자료유형은' + typeof(result) + '입니다.');
}
function numbString3(){
    var test = '300.156295';
    var result = parseFloat(test) + 10;
    console.log('결과 = ' + result + '이고, 자료유형은' + typeof(result) + '입니다.');
}
// todo. 1 변수 test에 들어있는 숫자 100을 문자형으로 변형. result 로 출력(typeof 검수필요).

// todo. 1-1 암시적형변환
function todo1(){
    var test = 100;
    var result = test /* 형변환 코드 */;
    console.log(typeof(result) + ' = ' + result);
}
// todo. 1-2 String 형변환
function todo1(){
    var test = 100;
    var result = test /* 형변환 코드 */;
    console.log(typeof(result) + ' = ' + result);
}
// todo. 1-3 toString형변환
function todo1(){
    var test = 100;
    var result = test /* 형변환 코드 */;
    console.log(typeof(result) + ' = ' + result);
}

// todo.2 문자 형을 숫자 형으로 변환하여 연산이 가능하게 만들기.

// todo. 2-1 parse 형변환
function todo4(){
    var test = "100.51";
    var result = test + 150 + "20"; // todo. 형변환.
    console.log(typeof(result) + ' = ' + result);
}
// todo. 2-1 Number 형변환
function todo5(){
    var test = "100.51";
    var result = test + 150 + "20"; // todo. 형변환.
    console.log(typeof(result) + ' = ' + result);
}