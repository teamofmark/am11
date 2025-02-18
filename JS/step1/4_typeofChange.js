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
// case.1 자신의 나이를 입력받고 20을 더한 값을 출력.
function agePlus(){
    // 입력 - input 의 value를 가져오다. 
    var age = Number(window.prompt("나이입력"));
    console.log(typeof(age));
    var result = age + 20;
    console.log(result);
}
// case.2 암시적형변환 유형
// -1. 강제 숫자 - 문자형 변환
function forcedString(){
    var a = '30';
    var result = 1 + a + 10;
    console.log("result의 자료 유형은" + typeof(result) + "이고, 값은 " + result);
}
// -2. 강제 불리언 - 숫자형 변환
function forcedNumber(){
    var result = 2 + true;
    console.log("result의 자료 유형은" + typeof(result) + "이고, 값은" + result);
}
// -3. 강제 불리언 - 문자형 변환
function forcedString2(){
    var a = '2';
    var result = a + true;
    console.log("result의 자료 유형은" + typeof(result) + "이고, 값은" + result);
}

// case.3 명시적 문자형변환
/*
    String
    * String(value); - 문자형으로 변환
    
    .toString()
    * Number.toString(); - 문자형 변환.

    .toFixed()
    * Number.toFixed(); - 실수문자형변환.
*/
function stringNumb(){
    var test1 = 15;
    console.log("변환 전 : " + typeof(test1) + " = " + test1);
    var result = String(test1); //?전역함수
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
function stringtoNumb(){
    var test1 = 15;
    console.log("변환 전 : " + typeof(test1) + " = " + test1);
    var result = test1.toString(); //? toString(진수변환);
    console.log("변환 후 : " + typeof(result) + ' = ' + result);
}
// toString 활용의 예
function bgColorRandom(){
    setInterval(()=>{
        var bgColor = Math.random()*0xfff;
        // ? 0x = 16진을 의미. = 15*16^3 + 15*16^2 + 15*16^1 + 15*16^0 - 최대수치
        //  2진 표현시 - 0000 0000 0000 0000 1111 1111 1111 1111 -> 이런식 반환이 되니 실사용 불가 -> 그러므로 변환
        console.log(bgColor);
        bgColor = parseInt(bgColor);
        console.log(bgColor);
        bgColor = bgColor.toString(16); //? 10이상 a ~ 15일 경우 f
        console.log(bgColor);
        // document.querySelector("body").style.backgroundColor="#"+bgColor;
        $("body").css("background-color","#"+bgColor);
    },1000);
}