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
    for (var i = 0; i < 10; i++){ //? 10보다 작을 때 (0 ~ 9) 까지만 반복 수행
        document.write('i = ' + i, '<br>'); //? 0 ~ 9 번까지 출력. i가 10이되는 순간 break.
    }
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}

// todo. 1 - 10까지 출력되는 반복문의 여러 방법.

function answer1(){
    for(var i = 0; i < 10; i++){
        document.write((i+1)+"<br>");
    }
}
function answer2(){
    for(var i = 1; i<=10; i++){
        document.write(i+"<br>");
    }
}
function answer3(){
    for(var i= 100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for(var i = 1; i<=10; i+=2){
        document.write(i + '<br>');
        document.write((i+1) + '<br>');
    }
}
function answer5(){
    // todo. 1~10까지 나오기만 하면됨.
    for(var i = 10; i>=1; i--){
        document.write((11-i)+'<br>');
    }
}

function star10(){
    var star = "";
    for(var i = 0; i < 10; i++){
        star += "*";
    }
    document.write('result = ' + star);
}

// * case.3 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력.
function favorFluit(){
    var array = ['딸기','포도','망고','수박'];
    // console.log(array[0]);
    for (var i = 0; i < array.length; i++){
        console.log(array[i]);
    }
}

// todo. 지금까지 배웠던 JS단원명을 배열을 활용해 출력해보자.
function arrayFor(){
    var data = ['변수','연산자','형변환','조건문if','조건문switch','반복문while','반복문for']; //? 배웠던 js 단원명 배열화.
        //? for loop를 통해 전체 출력(alert,write...);
    for (var i = 0; i < data.length; i++){
        document.write((i+1) + '번째 내용 = ' + data[i] + '<br>');
    }
} 

function arrayForES6(){
    var data = ['변수','연산자','형변환','조건문if','조건문switch','반복문while','반복문for']; //? 배웠던 js 단원명 배열화.
    for(let i = 0; i < data.length; i++){
        const element = data[i];
        document.write(i + '번째 내용 = ' + element + '<br>');
    }
}

// *case.4 역반복배열
function reverseFavorFluit(){
    var array = ['딸기','수박','망고','포도'];

    for (var i = array.length - 1; i>=0; i--){
        document.write(array[i]);
    }
}

// *case.5 continue
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i +'<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}

// *case.5-1 활용
function runContinue(){
    var output = 0;
    for(var i = 1; i<=10; i++){
        if(i%2==1){
            continue;
        }
        output += i; //? i = 짝수만 들어옴. 짝수는 계속해서 누적하여 더해지겠지. = 짝수의 누적증가총합.
        alert(output);
    }
}

// *case.6 break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i = '+ i + '<br>');
}
// *case.6-1 활용
function runBreak(){
    for (var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속하시겠습니까?')){
            break;
        }
    }
}

// !다중 for

// *case.1 반절피라미드

function halfPyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){ //?
        for(var j = 0; j < i; j++){ //?
            star += '*'; //?
        }
        star += '<br>';// ? 너가 무슨 반복 담당할래? -> 줄바꿈(br)
    }
    document.write(star); //?
}
//*todo.1 역반절 피라미드

function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--) { //?
        for (var j = 0; j < i; j++) { //?
            star += '*'; //?
        }
        star += '<br>'; //?
    }
    document.write(star);
}
// todo. pyramid
function pyramid(){
    var star = '';
    for(var i = 1; i <= 10; i++){
        for(var e = 10; e >= i; e--){
            star +="&nbsp;";
        }
        for(var s = 0; s < 2*i-1; s++){ //? sfor = i가 들어올때마다 홀수화 됨(1,3,5,7,9,11..)
            star += "*";
        }
        star += '<br>';
    }
    document.write(star);
}
// ? 공백을 담당할 loop, *를 출력할 loop, <br>을 담당할 loop