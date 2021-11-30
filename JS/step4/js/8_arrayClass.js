/*
    ?array Class
    * 각종 목록(list) - 게시판, imageGallery, GnB Menu..(admin에서 관리할수있는 목록).
    * 생성(정렬),추가,삭제,찾기 등이 있다.
*/
// ? 배열만드는 방법
/*
    * 리터럴방식 var arr = ['item1','item2','item3'];
    * array Class 방식 var arr = new Array('item1','item2','item3');
    ? 리터럴방식으로 사용할 경우 자동으로 class방식으로 변환.
*/

// *case. 1 배열 요소 개수 알아내기
function arrCount(){
    var users = ["user1","user2","user3","user4"];
    console.log(users.length);
}

// *case. 2 특정 위치의 배열 요소 접근하기
function targetArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    // ? menuItems - 실질적으로 server에서 data가 넘어와 담기는 변수.
    for(var i = 0; i < menuItems.length; i++){
        var element = menuItems[i];
        console.log(i + " = " + element);
    }
}

// *case.3 배열을 문자열로 만들기
/*
    ! 배열.join("separator")
    ! 매개변수 = separator, 선택사항. 배열 요소 구분용도의 문자열. 생략시 ,가 default.
    ? 리턴 값 = 지정된 구분자로 배열 요소들을 이어 붙혀 만들어진 문자열.
 */
function joinArr(){
    var items = ["item1","item2","item3","item4"];
    var result = items.join("/");
    console.log(typeof(result) + " : " + result);
}
// *case.4 문자열을 배열로 만들기

/*
    ! 배열.split(separator)
    ! 매개변수 = separator, 구분자로 사용할 문자열.
    ? 리턴 값 = 구분자로 나눠 만들어진 배열.
*/
var $menu = null;
$(document).ready(function(){
    init();
    stringArr();
});
function init(){
    $menu = $("nav ul");
}
function stringArr(){
    var menuData = "menu1,menu2,menu3,menu4"; //? admin 사용자가 추가한 menu list.

    var menuItems = menuData.split(","); //? ["menu1","menu2","menu3","menu4"];

    for(var i = 0; i < menuItems.length; i++){
        var result = menuItems[i];
        var addMenuItem = "<li>" + result + "</li>";
        $menu.append(addMenuItem);
    }
}
// *case. 5 특정 위치에 배열 요소 추가하기
/*
    ! 배열.push(element[,element]);
    ! 매개변수 = element : 배열 마지막에 추가할 (배열)요소.
    ? 리턴 값 = 신규 배열 요소를 추가한 배열.
    
    ! 배열.unshift(element[,element]);
    ! 매개변수 = element : 배열 첫번째(0)에 추가할 (배열)요소.
    ? 리턴 값 = 신규 배열 요소를 추가한 배열.
    
    ! 배열.splice(start, deleteCount [,element]);
    ! 매개변수 = 
    * start : 추가 또는 삭제할 배열 요소 시작 위치.
    * deleteCount : start부터 시작하여 삭제할 배열 요소의 개수, 요소를 추가 해야 할 경우 0.
    * element : (배열)추가요소.
    ? 리턴 값 : 삭제한 요소들 외 배열. 추가할 경우? 리턴 값 없음.
*/
// *case. 5-1 배열뒤에 요소추가.
function addAfterArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("push 실행 전 :" + menuItems);
    menuItems.push("newMenu");
    console.log("push 실행 후 :" + menuItems);
}
// *case. 5-2 배열 앞에 요소추가.
function addBeforeArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("unshift 실행 전 :" + menuItems);
    menuItems.unshift("newMenu");
    console.log("unshift 실행 후 :" + menuItems);
}
// *case. 5-3 배열중 n번째에 요소 추가.
function nAddArr(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("splice실행 전 : " + menuItems);
    // menuItems.splice(3,0,"newMenu");
    menuItems.splice(0,2);
    console.log("splice실행 후 : " + menuItems);
}
// ! splice - add(nth) , remove(nth) / 삭제전용 - shift(), pop();

