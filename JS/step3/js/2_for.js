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
// ! 단일 for
// case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 1; i <=10; i++){
        document.write(i + '. ' + userName,"<br>");
    }
}
// case.2 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i++){
        document.write(i + '. ' + userName,"<br>");
    }
}
// case.3 위 반복을 홀수로만
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i<=1000; i+=2){
        document.write(i + '. ' + userName,"<br>");
    }
}
// todo. 1-10까지 출력되는 반복문을 다양한 형태로 만들어보자.(수량제한없음)
function answer1(){
    for(var i = 1; i<=10; i++){
        document.write(i+"<br>");
    }
}
function answer2(){
    for(var i = 1; i<=10; i+=2){
        document.write(i+"<br>");
        document.write((i+1)+"<br>");
    }
}
function answer3(){
    for(var i = 100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for(var i = 10; i>=i; i--){
        document.write((11-i) + '<br>');
    }
}
// case.4 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력하라.
function favorFruit(){
    var array = ["복숭아","자두","딸기"];
    for(var i = 0; i < array.length; i++){
        console.log(array.length);
        alert(array[i]);
    }
}
function arrayFor(){
    var data = ["변수","연산자","형변환","조건문if","조건문switch","반복문while","반복문for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for(var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = " + data[i] + '<br>');
    }
}
// todo. switch문을 이용하여 같은 결과 만들어보기
function arrayFor2(){
    var data = ["변수","연산자","형변환","조건문if","조건문switch","반복문while","반복문for"];
    var swapNumb = '';
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
            default:
                i = 'x';
                break;
        }
        document.write(swapNumb + '번째 내용 = ' + data[i] + '<br>');
    }

}
// case. 5 역반복배열
function reverseFavorFruit(){
    var array = ["복숭아","자두","딸기","수박","메론","사과"];
    for (var i = array.length-1; i >= 0; i--){
        document.write(array[i]);
    }
}
// case. 6 continue
function forContinue(){
    for(var i = 0; i<10; i++){
        continue;
        document.write(i+'<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// case. 7 continue 활용
function continueEx(){
    var text = '';
    for(var i = 0; i<10; i++){
        if(i%2==0){
            continue;
        }
        text = text + i;
    }
    console.log(text);
}
// todo. continue 문제 - 1부터 10까지 짝수만 누적총합 출력.
function runContinue(){
    var output = 0;
    for(var i = 1; i<=10; i++){
        if(i%2==1){
            continue;
        }
        output += i; // (2,6,12,20,30)
        console.log(output);
    }
}
// case. 8 break
function forBreak(){
    for(var i = 1; i<=10; i++){
        break;
        document.write(i + "<br>");
    }
    document.write('최종 i =' + i + '<br>');
}
// case. 9 break 활용
function breakEx(){
    var i = 0;
    while(i<6){
        if(i==3){
            break;
        }
        i += 1;
    }
    console.log(i);
}
// todo. break 문제
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속반복할까?')){
            break;
        }
    }
}

// ! 다중 for

// case.1 반절 피라미드
function halfPyramid(){
    var star = '';
    for(var i = 1; i<= 10; i++){
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
    for(var i = 10; i>=1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo. 2 완성형피라미드 - 내일까지
function pyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++) { //? 1. ifor = 1~10 까지 수행
        for (var e = 10; e >= i; e--) { //? 2. efor = 10 ~ 1까지 수행
            star += '&nbsp;'; //?. 공백이 10개부터 1개까지 들어감.
        }
        for (var s = 0; s < 2*i-1; s++){ //? 3. sfor = i가 들어올때마다 홀수화 됨. (1,3,5,7,9,11,13,15,17,19)
            star += '*';//? 홀수화 된 s의 수치만큼 반복해서 *이 들어감.
        }
        star += '<br>';//? ifor 만큼 <br>을 변수 star에 넣음
    }
    document.write(star);
}
function pyramidEx(){
    for(var i = 0; i < 10; i++){
        for(var j = 9; j > i; j--){
            document.write('&nbsp;');
        }
        for(var j = 0; j <= i; j++){
            document.write('*');
        }
        for(var j = 1; j <= i; j++){
            document.write('*');
        }
        document.write("<br>");
    }
}