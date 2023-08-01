$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgWidth = img.width(); //? 너비불러오는 함수.
        var imgLength = img.length;

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
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
        
        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgHeight;//? 0,1,2,0,1,2.....
            /*
                * 0(0), 1(1), 2(2)
                * 3(0), 4(1), 5(2)
            */ 
            ypos = parseInt(i/3)*imgHeight;//? 0,0,0 / 1,1,1, / 2,2,2...
            /*
                * 0(0), 1(0), 2(0)
                * 3(1), 4(1), 5(1)
                * 6(2), 7(2), 8(2)
            */
            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $(".resetMix").click(function(){
        // todo. 모든 img 원위치 시키기
    });
}