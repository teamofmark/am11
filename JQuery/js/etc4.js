$(document).ready(function(){
    imgAlignHori();
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

