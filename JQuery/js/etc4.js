$(document).ready(function(){
    imgAlignHori();
    imgAlignMix();
});

// *exp.1
function imgAlignHori(){
    var img = $(".imgContainer img");// ? 선언
    var xpos = 0;
    $(".alignHori").click(function(){
        var imgWidth = img.width(); //? 150
        var imgLength = img.length; //? 5

        for (var i = 0; i < imgLength; i++){
            var image = img.eq(i);//?현재 이미지 번호. 선언. n번째 이미지 구하기
            xpos = i * imgWidth; // ? 곱하기 연산부 => 재료부족...
            image.css("left",xpos); //? 출력
        }
    });// ? 처리 및 출력
    $('.reset').click(function(){
        xpos = 0;
        img.css("left", xpos);
    });//? 초기화 작성
}

// *exp.2
function imgAlignMix(){
    var img = $(".imgContainerMix img");
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