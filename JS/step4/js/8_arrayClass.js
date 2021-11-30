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
