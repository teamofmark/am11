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
// *case. 1 이름을 열 번 출력해보자.
function namePrint10(){
    var userName = "Mark";
    for(var i = 0; i < 10; i++){
        document.write((i+1) + '.' + userName + '<br>');
    }
}
// *case. 2 이름 1,000번 출력중 홀수번째만 나오게 하기.
function namePrint500(){
    var userName = "Mark";
    for(var i = 1; i <= 1000; i+=2){
        document.write(i + '.' + userName + '<br>');
    }
}
// todo. 1 - 10까지 출력되는 반복문을 5개 형태로 짜보기
function answer1(){
    for(var i = 0; i < 10; i++){
        document.write((i+1) + "<br>");
    }
}
function answer2(){
    for(var i = 1; i <= 10; i++){
        document.write(i+"<br>");
    }
}
function answer3(){
    for(var i = 100; i<110; i++){
        document.write((i-99) + "<br>");
    }
}
function answer4(){
    for(var i = 1; i<= 10; i+=2){
        document.write(i + "<br>");
        document.write((i+1) + "<br>");
    }
}
function answer5(){
    for(var i = 10; i >= 1; i--){
        document.write((11-i) +"<br>");
    }
}
// *case. 3 자신이 좋아하는 과일 4개를 배열에 저장하고, alert으로 출력하기.
function favorFruit(){
    var array = ['메론','수박','귤','오렌지','딸기'];
    // ? array(배열) - data들이 저장되는 방.
    // ! 호출- array[indexNumber]; ex> array[0] -> 메론..
    for(var i = 0; i < array.length; i++){
        alert(array[i]);
    }
}
// *case. 4 역반복
function reverseFavorFruit(){
    var array = ['메론','수박','귤','오렌지','딸기'];
    for(var i = array.length - 1; i >= 0; i--){
        document.write(array[i] +"<br>");
    }
}
// todo. 기존 숫자로 출력되는 순서를 한글화 하여 출력하기.
function arrayFor(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = '';
    for(var i = 0; i < data.length; i++){
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
        document.write(swapNumb + "번째 내용 = " + data[i] + '<br>');
    }
}
function arrayFor2(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
    var swapNumb = ["첫","두","세","네","다섯","여섯","일곱"];
    for(var i = 0; i < data.length; i++){
        document.write(swapNumb[i] + "번째 내용 = " + data[i] + "<br>");
    }
}

function arrayForES(){
    var data = ["변수", "연산자", "형변환", "조건문 if", "조건문 switch", "반복문 while", "반복문 for"];
   for (let i = 0; i < data.length; i++){
    const element = data[i];
    document.write(i + "번째 내용 = " + element + "<br>");
   }
}

// *case. 5 continue
function forContinue(){
    for(var i = 0; i <= 10; i++){
        continue;
        document.write(i + "<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function continueEx(){
    let text = '';
    for (let i = 0; i< 10; i++){
        if(i == 3){
            continue;
        }
        text= text + i;
    }
    console.log(text); //? Expect ->""
}
// todo. continue를 사용하여 1~10까지 중 짝수의 누적 총 합을 출력하기.
function runContinue(){
    var output = 0;
    for (var i = 1; i <= 10; i++){
        if(i % 2 == 1){
            continue;
        }
        output += i;
        console.log(output);
    }
}

// *case. 6 break
function forBreak(){
    for (var i = 1; i <= 10; i++){
        break;
        document.write(i + "<br>");
    }
    document.write("최종 i = " + i + "<br>");
}
function breakEx(){
    var i = 0;
    while(i < 6){
        if(i == 3){
            break;
        }
        i = i + 1;
    }
    console.log(i);
}
// *case.7 break 활용
function runBreak(){
    for(var i = 0; true; i++){
        alert(i + '번째 반복문');
        if(!confirm('계속할래?')){
            break;
        }
    }
}

// ! 다중 for 문
// *case. 8 반절 피라미드
function halfPyramid(){
    var star = '';
    for (var i = 1; i <= 10; i++){
        for (var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
function reverseHalfPyramid(){
    var star = '';
    for (var i = 10; i >= 1; i--){ //? 1. ifor = 10 ~ 1 까지 수행
        for(var j = 0; j < i; j++){
            star += '*';
        }
        star += '<br>';
    }
    document.write(star);
}
function pyramid(){
    var star = '';
    // ? &nbsp; x 1 , '*' x 1(홀수), '<br>' x 1
    for(var i = 1; i <= 10; i++){
        for(var e = 10; e >= i; e--){
            star += '&nbsp;';
        }
        for(var s = 0; s < 2*i-1; s++){
            star += '*';
        }
        star += '<br>';
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
function pyramidCustom(n){
    for (var i = 1; i <= n; i++){
        var s = '';
        for (var j = 1; j <= (2 * n - 1); j++){
            (j >= n + 1 - i && j <= n - 1 + i) ? s += '*' : s += ' ';
        }
        console.log(s);
    }
}
function pyramidEx(){
    for(var i = 0; i < 10; i++)  {
        for(var j=9; j > i; j--)  {
          // space
          document.write('&nbsp');
        }
        for(var j=0; j <= i; j++)  {
          document.write('*');
        }
        for(var j=1; j <= i; j++)  {
          document.write('*');
        }
        document.write('<br>');
      }      
}
function gugudan(){
    // todo 입력받은 단수를 x1~x9까지 document.write로 출력하는 함수
    var guguNumb = prompt('알고싶은 구구단수를 입력');
    for(var i = 1; i <= 9; i++){
        document.write(guguNumb + ' x ' + i + ' = ' + guguNumb*i + '<br>');
    }
}
function arraySum(){
    // todo 담긴 배열의 총합을 document.write로 출력하는 함수
    var data = [10,20,30,40,50];
    var result = 0;
    for(let i = 0; i < data.length; i++){
        result += data[i];
    }
    document.write('해당 배열의 총합은 = ' + result);
}