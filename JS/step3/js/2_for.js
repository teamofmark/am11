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
    ? 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    ? 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/
// !단일 for

// *case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName =  "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 이름을 1000번을 출력해보자.
function namePrint1000(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1,000번 출력 중 홀수 번째만 출력되게 해보자.
function namePrint500(){
    var userName= "Mark";
    // ? 반복문 작성
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.1 JS Engine처럼 생각해보기
function answer1(){
    for(var i = 0; i < 10; i++){ //? i가 10보다 작을때 (0~9)까지 만 반복 수행
        document.write((i+1)+"<br>"); //? 0+1 = 1....2.3.4.5.. 출력.
    }
}
function answer2(){
    for(var i = 1; i <= 10; i++){ //? 10보다 작거나 같을 때 (1~10)까지 만 반복 수행
        document.write(i + '<br>'); //? 1~10까지 출력.
    }
}
function answer3(){
    for(var i = 100; i < 110; i++){ //? 110보다 작거나 같을때 (100~109)까지 만 반복
        document.write((i-99) + '<br>'); //? (-99) 로인한 1~10까지 출력.
    }
}
function answer4(){
    for(var i = 1; i <= 10; i+=2){ //? 10보다 작거나 같을 때(1~10)까지 만 반복.
        document.write(i + '<br>'); //? 1, 3, 5, 7, 9...(증감이 이뤄지지 않은 iteration)
        document.write((i+1) + '<br>'); //? 2, 4, 6, 8, 10...(증감이 이뤄진 iteration)
    }
}
function answer5(){
    for(var i = 10; i >= 1; i--){ //? 1보다 크거나 같을 때 (10~1) 까지 만 반복 수행.
        document.write((11 - i) + "<br>"); //? (11-) 1~10번까지 출력.
    }
}
// *case. 3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하라.
function favorFluit(){
    var array = ['포도','사과','바나나','수박','딸기','자두'];
    
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 JS 단원명을 배열을 활용해 출력해보기.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    // ? 갯수만큼 반복문으로 출력해보기.
    for (var i = 0; i < data.length; i++) {
        document.write((i+1) + "번째 내용 =" + data[i] + '<br>');
    }
    /*
        * 1번째 내용 =변수
        * 2번째 내용 =연산자
        * 3번째 내용 =형변환
        * 4번째 내용 =조건문 if
        * 5번째 내용 =조건문 switch
        * 6번째 내용 =반복문 while
        * 7번째 내용 =반복문 for
    */
}
// *case.4 역반복 호출
function reverseFavorFluit(){
    var array = ['포도','사과','바나나','수박','딸기','자두'];
    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i]);
    }
}
// *case.5 continue문
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.6 continue 활용한 filter.
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        output += i;
        alert(output);
    }
}
// *case.7 for break
function forBreak(){
    for(var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case.8 break 활용
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + '번째 반복 수행중입니다.');
        if(!confirm('계속할래?')){
            break;
        }
    }
}

// ! 다중 for

// *case. 1 반절피라미드
function halfPyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){ //?

        for(var j = 0; j < i; j++){ //?
            star += '*'; //?
        }

        star += '<br>';     //?   
    }
    document.write(star); //?
}
// todo. 역반절피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i >= 1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo. 피라미드(완성형)
function pyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //?
        for(var e = 10; e>=i; e--){ //?
            star += '&nbsp;'; //?
        }
        for(var s = 0; s < 2*i-1; s++){ //?
            star += '*'; //?
        }
        star += '<br>'; //?
    }
    document.write(star); //?
}
function pyramidEx(){
    for(var i = 0; i < 10; i++){ //?
        for(var j = 9; j > i; j--){ //?
            document.write("&nbsp;");
        }
        for(var j = 0; j <= i; j++){ //?
            document.write('*'); //?
        }
        for(var j = 1; j <= i; j++){ //?
            document.write('*'); //?
        }
        document.write('<br>'); //?
    }
}