//todo.1 구구단 숫자를 입력받아 출력하는 for문.
// ? 어떤 숫자를 입력받던 해당 "구단(x1~x9)" 을 출력하면 됨

function gugudan(){
    var guguNumb = prompt('구구단숫자를 입력');
    for (var i = 1; i <= 9; i++) {
        document.write(guguNumb + 'x' + i + '=' + guguNumb*i + '<br>');
    }
}

// todo.2 배열의 총 합을 구하기. var data = [10,20,30,40,50];
// ? 해당 배열의 총합은 = 150 메시지가 배열의 총합식에 의거하여 출력되면 됨.

function arraySum(){
    var data = [10,20,30,40,50];
    var result = 0;
    for (let i = 0; i < data.length; i++) {
        result+= data[i];
    }
    document.write('해당 배열의 총합은 = ' + result);
}