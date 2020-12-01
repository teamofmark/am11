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
    3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/

// ! 단일 for
// *exp.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = 'Mark';
    for (var i = 1; i <= 10; i++){
        document.write(i+ '.' + userName + '<br>');
    }
}

// todo.1 이름을 500번찍되, 홀수만 나와야돼.(1,3,5,7,9,11......)
function namePrint500(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo.2 js engine처럼 생각해보기.
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때 (0-9)까지만 반복수행.
        document.write('i = ' + i, '<br>'); //? 0 - 9 까지 출력.
    } //? i 가 10이 되는순간 반복중지.
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}
//todo.2-1 1 - 10 까지 출력되는 반복문을 직접 짜보자. (생각해보기)

function answer1(){
    for(var i=0; i<10; i++){ //? 10보다 작을때 (0~9) 까지 만 반복 수행
        document.write((i+1)+"<br>");//? 1~ 10번 까지 출력
    }
}
function answer2(){
    for(var i=1; i<=10; i++){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행
        document.write(i+"<br>"); //? 1~10번 까지 출력
    }
}
function answer3(){
    for(var i=100; i<110; i++){ //? 110보다 작거나 같을때 (100~109)까지만 반복 수행
        document.write((i-99)+"<br>"); //?1~10번 까지 출력
    }
}
function answer4(){
    for(var i=1; i<=10; i+=2){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행, 단 루프가 끝난후 i에 2를 더함.(증감부)
        document.write(i+"<br>"); //? 1, 3, 5, 7, 9 (증감이 이루어 지지 않은 iteration)
        document.write((i+1)+"<br>"); //? 2, 4, 6, 8, 10 (증감이 이루어 진 이후 iteration)
    }
}
function answer5(){
    for(var i=10; i>=1; i--){ //? 1보다 크거나 같을때 (10~1)까지 만 반복 수행.
        document.write((11-i)+"<br>"); //? 1~10번 까지 출력
    }
}
// *exp.4 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력.
function favorFluit(){
    var array = ['포도','사과','바나나','망고','사과','바나나','망고','사과','바나나','망고'];
    // alert(array.length);
    for (var i = 0; i < array.length; i++){
        document.write(array[i]);
    }
    
}

// *exp.5 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function arrayFor(){
    var data = ['변수','연산자','형변환','조건문 if','조건문switch','반복문 while','반복문 for'];
    for (var i = 0; i < data.length; i++){
        document.write((i+1) + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayForES6(){
    var data = ['변수','연산자','형변환','조건문 if','조건문switch','반복문 while','반복문 for'];
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        document.write(i + '번째 내용 = ' + element + '<br>');
    }
}

// *exp.6 역반복 배열

function reverseFavorFluit(){
    var array = ['포도','사과','바나나','망고'];

    for (var i = array.length - 1; i>=0; i--){
        document.write(array[i]);
    }
}
// *exp.7 continue

function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

function runContinue(){
    var output = 0;
    for (var i = 1; i<=10; i++){
        if (i % 2 == 1){
            continue;
        }
        output += i;
        alert(output); 
    }
}

// ! 다중 for

// *exp.1 반절 피라미드

function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //? 1. ifor = 1~10 까지 수행
        for (var j = 0; j < i; j++){ //? 2. jfor = j가 i보다 작을때 까지 반복 수행 *,**,***,****,*****......
            star += '*'; //? 변수 star에 생성된 *을 넣음.
        }
        star += '<br>'; //? ifor 만큼 <br>을 변수 star에 넣음
    }
    document.write(star); //? 반절 피라미드출력. 
}
// *exp.2 역반절 피라미드

function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--){
        for (var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}