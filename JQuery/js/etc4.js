$(document).ready(function(){
    // *case. 1 
    imgAlignHori();


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