/*
    ? 변수(variable)란
    * = data 를 저장 하는 장소(개념). -> data를 read / write 할 수 있는 장소(개념).

    ? 실무의 예
    * 1. login Status를 저장.
    * 2. 사용자가 선택한 항목을 저장.(wishList...)
    * 3. admin(관리자페이지)으로 관리하는 항목들을 변경 및 저장(menu,popup,layout,theme...)
    * 4. game등에서 기록되는 record나 data(lvl,item)저장.
    

    ! 주의사항
    * 1. 숫자로 시작 할 수 없다.
    * 2. 대,소문자를 구분한다.(Admin , admin = 아예 다른변수).
    * 3. 변수는 대문자가 아닌 소문자로 시작한다. (ex> loginStatusCheck..)
    * 4. 변하지 않는 환경 변수(상수변수 : ex> 관리자아이디(administrator//1234567890)) -> 이러한 정보를 담는 변수 -> DB_ADMIN
    * 5. js에서 이미 정의된 예약어 사용금지. (모든언어 공통)
    * (break, case, catch, continue, default, delete, do, else, finally, for, function, if....)
    ! -> keyword 1개로 만들지마. -> 변수이름. 최소 2개이상 합쳐서 만들기.

    ? 변수의 종류
    * 1. 전역변수 - 지역구분없는 전체에 있는 변수.
    * 2. 지역변수 - 지역 내에 있는 변수.
    * 3. 매개변수 - 매개체가 되어주는 변수.
    * 4. 멤버변수 - class = 집합(특정분류의) 내부에 만들어지면서 동시에 객체(object)에서 사용하는 정보를 담는 변수.
*/

