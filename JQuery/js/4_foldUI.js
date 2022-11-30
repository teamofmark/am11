$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0; //? position left 운용.
    
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // ? 선언부
        // console.log(imgLength,imgWidth);
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 이미지 구하기.
            // console.log(i + '번째 이미지' + image.attr("src"));
            xpos = i * imgWidth;
            image.css("left",xpos);
            // ?출력부
        }
        // ? 처리부
    });
    $(".reset").click(function(){
        img.css("left", 0);
    });
}
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgHeight;
            
            // ? 0(0), 1(1), 2(2),
            // ? 3(0), 4(1), 5(2),
            // ? 6(0), 7(1), 8(2),
            // ? 9(0), 10(1), 11(2)
            // ? 12(0)............
            ypos = parseInt(i/3) * imgHeight;
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
            "left" : 0,
            "top" : 0
        });
    });
}