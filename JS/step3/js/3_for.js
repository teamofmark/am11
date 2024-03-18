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
// *case. 1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo.1 이름을 1,000번 출력할 예정인데 이 중 홀수 번째(1,3,5,7,9...)만 나오게.
function namePrint500(){
    var myName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i+'.'+myName+'<br>');
    }
} 
// todo.2 1 - 10 까지 출력되는 반복문을 직접 짜보자. - 최소 3개이상.
function answer1(){
    for(var i = 1; i <= 10; i++){
        document.write(i +"<br>");
    }
}
function answer2(){
    for(var i = 0; i<10; i++){
        document.write((i+1)+"<br>");
    }
}
function answer3(){
    for(var i = 100; i<110; i++){
        document.write((i-99)+"<br>");
    }
}
function answer4(){
    for(var i = 10; i>=1; i--){
        document.write((11-i)+"<br>");
    }
}
function answer5(){
    for(var i = 1; i<=10; i+=2){
        document.write(i+"<br>");
        document.write((i+1)+"<br>");
    }
}

// *case.2 반복문 사용의 예 - 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 순차출력.
function favorFruit(){
    var array = ["딸기","귤","수박","메론","포도"]; //? [0,1,2,3]방 만들어짐.
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 JS 단원명을 배열을 활용해 출력하되, 숫자가 아닌 한글순서로 출력되게.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    /*
        * 첫번째 내용 =변수
        * 두번째 내용 =연산자
        * 세번째 내용 =형변환
        * 네번째 내용 =조건문 if
        * 다섯번째 내용 =조건문 switch
        * 여섯번째 내용 =반복문 while
        * 일곱번째 내용 =반복문 for
    */
}