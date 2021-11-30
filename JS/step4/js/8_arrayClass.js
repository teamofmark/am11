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