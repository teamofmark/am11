/*
    ? for loop
    * 특정 부분을 '정해진 횟수' 만큼 반복해야 할 경우 사용하는 반복문.
    * 게시글 목록 불러올때, 메뉴 목록 불러올때, 갤러리의 이미지 목록 불러올때....
*/
// *case.1 이름을 10번 출력해보자.
function namePrint10(){
    var userName = 'Mark';
    for (var i = 1; i <= 10; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.2 이름을 1000번 출력해보자.
function namePrint1000(){
    var userName = 'Mark';
    for (var i = 1; i <= 1000; i++){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 이름을 1000번중에 홀수만 출력되게 해보자.
function namePrint500(){
    var userName = "Mark";
    for (var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 10번 수행하는 반복문들을 JS Engine처럼 생각해보기
function answer1(){
    for (var i = 0; i < 10; i++){ //?  10보다 작을때 (0 ~ 9) 까지 반복수행.
        document.write((i + 1) + '<br>'); //? 0..(+1) 1 ~ 10번까지 출력.
    }    
}
function answer2(){
    for (var i = 1; i <= 10; i++){ //? 10보다 작거나 같을때 (1~10)까지 반복수행.
        document.write(i + '<br>'); //? 1 ~ 10번 까지 출력.
    }
}
function answer3(){
    for (var i = 100; i < 110; i++){ //? 110보다 작거나 같을때 (100~109)까지 반복수행.
        document.write((i - 99) + '<br>'); //? 100..(-99) 1~ 10번 까지 출력.
    }
}
function answer4(){
    for (var i = 1; i<=10; i+=2){ //? 10보다 작거나 같을때 (1 ~ 10)까지 반복 수행. 반복내 수행이 끝난후 i에 2를 더함.
        document.write(i + "<br>"); //? 1,3,5,7,9...(증가가 이루어 지지 않은 iteration)
        document.write((i+1) + "<br>"); //? 2,4,6,8,10(증가가 이루어진 후 iteration)
    }
}
function answer5(){
    for (var i = 10; i >= 1; i--){ //? 1보다 크거나 같을 때 (10 ~ 1)까지 반복 수행.
        document.write((11 - i) + '<br>'); //? 11 - (10,9,8..) 1 ~ 10번까지 출력.
    }
}

// *case. 3 자신이 좋아하는 과일 4개를 배열로 배치하고 alert으로 출력.
function favorFluit(){
    var array = ['포도', '사과', '바나나', '망고'];
    
    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// *case. 4 지금까지 배웠던 js step들을 배열에 배치하고 출력.
function arrayFor(){
    var data = ['변수','연산자','자료형','형변환','조건문 if','조건문 switch', '반복문 while', '반복문 for'];
    for (var i = 0; i < data.length; i++){
        document.write((i+1) + '.' + data[i] + '<br>');
    }
}
// todo. 역반복 배열
function reverseFavorFluit(){
    var array = ['포도', '사과', '바나나', '망고'];
    // todo. 역반복걸어보기
    for (var i = array.length - 1; i >= 0; i--){ //? i 변수는 배열의 수 -1 (4 - 1 = 3)
        document.write(array[i]); //? 3,2,1,0순으로 출력.
    }
}
// *case. 5 for 에서 continue
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case. 6 continue 활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i%2 == 1){
            continue;
            /*
                * i가 홀수일 경우 반복중지. 다음반복수행.
                * 1을 2로 나눈 나머지가 1과 일치 할 경우 다음 반복을 수행하라. = 다시 반복문으로
                * 2를 2로 나눈 나머지가 1과 일치 할 경우 다음 반복을 수행하라. = 이탈 / output += i;
                * .....
                * 이 조건으로 i value가 10보다 작거나 같을 때 까지 수행 및 출력.
            */
        }
        output += i;
        alert(output);
    }
}

// *case. 7 for break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i =' + i + '<br>');
}
// *case. 8 for break 활용
function runBreak(){
    for (var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){ //? 조건내부에 함수를 사용시에는 반환값 = boolean 유형만가능.
            break;
        }
    }
}
// ! 다중 for

function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //?
        for (var j = 0; j < i; j++){ //?
            star += '*'; //?
        }
        star += '<br>'; //?
    }
    document.write(star); //?
}
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
function pyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //? 1. ifor = 1 ~ 10 까지 수행
        for (var e = 10; e >= i; e--){ //? 2. efor = 10 ~ 1까지 수행
            star += '&nbsp;'; //? 공백이 10개부터 1개까지 들어감.
        }
        for (var s = 0; s < 2*i-1; s++){ //? 3. sfor = i가 들어올때마다 홀수화 됨(1,3,5,7...)
            star += '*'; //? 홀수화 된 s의 수치만큼 반복해서 *이 들어감.
        }
        star += '<br>'; //? ifor만큼 <br>을 변수 star에 추가해주기.
    }
    document.write(star);
}
/*
    ? &nbsp 
    ? (10,9,8,7,6,5,4,3,2,1) 10 > 0
    ? (10,9,8,7,6,5,4,3,2) 10 > 1
    ? (10,9,8,7,6,5,4,3) 10 > 2
    ? (10,9,8,7,6,5,4) 10 > 3
    .
    .
    .
    .
    .
   ?  * 0 < 1 (2*1-1)
   ? *** 0 < 3 (2*2-1)
  ? ***** 0 < 5 (2*3-1)
*/