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
            break;
        }

        sum += value;
        document.write(count + '. ' + sum + '<br>');
        count++;
    }
    document.write('총' + count + '번 실행함.');
}