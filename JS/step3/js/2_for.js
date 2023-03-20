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
*/
// ! 단일 for.

// *case.1 grammar - 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 1,000번 출력중 홀수 번째만 나오게 해보자.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.3 js engine처럼 생각해보기
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? i가 10보다 작을 때 까지만 반복 수행
        document.write("i = " + i , "<br>"); //? 0,1,2,3,4,5,6,7,8,9 까지만 출력.
    } //? i가 10이되는순간 break.
    document.write("종료되었을 때 i = " + i); //? 이미 변경된 10이 출력.
}
// todo. 1 - 10까지 출력되는 반복문을 최소 5개 이상 만들자.
function answer1(){
    for(var i = 1; i<=10; i++){
        document.write(i+'<br>');
    }
}
function answer2(){
    for(var i = 0; i < 10; i++){
        document.write((i+1),"<br>");
    }
}
function answer3(){
    for(var i = 100; i < 110; i++){
        document.write((i-99)+"<br>");
    }
}
function answer4(){
    for(var i=1; i<=10; i+=2){
        document.write(i + "<br>");
        document.write((i+1)+"<br>");
    }
}
function answer5(){
    for(var i = 10; i >= 1; i--){
        document.write((11-i) + "<br>");
    }
}
// *case. 4 * 10개가 찍힌 결과 출력 - 복습
function star10(){
    var star = "";
    for(var i = 0; i < 10; i++){
        star += "*";
    }
    document.write("result = " + star);
}
// * 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 순차출력.
function favorFluit(){
    var array = ['포도','사과','바나나','망고','딸기','메론','수박'];
    console.log(array.length);
    // ? array(배열) - data들이 저장되는 방. [0번방,1번방,2번방..];
    // ! default sort - 저장되는 순서대로 0부터 증가.
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function arrayFor(){
    var data = ['변수','연산자','형변환','조건문if','조건문switch','반복문while','반복문for'];
    // ? 치환배열을 짜는 방법 var swapNumb = ["첫","두","세"..];
    var swapNumb = '';
    // todo. document.write로 순번달고 출력.
    for(var i = 0; i < data.length; i++){
        swapNumb = i;
        switch(i){
            case 0:
                swapNumb = '첫';
                break;
            case 1:
                swapNumb = '두';
                break;
            case 2:
                swapNumb = '세';
                break;
            case 3:
                swapNumb = '네';
                break;
            case 4:
                swapNumb = '다섯';
                break;
            case 5:
                swapNumb = '여섯';
                break;
            case 6:
                swapNumb = '일곱';
                break;
            default :
                swapNumb = 'x';
                break;
        }
        document.write(swapNumb  + "번째 내용 = " + data[i] + '<br>');
    }
}