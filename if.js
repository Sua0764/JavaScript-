var userNumber = prompt("1~5 사이의 숫자를 입력하세요")

// if(userNumber !== null) {
//     if(userNumber % 3 === 0) {
//         alert("3의 배수입니다")
//     } else {
//         alert("3의 배수가 아닙니다")
//     }
// } 

// if(userNumber !== null) {
//     (userNumber % 3 === 0) ? alert("3의 배수입니다") : alert("3의 배수가 아닙니다");
// }

switch(userNumber) {
    case "1" : alert("1을 입력하셨습니다")
    break;
    case "2" : alert("2을 입력하셨습니다");
    break;
    case "3" : alert("3을 입력하셨습니다");
    break;
    case "4" : alert("4을 입력하셨습니다");
    break;
    case "5" : alert("5을 입력하셨습니다");
    break;
    default : alert("잘못 입력하셨습니다");
}

