/*
    ? math class
    *1. 수학 관련 기능
    *2. 많은 기능중 random(), max(), min(), ceil(), floor() 정도는 최소 알아두기
*/
// *case.1 0.5초에 한 번씩 50에서 100사이의 숫자(정수)를 #numb에 출력.

var $numb = null;

function randomNumb(){
    $numb = $("#numb");
    setInterval(showRandom, 500);
}

function showRandom(){
    var value = parseInt(Math.random()*50) + 50;
    /*
        ! random method : 매개변수(x), return Value =  0 - 1 사이 소수값.
        ? random 메서드는 0 - 1 범위에서 0과 1을 포함하지 않는 소수를 random하게 return.
        ? parseInt -> 소수 -> 정수.
        ? random*50이 되면 결과적으로 0 - 49사이의 정수가 나오게 되는데
        ! 예를들어 random에서 0.9938을 return. *50 -> 49.69가 되고 parseInt를 만나면 .69는소각
        ! +50 -> 99.
    */
    $numb.text(value);
}
// *case.2 10에서 100사이의 값 입력받기.
function rangeNumb(){
    $numb = $("#numb");
    insertNumb();
}
function insertNumb(){
    var value = prompt('숫자를 입력하시오.', 0);
    range(value);
}
function range(value){
    value = Math.min(100,Math.max(10,value));
    /*
        !Math.min method : 매개변수 = minValue(최소값), userValue(비교값)
        ? 1. Math.min(minValue(100), userValue(Math.max(10,value)))
        ? - 100이라는 최소값과 비교값을 비교하여 작은수를 return.
        ? - 한마디로 100이하 수는 그대로 return / 100이상 수는 100을 return.

        !Math.max method : 매개변수 = maxValue(최대값), userValue(비교값)
        ? 2. Math.max(10, value)
        ? - 10이라는 최대값과 비교값을 비교해 큰 수를 return.
        ? - 한마디로 10이상 수는 그대로 return / 10이하 수는 10을 return.
    */
   $numb.text(value);
}

// *case.3 총 페이지수 구하기
function pageCount(){
    $numb = $("#numb");
    count(105);
}
function count(postNumb){
    var pages = Math.ceil(postNumb / 10);
    /*
        ! Math.floor method: 매개변수 = num: 실수값. 리턴값 = 입력값이 실수인 경우 내림처리(ex 10.8 = 10)

        ! Math.ceil method: 매개변수 = num: 실수값. 리턴값 = 입력값이 실수 인 경우 올림처리(ex 10.2 = 11)

        ? Math.ceil(postNumb / 10)
        ? 매개변수로 전달받은 게시글수(105)를 한페이지당 출력값인 (10)으로 나누어 올림처리.
        ? 105 / 10 = 10.5  = 11.
    */
   $numb.text(pages);
}