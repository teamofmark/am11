$(document).ready(function(){
    // * case. 1
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
        var imgLength = img.length; // ? img 수 구하기
        var imgHeight = img.height();// ? img 너비 or 높이 구하기
        for(var i = 0; i < imgLength; i++){
            var image = img.eq(i); // ? nth img 구하기
            xpos = (i%3)*imgHeight;// ? xpos 0,1,2 pattern 구하기 * img 너비 or 높이
            // * 0,1,2,0,1,2..........
            // * 0/3 = 0, 1/3 = 1, 2/3 = 2, 3/3 = 0, 4/3 =1, 5/3 =2, 6/3 = 0
            ypos = parseInt(i/3)*imgHeight;// ? ypos 3,6,9 pattern 구하기 * img 너비 or 높이
            // * 0,0,0,1,1,1,2,2,2...
            image.css({
                "left" : xpos,
                "top" : ypos
            });// ? nth img 에게 위에서 구한 xpos,ypos css 적용 하기

        }// ?loop = img 수 만큼 반복
            
    });
    $(".resetMix").click(function(){
        // ? case.1 참고하여 reset css 작성.
        img.css({
            "left" : 0,
            "top" : 0
        });
    });
}