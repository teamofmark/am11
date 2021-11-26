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