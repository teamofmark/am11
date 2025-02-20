/* 
    ? 기본사칙(숫자열) 연산자
    * +, -, *, / 나누기, % 나머지, () 우선
    
    ? 문자열 연산자
    * + 문자열을 합친다.

    ? 복합 대입 연산자		
    * += 기존 변수의 값에 값을 더함 , -= 기존 변수의 값에 값을 뺌
    * *= 기존 변수의 값에 값을 곱함 , /= 기존 변수의 값에 값을 나눔
    * %= 기존 변수의 값에 나머지를 구함. 	
    * var a = 20;
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

    ? 논리 연산자`
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
// case. 1 10 이 저장된 변수 a, 숫자 20, 그리고 30을 더해서 result 변수에 저장후 출력.
function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log("합산 : " + result);
}
// case.2 숫자 50을  20으로 나누었을 때 나머지가 몇인지 result 변수에 저장후 출력.
function numbOP2(){
    var a = 5;
    var b = 2;
    var result = a % b;
    console.log("결과 : " + result);
}
// case.3 50이 저장된 변수 a, 20이 저장된 변수 b를 곱한 값을 10으로 나누어 result 변수에 저장후 출력.
function numbOP3(){
    var a = 50;
    var b = 20;
    var result = (a*b)/10;
    console.log("복합 연산 : " + result);
}
// case.4 ul li 구조의 tag를 html page에 연산자를 이용하여 삽입하기. / 설명 전!!!
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JavaScript!</li>';
    list += '</ul>';
    document.body.innerHTML = list;
}
//  case.5 연산자가 뒤로 오는 경우
function numberPlusAfter(){
    var number = 10;
    alert(number++); // 결과 예상 : 11(x) -> 10(11로바뀐상태)
    alert(number++); // 결과 예상 : 12(x) -> 11(12로바뀐상태)
    alert(number++); // 결과 예상 : 13(x) -> 12(13으로바뀐상태)
    console.log(number); // 13? - 결과적으로 1의 차이 오류발생
}
// case.6 연산자가 앞으로 오는 경우 - 위 문제 해결
function numberPlusBefore(){
    var number = 10;
    alert(++number); // 결과 : 11
    alert(++number); // 결과 : 12
    alert(++number); // 결과 : 13
    console.log(number); // 최종결과 : 13
}
// todo. 증감연산자 복합
function numberPlusTodo(){
    var number = 10;
    console.log(number++); // 출력 : 10 / 현재 : 11
    console.log(--number); // 출력 : 10 / 현재 : 10
    console.log(++number); // 출력 : 11 / 현재 : 11
    console.log(number--); // 출력: 11 / 현재 : 10
    console.log(number++); // 출력: 10 / 현재 : 11
    console.log(++number); // 출력: 12 / 현재 : 12
    console.log(--number);// 출력 : 11 / 현재 : 11
    console.log(number++); // 출력 : 11 / 현재 : 12
    console.log(++number); // 출력 : 13 / 현재 : 13
    console.log(number); // 최종결과 : 13
}
// case. 7 숫자 10이 담긴 변수 a와 20이 담긴 변수 b의 크기를 비교하여 결과를 출력
function compareOperator1(){
    var a = 10;
    var b = 20;
    var result = a != b;
    console.log(result);
}
// case. 8 a변수에는 '여자', b변수에는 '웹디자이너' 라는 값이 저장되어 있다. 담겨있는 두 값이 모두 맞는지 result 변수에 저장 후 출력.
function logicalOperator1(){
    var a = '여자';
    var b = '웹퍼블리셔';
    var result = (a=='여자')&&(b=='웹디자이너');
    console.log(result);
}
// case. 9 a변수에는 '남자', b변수에는 '웹퍼블리셔' 라는 값이 저장되어 있다. 담겨있는 두 값중 하나라도 맞는지 result 변수에 저장 후 출력.
function logicalOperator2(){
    var a = '남자';
    var b = '웹디자이너';
    var result = (a=='남자')||(b=='웹퍼블리셔');
    console.log(result);
}
// todo 다음 코드를 작성 후 문제점을 찾아 수정하기
function compareOperatorTodo(){
    console.log(30 > 20&&20 > 10);
    /*
        1. computer - 1회 1처리.
        2. 30,20,10을 한번에 비교하는 것이 불가능.
        3. 30과 20을 비교하라. = true.
        4. true > 10 비교를 시도하게 됨. - compare Error. / js는 형변환(암시적) - 1 > 10 변환비교
        5. false 출력

        = 한번에 각 비교식을 실행하도록 만들어야 함.
    */
}