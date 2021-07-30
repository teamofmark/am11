$(document).ready(function(){
    // *case. 1 
    imgAlignHori();

    // *case. 2
    imgAlignMix();

});
// *case. 1 정렬버튼을 눌러서 이미지 가로로 배치하기. (개수가 추가되면 알아서 늘어나기)
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
         var imgLength = img.length;
         var imgWidth = img.width();

         for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = i * imgWidth;
            image.css("left",xpos);
         }
    });
    $(".reset").click(function(){
        img.css("left", 0);
    })
}

// *case. 2 정렬버튼을 눌러서 이미지 3단배열로 배치하기. (개수가 추가되면 알아서 늘어나기)

function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;

    $(".alignMix").click(function(){
        var imgLength = img.length;
        var imgHeight = img.height();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            xpos = (i%3) * imgHeight;
            ypos = parseInt(i/3) * imgHeight;
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
        })
    });
}