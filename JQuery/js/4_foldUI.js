$(document).ready(function(){
    // * case. 1
    imgAlignHori();

});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? nth 대상.
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
}
