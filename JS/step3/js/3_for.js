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
    ! 1. 초기식실행 > 2. 조건식 비교, 조건이 거짓일 경우 반복문 종료 > 
    ! 3. 참일경우 문장 실행 > 4. 종결식 실행 > 5. 2단계
*/

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
        document.write(i + '.' + userName + '<br>');
    }
}
// *case.3 이름을 500번만 찍되 홀수만.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}

// todo.1 js Engine처럼 생각해보기.

function thinkJs(){
    for (var i = 0; i < 10; i++){ //? 10보다 작을때 (0 - 9)까지만 반복수행.
        document.write('i = ' + i, '<br>'); //? 0 - 9까지 출력.
    } //? i 가 10이되는순간 break.
    document.write('종료 i = ' + i); //? 이미 변경된 10이 출력.
}
// todo.2 1 - 10 까지 출력되는 반복문의 다양한 방법.
function answer1(){
    for(var i = 0; i < 10; i++){ //? 10보다 작을때 (0~9)까지만 수행
        document.write((i + 1) + '<br>'); //?(0+1,1+1...) 1 - 10번까지 출력
    }
}
function answer2(){
    for(var i = 100; i < 110; i++){ //? 110작거나 같을때 (100-109)까지만 수행
        document.write((i-99) + '<br>'); //? (100-99, 101-99....) 1 - 10까지 출력.
    }
}
function answer3(){
    for(var i = 1; i <= 10; i+=2){ //? 10보다 작거나 같을때 (1-10)까지만 반복 수행. 루프 이후 +2.
        document.write(i + '<br>'); //? 1,3,5,7,9.. (증감이 이루어지지 않은 iteration)
        document.write((i+1) + '<br>'); //? 2,4,6,8,10...(증감이 이루어진 후 iteration)
    }
}
function answer4(){
    for (var i = 10; i >= 1; i--){ //? 1보다 크거나 같을때 (10 - 1)까지만 수행.
        document.write((11-i) + '<br>'); //? (11-10, 11-9...) 1 - 10 까지 출력.
    }
}
// *case.4 * 10개가 찍힌 결과를 출력.

function star10(){
    var star = '';
    for (var i = 0; i < 10; i++){
        star += '*';
    }
    document.write('result = ' + star);
}
// *case.5 자신이 좋아하는 과일 4개를 배열로 배치하고, alert으로 출력.
function favorFluit(){
    var array = ['포도','딸기','메론','자두','파인애플','사과'];
    for (var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// todo.3 지금까지 배웠던 js 단원을 배열을 활용해 출력해보기.
function arrayFor(){
    // *배열값 : 변수, 연산자, 형변환, 조건문if, 조건문 switch, 반복문 while, 반복문 for
    var data = ["변수", "연산자", "형변환", "조건문if", "조건문 switch", "반복문 while", "반복문 for"];
    for (let i = 0; i < data.length; i++){
        const element = data[i];
        document.write((i + 1) + '번째 내용 = ' + element + '<br>');
    }
}
// *case. 6 역반복 배열부르기

function reverseFavorFluit(){
    var array = ['포도','딸기','메론','자두','파인애플','사과'];

    for(var i = array.length - 1; i >= 0; i--){ //? i var 는 배열의 갯수(6) - 1 index와동기화
        alert(array[i]);
    }
}
// *case. 7 continue문
function forContinue(){
    for (var i = 0; i <= 10; i++){
        continue;
        document.write(i+'<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case. 8 continue활용
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 100; i++){
        // condition
        if( i % 2 == 1){
            continue;
            /*
                ?i가 홀수일 경우 반복중지, 다음반복수행.
                * 3을 2로 나눈 나머지가 1과 일치 = 다음반복수행
                * 4를 2로 나눈 나머지가 1과 일치 != 하단로직수행
            */
        }
        output += i; //? 2, 6, 12, 20.....
        document.write(output + '<br>');
    }
}
// *case. 9 break문
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + '<br>');
    }
    document.write('최종 i = ' + i + '<br>');
}
// *case. 10 break문 활용
function runBreak(){
    for (var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}
// ! 다중 for
// *case. 1 반절 피라미드

function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
// todo.1 역반절 피라미드
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--){ //? 
        for (var j = 0; j < i; j++){ //? 
            star += '*'; //?
        }
        star += '<br>'; //?
    }
    document.write(star); //?
}

// todo.2 피라미드
function pyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){ //?
        for (var e = 10; e >= i; e--){ //?
            star += '&nbsp;'; //?
        }
        for (var s = 0; s < 2*i -1; s++){ //?
            star += '*'; //?
        }
        star += '<br>'; //?
    }
    document.write(star);
}

/*
    star 변수에 빈 공간이 마련된다.
            1. i 반복문이 실행된다.

            2. j 에서 초기값 11이 i보다 클때까지만 루프당 e값을 1씩 빼주면서 실행한다.
            ('10''9''8''7''6''5''4''3''2''1') 10 > 0
            ('10''9''8''7''6''5''4''3''2') 10 > 1
            ('10''9''8''7''6''5''4''3') 10 > 2
            ('10''9''8''7''6''5''4') 10 > 3
            ('10''9''8''7''6''5') 10 > 4
            ('10''9''8''7''6') 10 > 5
            ('10''9''8''7') 10 > 6
            ('10''9''8') 10 > 7
            ('10''9') 10 > 8
            ('10') 10 > 9 

            3. k 에서 k값이 2*i -1보다 작을 때 루프당 s값을 1씩 더하면서 실행한다.
             (*) 0 < 1 (2*1-1) // 한번 실행          * why? 첫번째 i 루프가 끝나면 k나 j는 다시 0부터 시작.
            (***) 0 < 3 (2*2-1) // 세번 실행
           (*****) 0 < 5 (2*3-1) // 다섯번 실행
          (*******) 0 < 7 (2*4-1) // 일곱번 실행
         (*********) 0 < 9 (2*5-1) // 아홉번 실행
        (***********) 0 < 11 (2*6-1) // 열한번 실행
       (*************) 0 < 13 (2*7-1) // 열세번 실행
      (***************) 0 < 15 (2*8-1) // 열다섯번 실행
     (*****************) 0 < 17 (2*9-1) // 열일곱번 실행
    (*******************) 0 < 19 (2*10-1) // 열아홉번 실행      *why ? i 값이10보다 작거나 같을때 까지만 실행

            4. 줄바꿈(br)이 i 값이 10보다 작거나 같을때 까지만 루프당 i값을 1씩 더하면서 실행된다.
    */