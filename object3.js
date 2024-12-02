// DOM (문서객체모델)
// 자바스크립트를 이용하여 웹 문서에 접근하고 제어할 수 있도록 객체를 사용해 웹 문서를 체계적으로 정리하는 방법

// 1. 모든 HTML 태그는 요소(element) 노드입니다.
// 2. HTML에서 사용하는 텍스트 내용은 자식 노드인 텍스트(text) 노드입니다.
// 3. HTML 태그에 있는 속성은 자식 노드인 속성(attribute) 노드입니다.
// 4. 주석은 주석(comment) 노드입니다.

// getElementById
// 요소명.getElementsById("id명")
var box = document.getElementById("box")
//getElementsByClassName
document.getElementsByClassName("box2")

//getElementsByTagName
document.getElementsByTagName("div")

//querySelector(), querySelectorAll()
document.querySelector("#box")
document.querySelectorAll(".box2")

// getAttribute(), setAttribute()
document.querySelector("#box").getAttribute("src")

// -- 프로퍼티 --

//innerText, innerHTML
document.getElementById("box").innerHTML = "Hi"



// 이벤트 처리기

// 함수 직접 연결
// var boxDiv = document.querySelector(".box2")
// boxDiv.onclick = function() {
//     alert("이미지를 클릭했습니다")
// }

// 함수 이름을 사용해 연결
var boxDiv = document.querySelector(".box2")
// boxDiv.onclick = imageClicked;

// function imageClicked() {
//     alert("이미지를 클릭했습니다")
// }


// addEventListener

boxDiv.addEventListener("mouseover", changeText);
boxDiv.addEventListener("mouseout", originText);

function changeText() {
    boxDiv.innerHTML  = "Hi"
    boxDiv.style.backgroundColor = "blue"
}

function originText() {
    boxDiv.innerHTML  = ""
    boxDiv.style.backgroundColor = "beige"
}

// createElement
// 새로운 요소 추가
var newDiv = document.createElement(div);

//appendChild

boxDiv.appendChild(newDiv)

boxDiv.removeChild(newDiv)

