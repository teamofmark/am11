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
    * 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    * 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/
// ! 단일 for

// *exp.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = 'Mark';
    for(var i = 1; i <= 10; i++){
        document.write(i+'.'+userName +'<br>');
    }
}
//*exp.2 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++) {
        document.write(i+'.'+ userName +'<br>');
    }
}
// todo.1 이름을 500번만 찍되 홀수만 나오게 해보자.
function namePrint500(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i+=2){
        document.write(i+'.'+userName+'<br>');
    }
}
// todo.2 자바스크립트 엔진처럼 생각해보자.
function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때 (0~9)까지 만 반복 수행.
        document.write('i =' + i, '<br>'); //? 0 ~ 9번까지 출력. 줄바꿈.
    }//? i가 10이 되는순간 반복 중지.
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}

//todo.2 1 - 10 까지 출력되는 반복문을 직접 짜보자.
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
// *exp.4 자신이 좋아하는 과일 4개를 배열로 배치.alert출력

function favorFluit(){
    var array = ['포도','사과','바나나','망고'];
    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}

//*exp.5 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
function arrayFor(){
    var data = ['변수','연산자','형변환','조건문if', '조건문 switch','반복문 for', '반복문 while'];
    for (var i = 0; i < data.length; i++){
        document.write(i +'번째 내용 ='+data[i]+'<br>');
    }
}
// function arrayForES6(element){
//     var data = ['변수','연산자','형변환','조건문if', '조건문 switch','반복문 for', '반복문 while'];
//     for (let i = 0; i < data.length; i++) {
//         document.write(i +'번째 내용 ='+element+'<br>');
//     }
// }

// *exp.6 역반복 배열
function reverseFavorFluit(){
    var array = ['포도', '사과', '바나나', '망고'];
    for (var i = array.length - 1; i >= 0; i--){
        alert(array[i]);
    }
}
// *exp.7 continue문
function forContinue(){
    for (var i = 0; i <= 10; i++){
        
        continue; //? 위 조건이 참일 지라도 continue가 존재 하면, continue 이하 구문은 실행 되지 않는다.
        document.write(i + '<br>'); //?vscode 에서는 불투명하게 시각화 해서 보여준다.
    }
    document.write('최종 i =' + i + '<br>'); //? 최종 적으로 변경된 i 의 수치(11)만 출력된다.
}
// *exp.8 continue활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        // 조건문
        if(i % 2 == 1){
            /*
                i가 홀수일 경우 반복 중지 다음반복수행, 현재 다음 반복은 없다.
                (1 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                (2 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                (3 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                (4 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                ..
                이조건으로 i값이 10보다 작거나 같을때까지 수행하여 출력하라.
            */
            continue;
        }
        output += i; //(2, 6, 12, 20, 30) - 짝수만 선별하여 10까지의 셈합.
        alert(output); //출력
    }
}
// *exp.9 break문
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i =' + i + '<br>');
}

//*exp.10 break문 활용
function runBreak(){
    for (var i = 0; true; i++) { //? 수행되는 조건 자체가 true 상태기 때문에 무한 루프.
        alert(i + '번째 반복문'); //? 수행. 
        if (!confirm('계속할래?')) {//? alert으로 반복문을 띄운 이후, confirm의 질문에 확인(true)을 누르면 앞의 논리부정연산자로인해 true가 false로 바뀌면서 break를 수행하지 않고 다시 재반복을 수행한다.
            break;
        }
    }
}