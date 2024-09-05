/*
    ? math class
    * 1. 수학 관련 기능
    * 2. 많은 기능중 random(), max(), min(), ceil(), floor()는 최소 알아둬야 함.
*/

var $numb = null;

function randomNumb(){
    $numb = $("#numb");
    setInterval(showRandom, 500);
}
function showRandom(){
    var value = parseInt(Math.random()*50) + 50;
    $numb.text(value);
}

function rangeNumb(){
    $numb = $("#numb");
    insertNumb();
}
function insertNumb(){
    var value = prompt('숫자를 입력하시오', 0);
    range(value);
}
function range(value){
    value = Math.min(100,Math.max(10,value));
    $numb.text(value);
    /*
        ! Math.min method : 매개변수 = minValue(최솟값), userValue(비교값). 리턴값 = userValue 값과 minValue 값을 비교해 작은 값을 리턴.
        ? 1. Math.min(minValue(100), userValue(Math.max(10,value)))
        ? 100이라는 최솟값과 비교값을 비교하여 작은수를 리턴한다. 한마디로 100이하 수는 그대로 리턴하고 100이상 수는 100을 리턴.
        
        ! Math.max method : 매개변수 = maxValue(최댓값), userValue(비교값). 리턴값 = userValue 값과 maxValue 값을 비교해 큰 값을 리턴.
        ? 2. Math.max(10,value)
        ? 10이라는 최댓값과 비교값을 비교해 큰 수를 리턴한다. 한마디로 10이상 수는 그대로 리턴하고, 10이하 수는 10을 리턴한다.
    */  
}
// *ex. 3 총 페이지수 구하기.

function pageCount(){
    $numb = $("#numb");
    count(105);
}
function count(postNumb){
    var pages = Math.ceil(postNumb/10);
    /*
        ! Math.floor method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 내림한 정수값 (ex 10.2 = 10)
        
        ! Math.ceil method : 매개변수 = num : 실수값. 리턴값 = 입력값이 실수 인 경우 올림한 정수값 (ex 10.2 = 11)
        ? Math.ceil(postNumb/10)
        ? 매개변수로 전달받은 게시글수(105)를 한페이지당 출력값인 (10)으로 나누어 올림값으로 리턴.
        ? 105 / 10 = 10.5 = 11.
    */
    $numb.text(pages);
}
