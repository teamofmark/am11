/*
    ?for
    * 특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문. (while은 무한반복을 편하게 / 유한반복은 for가 좀더 편함)
    실무사용의 예
    ? 1. 게시판의 게시글 목록 불러올 때
    ? 2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    ? 3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    ? 4. 갤러리의 이미지 목록을 출력 할 때
    ? 5. os 등의 파일 탐색기의 파일 목록 출력 할 때....

    *루프
    1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/
// ! 단일 for

// * case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = 'Mark';
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// * case.2 이름을 1000번 출력
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. JSEngine처럼 생각하기
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을 때 (0 ~ 9) 까지만 반복 수행
        document.write('i = ' + i, '<br>'); //? 0 ~ 9 번까지 출력. i가 10이되는 순간 break.
    }
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}

// todo. 1 - 10까지 출력되는 반복문의 여러 방법.

function answer1(){
    for(var i = 0; i < 10; i++){
        document.write((i+1)+"<br>");
    }
}
function answer2(){
    for(var i = 1; i<=10; i++){
        document.write(i+"<br>");
    }
}
function answer3(){
    for(var i= 100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for(var i = 1; i<=10; i+=2){
        document.write(i + '<br>');
        document.write((i+1) + '<br>');
    }
}
function answer5(){
    // todo. 1~10까지 나오기만 하면됨.
    for(var i = 10; i>=1; i--){
        document.write((11-i)+'<br>');
    }
}