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
    ! 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    ! 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/

// *case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}

// *case.2 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.3 이름을 500번만 찍되 홀수만.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.1 js Engine처럼 생각해보기.

function thinkJs(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때 (0 - 9)까지만 반복수행.
        document.write('i = ' + i, '<br>'); //? 0 - 9까지 출력.
    } //? i 가 10이되는순간 break.
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}
// todo.2 1 - 10 까지 출력되는 반복문의 다양한 방법.
function answer1(){
    for(var i = 0; i < 10; i++){ //? 10보다 작을때 (0~9)까지만 수행
        document.write((i + 1) + '<br>'); //?(0+1,1+1...) 1 - 10번까지 출력
    }
}
function answer2(){
    for(var i = 100; i < 110; i++){ //? 110작거나 같을때 (100-109)까지만 수행
        document.write((i-99) + '<br>'); //? (100-99, 101-99....) 1 - 10까지 출력.
    }
}
function answer3(){
    for(var i = 1; i <= 10; i+=2){ //? 10보다 작거나 같을때 (1-10)까지만 반복 수행. 루프 이후 +2.
        document.write(i + '<br>'); //? 1,3,5,7,9.. (증감이 이루어지지 않은 iteration)
        document.write((i+1) + '<br>'); //? 2,4,6,8,10...(증감이 이루어진 후 iteration)
    }
}
function answer4(){
    for (var i = 10; i >= 1; i--){ //? 1보다 크거나 같을때 (10 - 1)까지만 수행.
        document.write((11-i) + '<br>'); //? (11-10, 11-9...) 1 - 10 까지 출력.
    }
}