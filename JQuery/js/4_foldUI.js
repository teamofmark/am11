$(document).ready(function(){
    // *exp.1 정렬 버튼을 눌러 이미지 가로 배치 하기
    imgAlignHori();

    imgAlignMix();
});

// *exp.1
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        for (var i = 0; i < imgLength; i++) {
            var image = img.eq(i); //? n번째 이미지 구하기
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left", 0);
    });
}

// *exp.2

function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for (var i = 0; i < imgLength; i++) {
            var image = img.eq(i);
            xpos = (i%3)*imgHeight;//? 0/3 = 나머지 0, 1/3 = 1, 2/3 = 2, 3/3 = 0 ....*imgHeight
            
            // ? 0(0), 1(1), 2(2),
            // ? 3(0), 4(1), 5(2),
            // ? 6(0), 7(1), 8(2),
            // ? 9(0), 10(1), 11(2)
            // ? 12(0)............
            //! 나눗셈 나머지? = 몫은 정수상태여야 하고, 뺼수없는 소수가 되었을때 나오는 나머지.
            ypos = parseInt(i/3) * imgHeight;//? 0/3 = 0 , 1/3 = 0, 2/3 = 0, 3/3 = 1, 3/4 = 1, 3/5 = 1, 3/6 = 2, 3/7 = 2, 3/8 = 2, 3/9 = 3... *imgHeight
            // ? 0(0), 1(0), 2(0),
            // ? 3(1), 4(1), 5(1),
            // ? 6(2), 7(2), 8(2),
            // ? 9(3), 10(3), 11(3)
            // ? 12(4)............
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left": 0,
            "top" : 0
        });
    });
    
}