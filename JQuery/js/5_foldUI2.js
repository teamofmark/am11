$(document).ready(function(){
    imgAlignCustom(5);
    // todo 위 실행 구문에 넣는 숫자로 열 가동 되게 만들어야함.
});
function imgAlignCustom(count){
    var img = $(".imgContainerCustom img");
    var xpos = 0;
    var ypos = 0;
    
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%count)*imgWidth;
            ypos = parseInt(i/count)*imgHeight;
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