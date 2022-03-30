$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){ //? 최대갯수만큼 반복문 / 최대갯수불러오기 / 반복이일어날때 n번째 이미지에 너비를 곱하기.
        var imgLength = img.length;
        var imgWidth = img.width(); //? jquery - 대상 너비 구해오기. / 높이 구해오기(height();).

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n 번째 구하기.
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
        // ? -> x의 좌표는 0,1,2번 img는 0,1,2를 곱하지만 3에서는 다시 0이 되어야 한다.
        /*
            * 0(0), 1(1), 2(2)
            * 3(0), 4(1), 5(2)
            * 6(0), 7(1), 8(2)
            * 9(0), 10(1), 11(2)
            * 12(0).............
        */
        // ? -> y의 좌표는 0,1,2번 img는 0,0,0,을 곱하지만 3부터 5까지는 1을 곱해야 한다.
        /*
            * 0(0), 1(0), 2(0)
            * 3(1), 4(1), 5(1)
            * 6(2),
            * 9(3)
        */
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3) * imgHeight;
            ypos = parseInt(i/3) * imgHeight;
            image.css({
                'left' : xpos,
                'top' : ypos
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