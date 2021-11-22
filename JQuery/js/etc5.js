$(document).ready(function(){
    imgAlignCustom(6);
});
function imgAlignCustom(count){
    var img = $(".imgContainerCustom img");
    var xpos = 0, ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%count) * imgWidth;
            ypos = parseInt(i/count) * imgHeight;
            // ? 만약 margin 개념을 두고싶다?
            // ? spacing(margin) 변수선언.
            // ? imgWidth, imgHeight에 ()우선연산(+).
            image.css({
                "left" : xpos,
                "top" : ypos
            })
        }
    });
    $(".resetMix").click(function(){
        img.css({
            "left" : 0,
            "top" : 0
        });
    });
}