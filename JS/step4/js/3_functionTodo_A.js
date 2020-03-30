$(document).ready(function(){
    // todo.1 A
    checkCount(checkLimit);

    // todo.2,3 A
    tabMenu("#tabMenu1", tab1Index); //? todo.3 1.tab1Index 함수를 매개변수로 넣는다.
    tabMenu("#tabMenu2", tab2Index); //? todo.3 1.tab2Index 함수를 매개변수로 넣는다. 
});
    // todo.1 A
function checkCount(callBack){
    var count = 0;
    $("#todo1Start").click(function(){
        count++;
        callBack(count);
        /* 
            callBack(count);
            *or
            if(count >= 10){
                callBack();
            } 
        */
    });
};

function checkLimit(limitCount){
    if(limitCount >=10){
        alert("사용불가");
    }
    /*
        if(limitCount >=10){
            alert("사용불가");
        }
        *or
        alert("사용불가");
    */
}

    // todo.2 A
function tabMenu(selector, callBack){ //? todo.3 2.callBack 매개변수로 1번의 각 tabIndex 함수를 받는다.
    var $tabMenu = null;
    var $menuItems = null;
    
    init(selector); //? 1. tabMenu의 매개변수 selector를 init 함수에 매개변수로 전달.

    // 선택 한 탭메뉴를 저장할 변수
    var $selectMenuItem = null;

    function init(selector){ 
        // ! 기능.1 요소 초기화
        $tabMenu = $(selector); //? 2. 들어온 select를 tabMenu 변수에 담고.
        $menuItems = $tabMenu.find("li"); //? 3. 해당 tabMenu의 li를 찾는다.
        initEvent($menuItems); //? 4. 그 li들을 찾아 initEvent 함수에 매개변수로 전달.
    }

    function initEvent(menuItems){ 
        // ! 기능.2 메뉴 항목에 클릭 이벤트 등록
        menuItems.click(function(){ //? 5. 4번에서 받은 menuItems에 클릭 이벤트 등록.
            setSelectTab(this); //? 6. setSelectTab 함수에 클릭이 일어난 this를 매개변수로 전달.
        });
    }
    function setSelectTab(selectTab){
        //! 이하 기능.3 탭메뉴 선택처리
        if($selectMenuItem){ //기존 선택 메뉴 항목이 있으면 비선택 상태로 만들기 - 클로저
            $selectMenuItem.removeClass("select");
        }

        // 클릭한 메뉴 항목을 신규 선택 메뉴 항목으로 저장
        $selectMenuItem = $(selectTab); //? 7. 6번에서 들어온 this를 selectMenuItem 변수에 담고.
        // 선택 상태로 만들기
        $selectMenuItem.addClass("select"); //? fin. select 클래스를 추가.
        
        // todo.3 A
        callBack($selectMenuItem); //? todo.3 3. 위 callBack 매개변수로 들어온 각 tabIndex함수에 selectMenuItem 변수를 넣는다.
    }
    
}

// todo.3 A
function tab1Index(selectTab1){ //? todo.3 4. 들어온 selectMenuItem 변수를 index함수를 통해 index출력.
    $("#tabMenu1Index").html(selectTab1.index());
}
function tab2Index(selectTab2){
    $("#tabMenu2Index").html(selectTab2.index());
}