$(document).ready(function(){
    // *case.1 
    imgAlignHori();

    //*case.2
    imgAlignMix();
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? (n)번째 target 부르기.
            xpos = i * imgWidth;
            image.css("left", xpos);            
        }
    });
    $(".reset").click(function(){
        img.css("left", 0);
    });
}
function imgAlignMix(){
//! 실행버튼(.alignMix) 클릭했을 때
     //? img 갯수 불러오기
     //? img 높이 불러오기

    //? 반복문. img갯수보다 작을 때 까지만

    //? n번째 img  선택하기

    //? xpos 연산식 - hint: 나머지

    //? ypos 연산식 - hint: 몫

    //? css 적용부
//! 초기화버튼(.resetMix) 클릭했을 때
    //? css 초기화 (image 원위치)

}