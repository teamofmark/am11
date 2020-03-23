/*
    ? string
    * 특정 문자열을 다른 문자열로 치환하거나 삭제, 입력받은 데이터의 공백 등을 없애는 기능 만들기 등에 사용.
*/

// ? 문자열 만드는 방법
/*
    ! 리터럴 방식 var str = "Hello";
    ! String Class 객체 생성 방식 var str = new String("Hello");

    ? 리터럴 방식으로 사용해도 js가 해석할 때 자동 변환 
    * ex) alert("hello".length); = alert(new String("Hello").length);
*/

// *ex.2 입력받은 문자열 길이 알아내기(length)
/*
var str = window.prompt("문자를 입력");
alert("문자열 길이는 = " + str.length);
*/

/*
    ? 특정 위치의 문자 구하기(charAt)
    ! charAt(indexNumber) :
    ! 매개변수 = index 문자열 위치 인덱스 값, 인덱스는 0부터 시작. 
    ? ex) var ch = "ABCDEF"; charAt(0) = A, charAt(5) = F 
    ! 리턴값 = index 위치의 문자.
*/

// *ex.3 #panel에 입력받은 문자열을 1초마다 한 문자씩 출력. 다되면 "종료".

function print1ch(){
    var str = window.prompt("문자를 입력");
    var charCount = 0;
    var timerID = setInterval(function(){
        charCount ++;
        $("#panel").text(str.charAt(charCount));
        
        if(charCount >= str.length){
            clearInterval(timerID);
            alert("종료.");
        }
    },1000);
}

/*
    ?문자(열) 위치 찾기 (indexof)
    ! indexof(searchValue, start)
    ! 매개변수 = searchValue  : 찾는 문자열, start : 시작위치, default 0
    ! 리턴값 = 찾는 문자열의 위치 값. 못찾는 경우 -1 
*/
/*
* ex.4 문자열 입력받고 example 문자 포함여부 판단.
* 참일 경우 몇번째 위치 출력, 거짓일 경우 "존재하지 않습니다." 출력
*/
function findString(){
    var insertWord = window.prompt("문자를 입력.");
    var finder = insertWord.indexOf("example");
    // ? 입력받은 insertWord내 에서 example을 찾음.

    if(finder >= 0){
        alert(finder + "번째 위치에 있습니다.");
    } else{
        alert("존재하지 않습니다.");
    }
}

/*
    ? 특정 위치에 문자 추가. 

    ! slice(start, end)
    ! 매개변수 = start : 문자열 시작 위치, end : 문자열 끝 위치
    ! 리턴값 = 지정한 문자열(의미상 잘라내기지만 복사)

    ! substr(start, length)
    ! 매개변수 = start : 문자열 시작 위치, length : 시작위치부터 복사할 길이.
    ! 리턴값 = 지정한 문자열
*/

// *ex.5 문자열 일부(두번째에서 네번째) 잘라내보기

function sliceText(){
    var str = "Abcdef";
    var strSlice = str.slice(2,4); //?
    console.log(str);
    console.log(strSlice);
}

// *ex.6 문자열 일부(두번째에서 네번째) 잘라내보기 - 2

function substrText(){
    var str = "abcdef";
    var strSubstr = str.substr(2,2);
    console.log(str);
    console.log(strSubstr);
}
// todo.1 slice를 이용하여 str 사이에 문자 추가.
function sliceAddText(){
    var str = "Mak";
    var strSlice = str.slice(0,2) + "r" + str.slice(2,3); //? Mark.
    console.log(strSlice);
}

// todo.2 subStr를 이용하여 str 사이에 문자 추가.
function substrAddText(){
    var str = "MakStak";
    var strSubstr = str.substr(0,2) + "r" + str.substr(2,4) + "r" + str.substr(6,1); //? MarkStark.
    console.log(strSubstr);
}
/* 
    ?특정 위치 문자 변경
    * replace(searchvalue, newvalue)
    ! 매개변수 = searchvalue : 찾는 문자, newvalue : 교체문자.
    ! 리턴값 = 찾는 문자를 교체문자로 변경한 값.
*/