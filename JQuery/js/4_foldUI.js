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
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgHeight; // 0,1,2,0,1,2,0,1,2....
            ypos = parseInt(i/3)*imgHeight;
            image.css({
                "left": xpos,
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