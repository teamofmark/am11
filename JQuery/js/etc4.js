$(document).ready(function(){
    imgAlignHori();
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