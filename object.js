// 객체의 인스턴스화
var now = new Date();
console.log("현재 시각은 : ", now.toLocaleString())

// 내장 객체

// --------------Array 객체----------------
var numbers = new Array(); // 배열의 크기를 지정하지 않음
var numbers2 = new Array(4); // 배열의 크기를 지정
var numbers3 = Array("one", "two" , "three" , "four") // Array 객체를사용한 배열 선언


// Array 객체 프로퍼티 : length
for(var i = 0; i < numbers3.length; i++) {
    console.log(numbers3[i])
}

// Array 객체 method 
// concat()
// 배열을 합쳐서 새로운 배열을 생성하는 메서드

var nums =[1,2,3];
var chars = ["a", "b", "c", "d"];

var numsChars = nums.concat(chars);
var charsNums = chars.concat(nums);
console.log(numsChars)
console.log(charsNums);

// join()
// 배열을 하나의 문자열로 합치는 메서드

var string1 = nums.join()
console.log("구분자 없이", string1)
var string2 = chars.join("/")
console.log("구분자 지정", string2)

// push(), unshift()
// 배열에 요소를 추가하는 메서드
// push : 배열 맨 끝에 요소 추가
// unshift : 배열 맨 앞에 요소 추가

var nums2 = nums.push(4, 5)
console.log(nums)

var nums3 = nums.unshift(0)
console.log(nums);

// pop(), shift()
// 배열에서 요소를 꺼내는 메서드

var popped1 = chars.pop();
console.log(chars, "빠진 요소 : ", popped1);
var shift = chars.shift();
console.log(chars, "빠진 요소 :", shift)

// splice()
// 원하는 위치에 요소를 추가/삭제하는 메서드

var number = [1,2,3,4,5]
var newNumber = number.splice(4)
console.log(number);
console.log(newNumber);

var newNumber2 = number.splice(2,1)
console.log(number)

var newNumber3 = number.splice(1,1,15)
console.log(number)

// slice()
// 기존 배열을 바꾸지 않으면서 요소를 꺼내는 메서드

var colors = ["red", "green", "blue", "white", "black"]
var colors2 = colors.slice(2);
console.log(colors2)

var colors3 = colors.slice(2,4)
console.log(colors3)


//---------------------------------------
// --------------Date 객체----------------
//---------------------------------------

// 날짜와 시간 정보를 나타내는 객체

// 현재 시각
var current = new Date();
// 특정 날짜
var date = new Date("2024-12-25")
// 특정 날짜 + 시간
var date2 = new Date("2024-12-25T18:00:00")

var date3 = new Date("Tue Nov 12 2024 11:32:00 GMT+0900 (대한민국 표준시)")

// get 메서드 : 날짜 / 시간 정보 가져오기

// 연도 가져오기
console.log(date.getFullYear())
// 0-11 사이의 숫자로 월 가져오기
console.log(date.getMonth())
// 1-31 사이의 숫자 일 가져오기
console.log(date.getDate())
// 0-6 사이의 숫자로 요일 표시
console.log(current.getDay())
// 시간 가져오기
console.log(current.getHours())
// 분 가져오기
console.log(current.getMinutes())
//초 가져오기 
console.log(current.getSeconds())
// 밀리초 가져오기 
console.log(current.getMilliseconds())

// set 메서드 : 날짜 / 시간 정보 설정하기


// 날짜/시간 형식바꾸기
console.log(current.toLocaleString())
console.log(current.toString())

//---------------------------------------
// --------------Math 객체----------------
//---------------------------------------

var math = Math.floor(Math.random() * 100 + 1)
console.log(math)


