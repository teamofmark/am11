$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? i = 0일때는 0번이미지, 1일때는 1번이미지, 2일때는 2번이미지..
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left", 0);
    })
}
function imgAlignMix(){
    
}