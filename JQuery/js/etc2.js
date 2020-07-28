$(document).ready(function(){
    // *exp.1 원 움직이기
    moveCircle();
});

// * exp.1
function moveCircle(){
    var $circle = $('.circle'); // ? 선언부 = init 
    $('#btnMoveCircle').click(function(){
        var xpos = window.prompt('0부터 380이하의 숫자만 입력');
        xpos = parseInt(xpos);

        if(xpos >= 0 && xpos <= 380){
            $circle.css('left',xpos);
        }else{
            alert('잘못된 수치');
        }
    });
} 