$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? nth. = n번째.
            xpos = imgWidth * i;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        // todo. "현재이미지변수"에 n번째 이미지 담기.
        var imgLength = img.length;
        // todo. 너비 = width() / 높이 = height()
        var imgWidth = img.width();
        var imgHeight = img.height();        
        // todo. for loop. - 이미지 개수보다 작을때 까지 0부터 시작해서 반복.
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? nth 구하기.
            // todo. xpos 상황
            // ? 0(0), 1(1), 2(2),
            // ? 3(0), 4(1), 5(2),
            // ? 6(0), 7(1), 8(2),
            // ? 9(0), 10(1), 11(2)
            // ? 12(0)............
            xpos = (i%3)*imgWidth;
            // todo. ypos 상황
            // ? 0(0), 1(0), 2(0),
            // ? 3(1), 4(1), 5(1),
            // ? 6(2), 7(2), 8(2),
            // ? 9(3), 10(3), 11(3)
            // ? 12(4)............
            ypos = parseInt(i/3)*imgHeight;
            // todo. "현재이미지변수"에 xpos = left, ypos = top으로 css 적용.
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left" : 0,
            "top" : 0
        });
    });
}