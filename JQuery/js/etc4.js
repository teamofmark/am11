$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

// *case.1
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        for(i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = imgWidth * i;
            image.css("left",xpos);
        }
    });
    $('.reset').click(function(){
        img.css("left", 0);
    });
}

// *case.2
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0; 
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i); //?
            xpos = (i%3)*imgHeight;//?
            ypos = parseInt(i/3) * imgHeight; //?

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