$(document).ready(function(){
    imgAlignHori();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0; //? position left 운용.
    
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        // ? 선언부
        // console.log(imgLength,imgWidth);
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n번째 이미지 구하기.
            // console.log(i + '번째 이미지' + image.attr("src"));
            xpos = i * imgWidth;
            image.css("left",xpos);
            // ?출력부
        }
        // ? 처리부
    });
}