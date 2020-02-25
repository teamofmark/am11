/*
    ?for
    *특정구문을 정해진 횟수 만큼 반복해야 할 경우 사용하는 반복문.
    * 실무사용의 예
    * 1. 게시판의 게시글 목록 불러올 때
    * 2. 구글 맵, 네이버 맵 등의 정보를 출력 할 때
    * 3. 메뉴의 항목(관리자제어가능한) 출력 할 때
    * 4. 갤러리의 이미지 목록을 출력 할 때
    * 5. os 등의 파일 탐색기의 파일 목록 출력 할 때...

    *루프
    * 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    * 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계

*/

// !단일 for

// *exp.1 이름을 10번 출력해보자.

function namePrint10(){
    var userName = "Mark";
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo.1 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i++) {
        document.write(i+'.'+ userName +'<br>');
    }
}

// todo.2 이름을 500번만 찍되 홀수만 나오게 해보자.
function namePrint500(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.3 js 엔진처럼 생각해보자.

function thinkJS(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때 (0 ~ 9) 까지만 반복수행
        document.write("i =" + i, "<br>"); //? 반복에 따라 0 ~ 9번까지 출력.
    } //? i가 10이되는 순간 break.
    document.write("종료 i = " + i); //? 이미 변경된 상태의 10이 출력.
}

// * exp.2 1 - 10 까지 출력되는 반복문을 직접 짜보자.

function answer1(){
    for (var i = 0; i < 10; i++){
        document.write((i + 1) + "<br>");
    }
}
function answer2(){
    for (var i = 1; i <= 10; i++){
        document.write(i + "<br>");
    }
}
function answer3(){
    for (var i = 100; i < 110; i++){//? 110보다 작거나 같을때 (100~109)까지만 반복 수행
        document.write((i-99) + "<br>");//?1~10번 까지 출력
    }
}
function answer4(){
    for (var i = 1; i <= 10; i+=2){ //? 10보다 작거나 같을때 (1~10)까지 만 반복 수행, 단 루프가 끝난후 i에 2를 더함.(증감부)
        document.write(i + "<br>");//? 1, 3, 5, 7, 9 (증감이 이루어 지지 않은 iteration)
        document.write((i+1) + "<br>");//? 2, 4, 6, 8, 10 (증감이 이루어 진 이후 iteration)
    }
}
function answer5(){
    for (var i = 10; i>=1; i--){//? 1보다 크거나 같을때 (10~1)까지 만 반복 수행.
        document.write((11-i) + "<br>");//? 1~10번 까지 출력
    }
}

// todo.4 * 10개 찍힌 결과 출력.

function star10(){
    var star = "";
    for (var i = 0; i < 10; i++){
        star += "*";
    }
    document.write("result =" + star);
}

// *exp.3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력.

function favorFluit(){
    var array = ['포도', '오렌지', '바나나', '딸기'];
    
    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}

// *exp.4 지금까지 배웠던 JS를 배열을 활용해 출력해보자.
 function arrayFor(){
     var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 for", "반복문 while"];
    /*
        ?변수 연산자 형변환 조건문if 조건문 switch 반복문 for 반복문 while
    */
    for (var i = 0; i < data.length; i++){
        document.write((i + 1) + "번째 내용 = " + data[i] + '<br>');
    }
}

function arrayForES6(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 for", "반복문 while"];

    for (let i = 0; i < data.length; i++){
        const element = data [i];
        document.write((i + 1) + "번째 내용 = " + element + '<br>');
    }
}

// *exp.6 역반복 배열
function reverseFavorFluit(){
    var array = ['포도', '오렌지', '바나나', '딸기'];

    for (var i = array.length - 1; i >=0; i--){
        //?i 변수는 배열의 갯수 -1 (4-1 = 3) 로 선언, 그 변수가 0보다 크거나 같을때 까지 (3>=0 ----> 3,2,1,0) 실행 .
        alert(array[i]);//?그래서 3,2,1,0 순으로 출력. 이것을 역반복
    }
}

// *exp.7 continue문
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue; //?
        document.write(i + "<br>"); //?
    }
    document.write("최종 i = " + i + "<br>"); //? 최종 변경된 i의 수치 11
}

// *exp.8 continue활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){ //?

        if(i % 2 == 1){
            continue;
            /*
                ? 홀수필터
                i가 홀수일 경우 반복 중지 다음반복수행, 현재 다음 반복은 없다.
                (1 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                (2 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                (3 을 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 다시 반복문으로
                (4 를 2로 나눈 나머지가 1과 일치 할경우  다음 반복을 수행하라.) 이탈후 output += i; 실행
                ..
                이조건으로 i값이 10보다 작거나 같을때까지 수행하여 출력하라.
            */
        }
        output += i; //? (2, 6, 12, 20, 30) - 짝수만 선별하여 10까지의 셈합.

        alert(output); //?
    }
}
// * exp.9 break문
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break; //? 위 조건이 참일 지라도 break가 존재 하면, 반복루프중단.
        document.write(i + "<br>"); //? 수행불가.
    }
    document.write("최종 i =" + i + "<br>"); //? 루프가 실행되지않아 1.
}

// *exp.10 break문 활용
function runBreak(){
    for (var i = 0; true; i++){ //? 수행되는 조건 자체가 true 상태기 때문에 무한 루프.
        alert(i + "번째 반복문"); //? 수행. 
        if(!confirm('계속할래?')){ //? alert으로 반복문을 띄운 이후, confirm의 질문에 확인(true)을 누르면 앞의 논리부정연산자로인해 true가 false로 바뀌면서 break를 수행하지 않고 다시 재반복을 수행한다.
            break;
        }
    }
}

// ! 다중for

function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //? 1. ifor = 1~10 까지 수행

        for (var j = 0; j < i; j++){ //? 2. jfor = j가 i보다 작을때 까지 반복 수행 *,**,***,****,*****......
            star += '*'; //? 변수 star에 생성된 *을 넣음.
        }

        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음
    }
    document.write(star);//? 반절 피라미드 출력.
}

// *todo.1 역반절 피라미드
function reverseHalfPyramid(){ 
    var star = '';
    
    for (var i = 10; i >= 1; i--){//? 1. ifor = 10~1 까지 수행

        for(var j = 0; j < i; j++){ //? jfor = j가 i보다 작거나 같을 때 까지 반복 수행 10,9,8,7,6....
            star += '*'; //? 변수 star에 반복생성된 만큼 *을 넣음.
        }

        star += '<br>'; //? i for 만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);

}

//*todo.2 피라미드
function pyramid(){

    for(){

        for(){

        }
        for(){
            
        }

    }

}