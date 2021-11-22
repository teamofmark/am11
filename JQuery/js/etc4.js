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
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){ //! 실행버튼(.alignMix) 클릭했을 때 
        var imgLength = img.length; //? img 갯수 불러오기
        var imgHeight = img.height(); //? img 높이 불러오기

        for (var i = 0; i < imgLength; i++){ //? 반복문. img갯수보다 작을 때 까지만
            var image = img.eq(i); //? n번째 img  선택하기
            xpos = (i%3)*imgHeight; //? xpos 연산식 - hint: 나머지
            //? 0(0), 1(1), 2(2),
            //? 3(0), 4(1), 5(2),
            //? 6(0), 7(1), 8(2)....
            ypos = parseInt(i/3) * imgHeight;  //? ypos 연산식 - hint: 몫
            //? 0(0), 1(0), 2(0),
            //? 3(1), 4(1), 5(1),
            //? 6(2), 7(2), 8(2)....
            image.css({
                //? css 적용부
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetMix").click(function(){//! 초기화버튼(.resetMix) 클릭했을 때
        img.css({//? css 초기화 (image 원위치)
            "left" : 0,
            "top" : 0
        });
    });
    

    

}