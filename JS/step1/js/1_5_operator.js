/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    
    ? 문자열 연산자
    * + 문자열을 합친다.

    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * ex> a = a + 10; > a += 10;

    ? 증감 연산자
    * ++ 1씩 증가, -- 1씩 감소

    ? 조건비교 연산자
    * >= 좌변이 우변보다 크거나 같다.
    * <= 우변이 좌변보다 크거나 같다.
    * > 좌변이 크다.
    * < 우변이 크다.
    * == 좌변과 우변이 같다.
    * != 좌변과 우변이 다르다.
    * ex> 
    if(273 < 52){
        alert('273은 52보다 작습니다.');
    }
    if(273 > 52){
        alert('273은 52보다 큽니다.');
    }
    참이면 실행하고 거짓이면 무시한다.

    ? 논리 연산자
    * &&(곱) 그리고, ||(합, verticalBar) 이거나
    
    ? 논리 부정연산자
    * !
    * ex>
    alert(!true);
    alert(!false);
    참을 거짓으로, 거짓을 참으로 바꾼다.

    ? 접근 연산자
    * .
*/
// *case.1 10이 저장된 변수a, 숫자 20, 그리고 30을 더해서 result 변수에 저장 후 출력.
function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}
// *case.2 50이 저장된 변수a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장 후 출력.
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b/10;
    console.log(result);
}
// *case.3 ul, li 구조의 tag를 html Page에 삽입 후 출력.
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hi</li>';
    list += '   <li>JavaScript!</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
// *case.4 연산자가 뒤로 올 경우
function numberPlusAfter(){
    var number = 10;
    alert(number++); //? 예상 답: 10.
    alert(number++); //? 예상 답: 11.
    alert(number++); //? 예상 답: 12.
}
// *case.5 연산자가 앞으로 올 경우
function numberPlusBefore(){
    var number = 10;
    alert(++number); //? 10에 1을 더해서(11) 출력후, 다시 number로 - 
    alert(++number); //? 11에 1을 더해서(12) 출력후, 다시 number로 -
    alert(++number); //? 12에 1을 더해서(13) 출력후, 다시 number로 - 
}

// todo. 증감연산자복합.
function numberPlusTodo(){
    var number = 10; //? 변수 선언 및 초기화
    alert(number++); //?출력 : 10 현재 : 11  10출력후 더하기(11). 다시 number로.
    alert(--number); //?출력 : 10 현재 : 10  11에서 1빼고 10 출력후. 다시 number로
    alert(++number); //?출력 : 11 현재 : 11  10에서 1더하고 11 출력후. 다시 number로
    alert(number--); //?출력 : 11 현재 : 10  11출력후 1빼서 다시 number로. 출력: 11, 최종 10.
    console.log(number); //? 최종확인
}

// *case. 6 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b 의 크기를 비교하여 결과를 출력.
function compareOperator1(){
    var a = 10;
    var b = 20;
    var result = a > b;
    console.log("10 > 20 = " + result);
}
// *case. 7 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b 가 같은지 비교하여 결과를 출력.
function compareOperator2(){
    var a = 10;
    var b = 20;
    var result = a!=b;
    console.log("10 != 20 ? " + result);
}
// *case. 8 a 변수에는 '여자', b변수에는 '웹디자이너' 라는 값이 저장되어 있다. 두 값이 모두 맞는지 비교하여 result변수에 저장 후 출력.
function logicalOperator1(){
    var a = '여자';
    var b = '웹퍼블리셔';
    var result = (a == '여자')&&(b=='웹디자이너');
    console.log('result = ' + result);
}
// *case. 9 a 변수에는 '남자', b변수에는 '웹퍼블리셔' 라는 값이 저장되어 있다. 두 값중 하나라도 맞는지 비교.
function logicalOperator2(){
    var a = '남자';
    var b = '웹디자이너';
    var result = (a == '남자')||(b == '웹퍼블리셔');
    console.log('result = ' + result);
}
// todo. 다음 코드를 작성 후 결과를 예상한 다음 출력.
function compareOperator3(){
    console.log(30 > 20 > 10); //? 예상결과 : . -> 기재후 확인
}
// todo. 문제점 해결해보기
function compareOperator4(){
    console.log(30 > 20 && 20 > 10); //todo. true를 받을수 있을 것인가?
}