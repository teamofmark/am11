/*
    ?array Class
    * 각종 리스트 (게시판, 이미지, 메뉴 ...)를 출력 할 때 사용.
    * 배열 생성,추가,삭제,찾기 등 을 담고있다.
*/

// ? 배열 만드는 방법
/*
    ! 리터럴 방식 var arr = ["item1","item2","item3"];
    ! array Class 방식 var arr = new Array("item1","item2","item3");

    ? 리터럴 방식으로 사용해도 js가 해석할 때 자동 변환 
*/

// * ex.1 배열 요소 개수 알아내기
function arrCount(){
    var users = ["user1", "user2", "user3", "user4"];
    console. log(users.length);
}

// * ex.2 특정 위치의 배열 요소 접근하기.
function targetArr(){
    var menuItems = ["menu1", "menu2", "menu3", "menu4"];

    for (var i = 0; i < menuItems.length; i++){
        var element = menuItems[i];
        console.log(i + " = " + element);
    }
}

// *ex.3 배열을 문자열로 만들기.

function joinArr(){
    var items = ["item1", "item2", "item3", "item4"];
    var result = items.join("-");
    console.log(result);
}

/*
    ! 배열.join("separator")
    ! 매개변수 = separator, 선택사항. 배열 요소 구분용도의 문자열. 생략시 , 가 구분자.
    ! 리턴값 = 지정된 구분자로 배열 요소들을 이어 붙혀서 만들어진 문자열
*/

// *ex.4 문자열을 배열로 만들기.
var $menu = null;
$(document).ready(function(){
    init();
    stringArr();
});

function init(){
    $menu = $("nav ul");
}
function stringArr(){
    var menuData = "menu1, menu2, menu3, menu4";
    var menuItems = menuData.split(",");
    for (var i = 0; i < menuItems.length; i++){
        var result = menuItems[i];
        var addMenuItem = "<li>" + result + "</li>";
        $menu.append(addMenuItem);
    }
}
/*
    ! 배열.split(separator)
    ! 매개변수 = separator, 구분자로 사용할 문자열.
    ! 리턴값 = 구분자로 나눠 만들어진 배열.
*/