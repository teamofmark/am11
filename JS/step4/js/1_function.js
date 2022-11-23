/*
    ? function (함수)

    기존 반복문(기능)의 유지보수가 어려운 문제(여러개의 반복문의 각기 다른 value를 수정하기 등..),
    중복코드가 많은 문제를 근본적으로 해결하여 코드의 재 사용 및 중복 제거, 유지보수의 용이성을 확보하기 위한 수단.

*/

// *case.1 "안녕, 방가와?" 멘트를 3번 써야 한다.
// document.write("안녕? 방가와.");
// document.write("안녕? 방가와.");
// document.write("안녕? 방가와.");

// *case.2 함수의 첫번째. 매개변수.(parameter) - 인자.
function helloExp(printCount){
    var comment = "안녕? 방가와.";
    for(var i = 0; i < printCount; i++){
        document.write(comment,"<br>");
    }
}
// *case.3 매개변수(Parameter)가 있는 함수 만들기.
// ?함수내 정해진 변수의 value(값)를 변경하여, 기존의 함수가 실행된 이후에도 접근이 용이하게.
function sumParam(num1,num2){
    var result = num1 + num2;
    alert("두 수의 합은? = " + result);
    // ? 매개변수는 만들어진 자리만큼이 꼭 입력 되어야만 하고 넘칠 시에는 자리 외 값이 소실된다.
    // ! 개발 할 때마다(함수생성시) 목표로두는 매개변수의 갯수가 정확해야만 한다? = -_-?
}

// *exp.4 매개변수의 자리가 없어도 있는것처럼.. arguments(가변인자함수 - 배열은 아니지만 배열처럼 사용하면 된다.)
/*
    ? arguments
    * arguments 객체(object)는 모든 함수 안에서 사용하는 지역변수.
    * arguments를 이용해서 함수내 인수들을 참조 할 수 있고 이 객체의 함수에 전달된 각 인수항목을 포함한다.
    * 단, arguments는 array와 비슷해보이지만 length를 구하는 방식을 제외하고는 array와는 다르다.
    * 필요에 따라 array로 추가 변환하여 사용 할 수 있다.

    ? ex> 회원정보를 당길건데 (backEnder = O, frontEnder = X) id를 당기면 다온다.
    ? id를 당겼을 때 ? 몇개? 뭐가?...
*/
function sumAll(){
    var willReturn = 0;
    for(var i = 0; i < arguments.length; i++){
        willReturn += arguments[i];
    }
    console.log(willReturn);
}
// !tune.
function sumAllEX(){
    var willReturn = 0;
    for (var i in arguments){
        willReturn += arguments[i];
    }
    return willReturn;
}

// *case. 5 "자신의 이름"의 나이는 "자신의 나이" 세 입니다. 를 arguments를 활용해 만들어보기.
function showInfo(){
    console.log("0 = " + arguments[0]);
    console.log("1 = " + arguments[1]);
    alert(arguments[0] + "의 나이는" + arguments[1] + "세 입니다.");
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
function f(x) { return x * x; }

// *case.6 두 수를 매개변수로 받고, 두 값을 더한 결과값을 return하는 함수를 만들어보자.
function sumReturn1(num1,num2){
    var result = num1 + num2;
    return result;
}
// var sumVal = sumReturn1(10,20);
// alert(sumReturn1(10,20));
// document.write(sumVal);
// *case. 7 무한루프를 돌며 숫자를 입력받고 입력받은 수의 합을 화면에 출력하는 함수.
// ! 단, 입력값이 0이면 즉시 실행을 멈추게 한다.
function infiniteSum(){
    var sum = 0;
    var count = 1;
    while(true){
        var value = parseInt(window.prompt('숫자만 입력해라.'));
        if(value == 0){
            document.write("종료");
            // break;
            return;
            //? return은 함수 자체를 빠져나온다. / break는 해당 logic,loop만을 빠져나온다.
        }
        sum += value;
        document.write(count + ". " + sum + "<br>");
        count ++;
    }
    document.write("총 " + count + "번 실행함.");
}