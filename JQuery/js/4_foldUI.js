$(document).ready(function(){
    // case. 1
    imgAlignHori();

    // todo
    imgAlignMix(3);
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            // todo.1 150배수관계 생성하여 xpos에 저장
            xpos = i * imgWidth;
            // todo.2 대상 이미지(nth) 오른쪽(xpos)으로 움직여야함
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        // todo.3 모든 대상 원위치.
        img.css("left",0);
    });
}

function imgAlignMix(count){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            // todo. xpos 산출
            xpos =  (i % count)*imgWidth;
            // ? 0(0), 1(1), 2(2),
            // ? 3(0), 4(1), 5(2),
            // ? 6(0), 7(1), 8(2),
            // ? 9(0), 10(1), 11(2)
            // ? 12(0)............
            // todo. ypos 산출
            ypos = parseInt(i / count)*imgHeight;
            // ? 0(0), 1(0), 2(0),
            // ? 3(1), 4(1), 5(1),
            // ? 6(2), 7(2), 8(2),
            // ? 9(3), 10(3), 11(3)
            // ? 12(4)............
            // todo. css로 적용
            image.css({
                "left" : xpos,
                "top" : ypos
            })
        }
    });
    // todo. 초기화
    $(".resetMix").click(function(){
        img.css({
            "left" : 0,
            "top" : 0
        })
    });
}