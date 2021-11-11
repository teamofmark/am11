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