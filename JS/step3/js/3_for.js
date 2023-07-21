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
// ! 단일 반복
// *case. 1 이름을 10번 출력.
function namePrint10(){
    var userName = "Mark";
    var arr = ['data01','data02','data03'];
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case. 2 이름을 1,000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1,000번 출력중 홀수 번째만 출력.
function namePrint500(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i+=2) {
        document.write(i+'.'+ userName +'<br>');
    }
}
// * case.3 JS Engine처럼 생각해보기
function thinkJS(){
    for(var i = 0; i < 10; i++){ //? i가 10보다 작을때 (0~9)까지만 반복 수행. = 10회반복
        document.write("i = " + i, "<br>"); //? 0 ~ 9 까지 출력.
    } //? i가 10이되는 순간 break.
    document.write("종료 i = " + i); //? 이미 변경된 10이 출력될것이다.
}
// todo. 1 ~ 10까지 출력되는 반복문을 최소 5개. 다른형태로 짜보기.
function answer1(){
    for (var i = 0; i < 10; i++){
        document.write((i+1) + '<br>');
    }
}
function answer2(){
    for(var i = 1; i <= 10; i++){
        document.write(i + '<br>');
    }
}
function answer3(){
    for(var i = 100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for(var i=1; i<=10; i+=2){
        document.write(i+"<br>");
        document.write((i+1)+"<br>");
    }
}
function answer5(){
    for(var i = 10; i>=1; i--){
        document.write((11 - i) + "<br>");
    }
}
// *case.4 자신이 좋아하는 과일 4개를 '배열'로 배치하고, alert으로 출력하기.
function favorFruit(){
    var array = ["자두","복숭아","메론","수박","포도","딸기"]; //? 변수선언 및 배열초기화
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo. 지금까지 배웠던 JS단원을 배열을 활용해 출력하되, 1,2,3,4 가 아닌 첫,두,세,네 로 변환.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = '';
    for(var i = 0; i<data.length; i++){
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
        }
        document.write(swapNumb + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayFor2(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for (var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = " + data[i] + "<br>");
    }
}

// *case.5 역배열 (rev.sort)
function reverseFavorFruit(){
    var array = ["자두","복숭아","메론","수박","포도","딸기"]; //? 변수선언 및 배열초기화
    for(var i=array.length-1; i>=0; i--){
        document.write(array[i]);
    }
}
// *case.6 continue
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
function continueEx(){
    var text = '';
    for (var i = 0; i < 10; i++){
        if(i == 3){
            continue;
        }
        text = text + i;
    }
    console.log(text);
}
// * continue 활용 (filter)
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        output += i; //? (2,6,12,20,30)
        console.log(output); //? 예상결과 : 
    }
}
// *case. 7 break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write("최종 i = " + i + "<br>");
}
function breakEx(){
    // for( var i = 0; i < 6; i++){

    // }
    var i = 0;
    while (i < 6){
        if (i == 3){
            break;
        }
        i = i + 1;
    }
    console.log(i); //? 예상결과 : 
}
// * case. 8 break 문 활용
function runBreak(){
    // ? while(true){

    // }
    for (var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(confirm('중지할래?')){
            break;
        }
    }
}
// ! 다중 반복
// *case. 1 반절 피라미드.
function halfPyramid(){
    var star = '';
    for(var i = 1; i<=10; i++){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo. 역반절피라미드
function reverseHalfPyramid(){
    var star = '';
    for(var i = 10; i>=1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}