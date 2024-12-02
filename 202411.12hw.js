// 사용자에게 "책을 일기 시작한 날짜"를 입력받아 저장.
// 날짜를 계산해서 책을 읽는데 열마나 걸렸는지 출력하세요.

var userDate = prompt("책을 읽기 시작한 날짜를 입력하세요")

var currentDay = new Date()

var spentDate = currentDay - userDate;
console.log(spentDate)