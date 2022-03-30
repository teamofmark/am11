$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){ //? 최대갯수만큼 반복문 / 최대갯수불러오기 / 반복이일어날때 n번째 이미지에 너비를 곱하기.
        var imgLength = img.length;
        var imgWidth = img.width(); //? jquery - 대상 너비 구해오기. / 높이 구해오기(height();).

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? n 번째 구하기.
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}
function imgAlignMix(){
    // ? x좌표,y좌표
    // ? -> x의 좌표는 0,1,2번 img는 0,1,2를 곱하지만 3에서는 다시 0이 되어야 한다.
    // ? -> y의 좌표는 0,1,2번 img는 0,0,0,을 곱하지만 3부터 5까지는 1을 곱해야 한다.
}