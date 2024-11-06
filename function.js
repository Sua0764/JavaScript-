// 전역 변수 : 스트립트 전체에서 사용할 수 있는 변수
var number;


let number2;
const number3 = 4;

function addNumber(a, b) {
// 지역(local) 변수 : 한 함수 안에서만 사용할 수 있는 변수
    var sum = a + b;
    alert(sum);
    number = 1;
    number2 = 3;
}

addNumber(5, 3);



