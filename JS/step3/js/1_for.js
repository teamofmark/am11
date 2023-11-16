/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    실무사용의 예
    1. 게시판의 게시글 목록 불러올 때
    2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    4. 갤러리의 이미지 목록을 출력 할 때
    5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 이하 구문 실행 > 4. 증감부 실행 > 5. 2단계

for (var index = 0; index < 10; index++) {
    console.log(index);
}
*/
// ! 단일 for
// *case. 1 이름을 열 번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 0; i < 10; i++){
        document.write((i+1) + '.' + userName + '<br>');
    }
}
// *case. 2 이름 1,000번 출력중 홀수번째만 나오게 하기.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1 - 10까지 출력되는 반복문을 5개 형태로 짜보기
function answer1(){
    for(var i = 0; i < 10; i++){
        document.write((i+1) + "<br>");
    }
}
function answer2(){
    for(var i = 1; i <= 10; i++){
        document.write(i+"<br>");
    }
}
function answer3(){
    for(var i = 100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for(var i = 1; i<= 10; i+=2){
        document.write(i + "<br>");
        document.write((i+1) + "<br>");
    }
}
function answer5(){
    for(var i = 10; i >= 1; i--){
        document.write((11-i) +"<br>");
    }
}
// *case. 3 자신이 좋아하는 과일 4개를 배열에 저장하고, alert으로 출력하기.
function favorFruit(){
    var array = ['메론','수박','귤','오렌지','딸기'];
    // ? array(배열) - data들이 저장되는 방.
    // ! 호출- array[indexNumber]; ex> array[0] -> 메론..
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// *case. 4 역반복
function reverseFavorFruit(){
    var array = ['메론','수박','귤','오렌지','딸기'];
    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i] +"<br>");
    }
}
// todo. 기존 숫자로 출력되는 순서를 한글화 하여 출력하기.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    
}