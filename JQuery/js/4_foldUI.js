$(document).ready(function(){
    imgAlignHori();
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? nth. = n번째.
            xpos = imgWidth * i;
            image.css("left",xpos);
        }
    });
}