// *case.1 10이 저장된 변수a, 숫자20, 그리고 30을 더해서 result 변수에 저장 후 출력.

function numbOP1(){
    var a = 10;
    var result = a + 20 + 30;
    console.log(result);
}
function numbOP2(){
    var a = 50;
    var b = 20;
    var result = a*b / 10;
    console.log(result);
}

// todo.1 숫자 5를 2로 나누었을 때 나머지 값이 몇인지 result변수에 저장후 출력.
function numbOP3(){
    var result = 5%2;
    console.log(result);
}
// todo.2 'hi'가 담긴 변수 a 와 'WEB"이 담긴 변수 b를 합쳐 'hiWEB'을 출력.
function numbOP4(){
    var a = 'hi';
    var b = 'WEB';
    console.log(a + b);
}

// *case.3 ul, li 구조의 tag를 html page에 삽입하기.
function operatorEx(){
    var list = '';
    list += '<ul>';
    list += '   <li>Hello</li>';
    list += '   <li>JavaScript!</li>';
    list += '</ul>';
    // document.body.innerHTML = list;
    document.write(list);
}
// *case.4 연산자가 뒤로 올 경우
function numberPlusAfter(){
    var number = 10; //? 변수 선언 및 초기화.
    alert(number++); //? 10을 출력하고 1을 증가시켜 number로.
    alert(number++); //? 11을 출력하고 1을 증가시켜 number로.
    alert(number++); //? 12를 출력하고 1을 증가시켜 number로.
    console.log(number); //? 13
}
// todo. 증감연산자 복합.
function numberPlusTodo(){
    var number = 10;
    alert(number++); // ? 출력 : 10 현재 : 11 
    alert(--number); // ? 출력 : 10 현재 : 10
    alert(++number); // ? 출력 : 11 현재 : 11
    alert(number--); // ? 출력 : 11 현재 : 10
    console.log(number); // ? 출력 : 10.
}

// *case. 5 숫자 10이 담긴 변수 a와 숫자 20이 담긴 변수b의 크기를 비교하여 결과를 출력.
function compareOperator1(){
    var a = 10, b = 20;
    var result = a > b; // ? 결과반환은 boolean.
    console.log("10 > 20 = " + result);
}

// *case.6 숫자 10이 담긴 변수a와 숫자 20이 담긴 변수b가 같은지 비교하여 결과를 출력.
function compareOperator2(){
    var a = 10;
    var b = 20;
    var result = a == b;
    console.log("10 = 20 ? " + result);
}
// todo. 숫자 10이 담긴 변수a 와 숫자 20이 담긴 변수b가 다른지 비교하여 결과를 출력.
function compareOperator3(){
    var a = 10;
    var b = 20;
    var result = a!=b;
    console.log("10과 20은 다릅니까?" + result);
}
// *case. 7 a변수에는 '여자', b변수에는 '웹디자이너'라는 값이 저장되어 있다. 담겨있는 두 값이 모두 맞는지 result 변수에 저장 후 출력.
function logicalOperator1(){
    var a = '여자';
    var b = '웹디자이너';
    var result = (a=="여자")&&(b=="웹디자이너");
    console.log("result = " + result);
}
// *case. 8 a변수에는 '남자'. b변수에는 '웹퍼블리셔' 라는 값이 저장되어 있다. 담겨있는 두 값중 하나라도 맞는지  result 변수에 저장 후 출력.
function logicalOperator2(){
    var a = "여자";
    var b = "웹퍼블리셔";
    var result = (a=="남자")||(b=="웹퍼블리셔");
    console.log("result = " + result);
}

// todo. 다음 코드를 작성 후 결과를 예상한 다음 출력하라.
function compareOperator4(){
    console.log(30 > 20 > 10); //? 결과 : 
}

// todo. 위 예제의 결과를 정상적인 결과로 수정하기.
function compareOperator4R(){
    console.log(?);
}