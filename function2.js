// 함수의 특징 : 재사용성
// 매개변수, 인수, return

// 매개변수: 함수를 호출할 때 외부에서 받을 변수
// 인수 : 함수를 호출할 때 매개변수에 실제로 들어가는 값
// 매개변수의 기본값을 지정
// return: 함수의 결과값을 반환하는 동작

// a,b = 매개변수
// 5, 3 = 인수
function addNumber(a, b) {
        var sum = a + b;
        return sum;
}

var result = addNumber(2,3);

function multiple(a, b = 5, c = 10) {
    return a * b + c;
}
    

function clacSum(n) {
    var sum = 0;

    for(let i =1; i < n+1; i++) {
        sum += i;
    }
    document.write("1부터" + n + "까지 더하면" + sum)
}

var userNumber = prompt("얼마까지 더할까요?");
if(userNumber !== null) {
    clacSum(parseInt(userNumber))
}