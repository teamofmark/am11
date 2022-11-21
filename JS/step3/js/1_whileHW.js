//todo. end가 입력될 때 까지 숫자를 계속해서 입력받아 입력값 합을 출력하고, prompt에는 몇번 수행 했는가에 대한 "x 번째 입력" 이 표시되야함. 
function sumNumb(){
    var i = 1; //? 카운트 변수
    var result = 0; //? 결과를 담을 변수.
    while(true){
        var numb = window.prompt(i + '번째 입력'); //? i가 상승하며 보여지는 x 번째 입력.
        if(numb == "end"){ //? end String 과 value가 일치하면   
            alert('입력이 종료되었습니다.');
            break; //? loop 중단.
        }
        result += parseInt(numb); //? 결과변수에 형변환후 더해서 저장.
        document.write('현재까지의 총합 : ' + result + "<br>");
        i++;
    }
}