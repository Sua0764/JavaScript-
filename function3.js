// 익명 함수 : 이름이 없는 함수

var sum = function(a, b) {
    return a + b;
}

document.write("함수 실행 결과:" + sum(10, 20))

// 즉시 실행 함수

// 1. 매개변수를 입력받지 않을 때
(function() {
    var userName = prompt("이름을 입력하세요.");
    document.write("안녕하세요 " + userName + "님")
}())

// 2. 매개변수를 입력받을 때
(function(a, b) {
    var result = a + b;
    return(result);
}(10, 20))



// 화살표 함수

// 1. 매개변수가 없을 때

const hi = () => {return "안녕하세요"}

// 2. 매개변수가 1개일 때

const hello = user => {return user + "님 안녕하세요"}

// 3.매개변수가 2개 이상일 때

const addNumber = (a, b) => {return a + b;}
