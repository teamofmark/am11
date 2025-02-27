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
// case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// case.2 이름을 1,000번 출력해보자
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1,000번 출력중 홀수번째만 출력하게 만들어보기
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// case.3 별(*) 10개가 찍힌 결과를 출력하자.
function star10(){
    var star = ''; //? star라는 빈 문자열 변수 선언
    for(var i = 0; i < 10; i++){ //? i가 10보다 작을때 까지만(0~9) 반복 수행 가능
        star += '*'; //? 밖에 star 변수에 반복이 실행 될 때마다 * 문자를 추가해준다.
    } //? i가 10이 되는순간 break.
    document.write('result = ' + star); // 반복이 끝났을 때 수행 가능.
}
// todo. 1 - 10까지 출력되는 반복문을 각기 다른 방식으로 5개만 짜보기
function answer1(){
    for (var i = 0; i < 10; i++){
        document.write((i+1) + "<br>");
    }
}
function answer2(){
    for(var i = 10; i >=1; i--){
        document.write((11-i)+"<br>");
    }
}
function answer3(){
    for(var i = 100; i <110; i++){
        document.write((i-99)+"<br>");
    }
}
function answer4(){
    for(var i =1; i <= 10; i+=2){
        document.write(i +"<br>");
        document.write((i+1) +"<br>");
    }
}
function answer5(){
    for(var i = 1; i <=10; i++){
        document.write(i + "<br>");
    }
}
// case.4 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력하라.
function favorFruit(){
    var array = ['딸기','포도','귤','메론','수박'];
    // [index:0,index:1,index:2,index:3....] - 각 방번호 = index / 0 부터 시작. data들의 방.
    for(var i = 0; i<array.length; i++){
        alert(array[i]);
    }
}

// case.5 지금까지 배웠던 JS과목들을 배열을 활용해 출력해보자.
function arrayFor(){
    var data=['변수','연산자','자료형변환','조건문if','조건문switch','반복문for'];
    for(var i = 0; i < data.length; i++){
        document.write(i + "번째 내용 = " + data[i] + '<br>');
    }
}
// todo 기존에 어색한 0 ~ 5번째 의 항목을 첫,두,세,네,다섯번째로 변경해보기 (switch, array 두개의 방법)
function arrayFor2(){
    var data=['변수','연산자','자료형변환','조건문if','조건문switch','반복문for'];
    var swapNumb = '';
    for(var i = 0; i<data.length; i++){
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
        }
        document.write(swapNumb + '번째 내용 = ' + data[i] + '<br>');
    }
}
function arrayFor3(){
    var data=['변수','연산자','자료형변환','조건문if','조건문switch','반복문for'];
    var swapNumb = ['첫','두','세','네','다섯','여섯'];
    for(var i = 0; i<data.length; i++){
        document.write(swapNumb[i]+'번째 내용 = ' + data[i] + '<br>');
    }
}

// case. 6 역반복
function reverseFavorFruit(){
    var array = ['딸기','포도','귤','메론','수박'];
    for(var i = array.length - 1; i>=0; i--){
        document.write(array[i] + '<br>');
    }
}
// case. 7 continue (break의 형제)
function continueEx(){
    var text = '';
    for(var i = 0; i < 10; i++){
        if(i == 3){
            continue;
            // continue - 방패= 튕겨내는 느낌 = filter제작에 많이 활용 됨
        }
        text += i;
    }
    document.write(text);
}
// todo continue활용
function runContinue(){
    var output = 0;
    for(var i = 1; i<= 10; i++){
        // todo - 1부터 10까지의 "짝수만의 총합"을 구하게 만들어보기(1(x) 2+0 -> 2+3(x) -> 2+4(o) -> ......)
        if(i % 2 == 1){
            continue;
        }
        output += i;
        console.log(output);
    }
}