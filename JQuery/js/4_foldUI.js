$(document).ready(function(){
    imgAlignHori();

    imgAlignMix();
});

// *case. 1 xAxis 배치.
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

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

// *case. 2 x,yAxis 배치.
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3) * imgHeight; //?
            ypos = parseInt(i/3) * imgHeight; //todo. ypos 연산식 세우기

            image.css({
                "left" : xpos,
                "top" : ypos
            })
        }
    });
    // todo. 원위치 풀기.
    $(".resetMix").click(function(){
        img.css({
            "left" : 0,
            "top" : 0
        }); 
    });

}