$(function(){
    checkCount(checkLimit);

    tabMenu("#tabMenu1", tab1Index); //? #tabMenu1, tab1Index함수를 매개변수로 넣는다.
    tabMenu("#tabMenu2", tab2Index);//? #tabMenu2, tab2Index함수를 매개변수로 넣는다.
});
function checkCount(callBack){
    var count = 0;
    $("#todo1Start").click(function(){
        count++;
        callBack(count);
        console.log(count);
    });
}
function checkLimit(limitCount){
    if(limitCount >= 10){
        alert("사용불가");
    }
}

function tabMenu(selector, callBack){ //? 각각의 ul과 callBack함수(tabNIndex)를 받는다.
    var $tabMenu = null;
    var $menuItems = null;
    init(selector); //? tabMenu(ul)의 매개변수 selector를 init함수(초기화)에 매개변수로 전달.

    var $selectMenuItem = null;
    function init(selector){ //! 기능.1 대상 초기화
        $tabMenu = $(selector); //? 들어온 ul을 각각 tabMenu 변수에 담다.
        $menuItems = $tabMenu.find("li"); //? 각각 담긴 tabMenu안의 li를 찾아라. / closest, siblings, parent, children...
        initEvent($menuItems); //? 그 찾은 li들을 initEvent 함수의 매개변수로 전달.
    }
    function initEvent(menuItems){ //? $menuItems를 받았다.
        menuItems.click(function(){ //! 기능.2 메뉴 항목에 클릭 이벤트 걸기
            setSelectTab(this); //? setSelectTab함수에 어떠한 li든 click이 일어난 당사자를 매개변수로 전달.
        });
    }
    function setSelectTab(selectTab){ //? click이 일어난 당사자를 받음
        // ! 기능.3 tabMenu 선택처리
        if($selectMenuItem){ //? 기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기
            $selectMenuItem.removeClass("select");
        }
        $selectMenuItem = $(selectTab); //? 기존 null을 버리고 click이 일어난 당사자를 넣음
        $selectMenuItem.addClass("select");
    }
    // todo. callBack 함수 가동해서 카운트 정상 출력되게 만들기 (밑에 있는 callBack함수들)
    callBack();
}

function tab1Index(){
    $("#tabMenu1Index").html(대상.index());
}
function tab2Index(){
    $("#tabMenu2Index").html(대상.index());
}