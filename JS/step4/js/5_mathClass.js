/*
    ? math class
    * 1. 수학 관련 기능
    * 2. 많은 기능중 random(), max(), min(), ceil(), floor()는 최소 알아둬야 함.
*/

// *ex. 1 0.5초에 한 번씩 50에서 100사이의 숫자(정수)를 #numb에 출력.

var $numb = null;

function randomNumb(){
    $numb = $("#numb");
    setInterval(showRandom, 500);
}
function showRandom(){
    var value = parseInt(Math.random()*50)+ 50;
    /*
    ! random method : 매개변수 = x, 리턴값 = 0 - 1 사이 소수값.
    ? 1. random 메서드는 0 - 1 범위에서 0 과 1을 포함하지 않는 소수를 랜덤하게 리턴한다. (0.111111111~0.999999999)
    ? 2. parseInt는 안의 수를 소수에서 정수로 변환한다.
    ? 3. random*50 이 되면 결과적으로 0 ~ 49 사이의 정수가 나오게 된다.(parseInt) 
    ? 4. 예를 들어 random 에서 0.9938 을 리턴했다면 * 50 이 되면서 49.69 가 되고 parseInt로 인해 49가 된다. 그 이후 50이 더해지며 99가 된다.
    */
   $numb.text(value);
}