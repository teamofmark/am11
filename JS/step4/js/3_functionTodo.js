$(function(){
    checkCount(checkLimit);
});
function checkCount(callBack){
    var count = 0;
    $("#todo1Start").click(function(){
        count++;
        callBack(count);
        console.log(count);
    });
}
function checkLimit(limitCount){
    if(limitCount >= 10){
        alert("사용불가");
    }
}