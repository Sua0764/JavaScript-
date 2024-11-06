// 사용자로부터 아무 숫자나 입력 받습니다. 
// 단, 취소 버튼을 누르면 아무것도 보여주지 않습니다. 
// 반복문을 사용해서 1부터 시작해서 입력받은 숫자 사이에 있는 3의 배수를 찾습니다. 
// 찾은 모든 3의 배수와 숫자의 개수까지 표시해주세요. 

var userNumber = parseInt(prompt("아무숫자나 입력해주세요."));
var i;
var count = 0;

if (userNumber !== null) {
    for(i = 1; i < userNumber ; i++) {
        if(i % 3 === 0) {
            document.write(i + ", ")
            count++;
        }
    }
    document.write("3의 배수는 " + count + "개 입니다")
}
