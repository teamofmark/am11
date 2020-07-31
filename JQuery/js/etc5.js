$(document).ready(function(){
    
});

function imgAlignCustom(){
    var img = $(".imgContainerCustom img");
    var xpos = 0;
    var ypos = 0;
    // ? 선언

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgSize = img.width();
        // var imgHeight = img.height();

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3)*imgSize; //? 0/3 = 나머지 0, 1/3 = 1, 2/3 = 2, 3/3 = 0 ....*imgSize
            ypos = parseInt(i/3) *imgSize; //? 0/3 = 0 , 1/3 = 0, 2/3 = 0, 3/3 = 1, 3/4 = 1, 3/5 = 1... *imgHeight

            image.css({
                "left" : xpos,
                "top" : ypos
            });
        }
    });
    $('.resetMix').click(function(){
        xpos = 0; ypos = 0;
        img.css({
            "left": xpos,
            "top" : ypos
        });
    });//? 초기화 작성
}