// *case.6 특정 위치에 배열 요소 삭제하기.
/*
    ! 배열.shift();
    ! 매개변수 = 없음.
    ? 리턴 값 = 삭제된 배열 요소(첫번째) 외 배열.

    ! 배열.pop();
    ! 매개변수 = 없음.
    ? 리턴 값 = 삭제된 배열 요소(마지막) 외 배열.
*/
// *case. 6 - 1 첫번째 요소 삭제
function firstValDel(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전 : " + menuItems.join("/"));
    menuItems.shift();
    console.log("실행 후 : " + menuItems);
}
// ! data가 삭제될 시에는 법적유예기간 45일. trashContainer설계.

// *case. 6 - 2 마지막 요소 삭제
function lastValDel(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    console.log("실행 전 : " + menuItems);
    menuItems.pop();
    console.log("실행 후 : " + menuItems);   
}
// todo. menuItems 요소중 "menu3"만 삭제하기.
function nthValDel(){
    var menuItems = ["menu1","menu2","menu3","menu4"];
    // ?실행 전 / 후.
    console.log("실행 전 : " + menuItems);
    menuItems.splice(2, 1);
    console.log("실행 후 : " + menuItems);
}
// *case. 7 정렬하기
/*
    ! 배열.sort([compareFunction]); - 문자열변환후 -> 유니코드값의 크기에 따라 정렬.
    ! 매개변수 = compareFunction (비교함수 : 선택사항) 정렬순서 정의 함수. 생략 오름차순정리
    ? 기본 문자열 변환 > 유니코드비교. ★★★★★
    ? 리턴 값 : 정렬이 완료된 결과 값. - default Value : -1, 0 ,1
    * 리턴 값 < 0 : a가 b보다 앞에
    * 리턴 값 = 0 : a와 b순서 바꾸지 않음.
    * 리턴 값 > 0 : b가 a보다 앞에.
    * a 와 b의 순서는 정해져있지 않다. 
*/
// *case. 7 - 1 ㄱ,ㄴ 순으로 정렬
function sortKor(){
    var userNames = ['철수','진수','고수','미자','나영','영희'];
    console.log('sort 실행 전 : ' + userNames);
    userNames.sort();
    console.log("sort 실행 후 : " + userNames);
}
// *case. 7 - 2 ㄱ,ㄴ 역순으로 정렬
function reverseSortKor(){
    var userNames = ['철수','진수','고수','미자','나영','영희','희영'];
    console.log("역순 sort 실행 전 : " + userNames);
    userNames.sort(function(a,b){
        var a = a.toString().toLowerCase(); //? 대,소문자 무시한 문자형태 data로 변환
        var b = b.toString().toLowerCase(); //? 대,소문자 무시한 문자형태 data로 변환
        return (b < a) ? -1 : (b == a) ? 0 : 1;

        // ? 조건 ? 참일때 실행하기 : 거짓일때 실행하기
        /*
            * 조건(조건문) - 조건문으로 들어갈 표현식
            * exprIfTrue (참일때 실행할 식)
            * 조건이 참일때 실행되는 표현식 = 참일때 치환될 값.
            * exprIfFalse (거짓일 때 실행할 식)
            * 조건이 거짓일 때 실행되는 표현식 = 거짓일때 치환될 값.
        */
    });
    console.log("역순 sort 실행 후 : " + userNames);
}

// *case. 7 - 3 숫자 순 정렬
function numbSort(){
    var numbData = [1,2,3,4,5,55,44,33,22,11];
    console.log("정순 정렬 실행 전 : " + numbData);
    // numbData.sort();
    // ! 문제점 발생 - ? 매개변수를 생략할 경우 요소는 ASCII 문자 기준 오름차순 정렬.
    numbData.sort(function(a,b){
        return a - b;
    });
    console.log("정순 정렬 실행 후 : " + numbData);
}
// *case. 7 - 4 숫자 역순 정렬
function reverseNumbSort(){
    var numbData = [1,2,3,4,5,55,44,33,22,11];
    console.log("역순 정렬 실행 전 : " + numbData);
    numbData.sort(function(a,b){
        return (b < a) ? -1 : (b == a) ? 0 : 1;
    });
    console.log("역순 정렬 실행 후 : " + numbData);
}