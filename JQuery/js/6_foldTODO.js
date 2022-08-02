$(document).ready(function(){
    gallery(0,200,200);
    $(".1way").click(function(){gallery(1,1000,1000)});
    $(".2way").click(function(){gallery(2,500,500)});
    $(".3way").click(function(){gallery(3,333,333)});
    $(".4way").click(function(){gallery(4,250,250)});
    $(".5way").click(function(){gallery(5,200,200)});
    $(".6way").click(function(){gallery(6,166,166)});
    $(".7way").click(function(){gallery(7,142,142)});
    $(".8way").click(function(){gallery(8,125,125)});
    $(".9way").click(function(){gallery(9,111,111)});
    $(".10way").click(function(){gallery(10,100,100)});

});
function gallery(count, imgWidth, imgHeight){
    var $images = $("#imgContainer img");
    var $imgLength = $images.length;

    var xpos, ypos;

    for(i = 0; i < $imgLength; i++){
        var $image = $images.eq(i);
        /*
            todo. 현재상황: 열,이미지의 너비,높이를 직접 계산해서 매개변수로 삽입해야 함.
            * step.1 부모너비를 입력받아 img의 너비를 자동 계산 해서 img에 넣어줄 수 있게.
            * step.2 각 button을 눌렀을 때 '열' 수도 자동으로 입력되게.
            * final. margin 1% 삽입 (img와 img 사이)
        */
        xpos = (i % count) * imgWidth;
        ypos = parseInt(i / count) * imgHeight;

        $image.css({
            'left' : xpos,
            'top' : ypos,
            'width' : imgWidth,
            'height' : imgHeight
        });
    }
}
