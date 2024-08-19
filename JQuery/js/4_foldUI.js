$(document).ready(function(){
    // case. 1
    imgAlignHori();

});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i);
            // todo.1 150배수관계 생성하여 xpos에 저장
            // todo.2 대상 이미지(nth) 오른쪽(xpos)으로 움직여야함
        }
    });
    $(".reset").click(function(){
        // todo.3 모든 대상 원위치.
    });
}