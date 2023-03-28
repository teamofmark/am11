$(document).ready(function(){
    // ? 4번예제에서 알아낸 개념 - 열의 갯수가 곧 x,y좌표의 기준.
    imgAlignCustom(6);
});
function imgAlignCustom(colCount){
    var img = $(".imgContainerCustom img");
    var xpos = 0;
    var ypos = 0;
    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        var imgHeight = img.height();
        // console.log('이미지의 갯수는 ' + imgLength);
        // console.log('이미지의 너비는 ' + imgWidth);
        // console.log('이미지의 높이는 ' + imgHeight);
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            // console.log(image);
            xpos = (i%colCount) * imgWidth;
            ypos = (i/colCount) * imgHeight;
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