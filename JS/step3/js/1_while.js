/*
    ? while
    while 반복문은 조건이 참일 경우 무한 반복한다.
    (물론 조건이 정해진다면 for문 처럼도 사용 가능하지만, 
        용도를 구분지어 사용하는 것이 좋다.)
    정해진 횟수만큼의 반복은 for를 사용하지만, 무한반복처리, 파일 읽고쓰기 및 
    전송(java,php...), DB데이터 출력하기.

*/
// *case.1 password "1234"가 입력되면 '접속승인', 아니면 '잘못 입력하였습니다.' 반복
function pwCheck(){
    while(true){
        var value = window.prompt('password를 입력하세요.');

        if(value==1234){
            alert('접속승인');
            break;
        }else{
            alert('잘못입력하였습니다.');
        }
    }
}
// *case. 2 while Continue
function whileContinue(){
    var i = 1;
    while(i<=10){
        i++;
        continue;
        document.write(i + "<br>");
    }
    document.write("continue 최종 i = " + i + "<br>");
}
// *case. 3 while Break
function whileBreak(){
    var i = 1;
    while(i<=10){
        break;
        i++;
        document.write(i + "<br>");
    }
    document.write("break 최종 i = " + i + "<br>");
}
// todo. end가 입력될 때까지 숫자를 계속해서 입력받아 입력값 합을 출력하고 prompt에는 몇번 수행했는 가에 대한 'x'번째 입력이 표시되야 한다.
function sumNumb(){
    var i = 1;
    var result = 0;
    while(true){
        var numb = window.prompt(i + '번째 입력');
        if(numb=="end"){
            alert("입력이 종료되었습니다.");
            break;
        }else if(numb == ""){
            alert("입력된 값이 없습니다. 다시 입력하세요.");
        }
        result += parseInt(numb);
        document.write("현재까지의 총합 : " + result + "<br>");
        i++;
    }
}