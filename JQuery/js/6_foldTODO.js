$(document).ready(function(){
    gallery();
});
function gallery(){
    var currentWay, xpos, ypos;
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;
    var containerW = $("#imgContainer").width();
    var imgSize = $images.width();

    $("[class$='way']").click(function(){
        currentWay = parseInt($(this).attr("class").replace("way",""));
        console.log("현재 열 수는 " + currentWay + "열 이다. 자료 유형은" + typeof(currentWay) + "이다.");
        // replace - 갈아끼우는 함수 = 앞에있는 값을 뒤에있는값으로 갈아끼움
        for(var i = 0; i<$imgLength; i++){
            var $image = $images.eq(i);
            imgSize = containerW / currentWay;
            xpos= (i % currentWay) * imgSize;
            // ex> 3열 - 0/3 = 0, 1/3 = 1, 2/3 = 2, 3/3 = 0
            ypos= parseInt(i / currentWay) * imgSize;
            // ex> 3열 - 0/3 = 0, 1/3 =0, 2/3 =0, 3/3 = 1, 3/4 = 1, 3/5 = 1, 3/6 =2....
            $image.css({
                "left": xpos,
                "top": ypos,
                "width" : imgSize,
                "height" : imgSize
            });
        }
    });
}