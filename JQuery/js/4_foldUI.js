$(document).ready(function(){
    // * case. 1
    imgAlignHori();

});
function imgAlignHori(){
    var img = $(".imgContainer img");
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgLength = img.length;
        var imgWidth = img.width();

        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); //? nth 대상.
            xpos = i * imgWidth;
            image.css("left",xpos);
        }
    });
    $(".reset").click(function(){
        img.css("left",0);
    });
}
function imgAlignMix(){
    var img = $(".imgContainerMix img");
    var xpos = 0;
    var ypos = 0;
    // ? 선언부
    $(".alignMix").click(function(){
        // ? img 수 구하기
        // ? img 너비 or 높이 구하기

        // ?loop = img 수 만큼 반복
            // ? nth img 구하기
            // ? xpos 0,1,2 pattern 구하기 * img 너비 or 높이
            // ? ypos 3,6,9 pattern 구하기 * img 너비 or 높이
            // ? nth img 에게 위에서 구한 xpos,ypos css 적용 하기
    });
    $(".resetMix").click(function(){
        // ? case.1 참고하여 reset css 작성.
    });
}