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
            var image = img.eq(i); //? n번째 구하기
            xpos = i * imgWidth;
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
        var imgLength = img.length;
        var imgHeight = img.height();

        for (var i = 0; i < imgLength; i++) {
            var image = img.eq(i);
            xpos = (i%3)*imgHeight;//? 0/3 = 나머지 0, 1/3 = 1, 2/3 = 2, 3/3 = 0 ....*imgHeight
            //! 나눗셈 나머지? = 몫은 정수상태여야 하고, 뺼수없는 소수가 되었을때 나오는 나머지.
            ypos = parseInt(i/3) * imgHeight;//? 0/3 = 0 , 1/3 = 0, 2/3 = 0, 3/3 = 1, 3/4 = 1, 3/5 = 1... *imgHeight

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