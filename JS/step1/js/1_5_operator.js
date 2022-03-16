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
    alert(number++); // ? 출력 : 현재 : 
    alert(--number); // ? 출력 : 현재 : 
    alert(++number); // ? 출력 : 현재 : 
    alert(number--); // ? 출력 : 현재 : 
    console.log(number); // ? 출력 : 현재 : 
}