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
// ! 단일 for 문

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
        document.write(i + '.'+userName + '<br>');
    }
}
// *case.3 1,000번 출력중에 홀수번째만 출력?
function namePrint500(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 머리속에 생각나는 1 - 10 까지 출력되는 반복문을 직접 짜보자.
function answer1(){
    for(var i = 0; i < 10; i++){
        document.write((i+1)+"<br>");
    }
}
function answer2(){
    for(var i = 1; i <= 10; i++){
        document.write(i +"<br>");
    }
}
function answer3(){
    for(var i = 100; i < 110; i++){ //? 일정data를 jump한 다음 불러오기.
        document.write((i-99)+"<br>");
    }
}
function answer4(){
    for(var i = 1; i <= 10; i+=2){
        document.write(i +"<br>"); //? 1, 3, 5, 7, 9.. (증감이 이루어지지 않은 iteration)
        document.write((i+1) +"<br>");//? 2, 4, 6, 8, 10..(증감이 이루어 진 후 iteration)
    }
}
function answer5(){
    for(var i = 10; i >= 1; i--){
        document.write((11-i) +"<br>");
    }
}
// *case. 4 자신이 좋아하는 과일 4개를 배열로 배치하고, alert 출력.
function favorFluit(){
    var array = ['포도','사과','바나나','망고','딸기','메론'];
    for (var i = 0; i < array.length; i++){
        document.write(array[i] + '<br>');
    }
}
// todo. 지금까지 배웠던 JS단원명을 배열을 활용해 출력해보자.
// ? 변수,연산자,자료형,형변환,조건문if,조건문switch,반복문while,반복문for
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"]; //? "1"번째 내용 = 변수 ...
    // ? ECMA Script.
    for (let i = 0; i < data.length; i++){ //? 상시변수 - 늘 변할 수 있는 변수
        const element = data[i]; //? 비상시변수 - 개발자가 원할 시에만 변경해야 하는 변수(잠금?)
        document.write((i+1) + '번째 내용 = ' + element + '<br>');
    }
}
// *case. 5 역반복 배열
function reverseFavorFluit(){
    var array = ['포도','사과','바나나','망고','딸기','메론'];
    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i] + '<br>');
    }
}

// *case. 6 forContinue ?
function forContinue(){
    for (var i = 0; i < 10; i++){
        continue; //? 위 조건이 참일 지라도 continue가 있어서 continue이하 구문 실행불가.
        document.write(i+'<br>');
    }
    document.write('최종 i = ' + i + "<br>"); //? 상관없음(continue) - why? for 밖 logic.
}
// *case. 6-1 forContinue 활용.
function runContinue(){
    var output = 0;
    for(var i = 1; i <= 10; i++){
        // console.log("현재 i = " + i);
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
            continue; //? 홀수 필터
        }
        output += i;
        document.write(output + '<br>');
    }
}
// *case. 7 forbreak?
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break; //? 위 조건이 참일 지라도 break가 존재하면 해당로직 강제 탈출.
        document.write(i +'<br>');
    }
    document.write("최종 i = " + i + "<br>"); //? 상관없음. -> why? for 밖 logic.
}
// *case. 8 forBreak 활용?
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + '번째 반복문'); //? 한번은 수행시키기.
        if(!confirm('계속할래?')){ //? 반환받은 값이 !true(false)일 경우 중지 / !false(true)일 경우 재실행.
            break;
        }
    }
}
//* login Process -> 5회이상 틀렸을 때 -> 경고창 출력. 이후 매회 경고창출력(10회도달시까지)
//* -> 차단.

// ! 다중 for
// *case. 9 반절 피라미드

function halfPyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
//*todo.1 역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--) {//? 1. ifor = 10~1 까지 수행
        for (var j = 0; j < i; j++) { //? jfor = j가 i보다 작을때 까지 반복 수행 10,9,8,7,6....
            star += '*';//? 변수 star에 반복생성된 만큼 *을 넣음.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음.
    }
    document.write(star);
}

// todo. 피라미드
function pyramid(){

}