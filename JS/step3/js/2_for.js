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
    for (var i = 0; i < 10; i++){ //?
        document.write('i = ' + i, '<br>'); //?
    }
    document.write('종료 i = ' + i); //? 
}