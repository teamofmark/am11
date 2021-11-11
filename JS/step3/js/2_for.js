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
    for (var i = 0; i < 10; i++){ //?
        document.write((i + 1) + '<br>'); //?
    }    
}
function answer2(){
    for (var i = 1; i <= 10; i++){ //?
        document.write(i + '<br>'); //?
    }
}
function answer3(){
    for (var i = 100; i < 110; i++){ //?
        document.write((i - 99) + '<br>'); //? 
    }
}
function answer4(){
    for (var i = 1; i<=10; i+=2){ //?
        document.write(i + "<br>"); //?
        document.write((i+1) + "<br>"); //?
    }
}
function answer5(){
    for (var i = 10; i >= 1; i--){ //?
        document.write((11 - i) + '<br>'); //?
    }
}