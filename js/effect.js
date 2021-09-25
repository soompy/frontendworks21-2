// 스크롤시 헤더에 색상 클래스가 추가된다.
let scrollpos = window.scrollY
const header = document.querySelector("header")
const header_height = header.offsetHeight

const add_class_on_scroll = () => header.classList.add("bg-header")
const remove_class_on_scroll = () => header.classList.remove("bg-header")

window.addEventListener('scroll', function() {
    scrollpos = window.scrollY;

    if (scrollpos > header_height) { add_class_on_scroll() }
    else { remove_class_on_scroll() }

    console.log(scrollpos)
})


// 텍스트 반복 생성
const rollingWrap = document.querySelector('.rolling-box');
for (let i = 0; i < 20; i++) {
    const rollingText = document.createElement('span');
    rollingWrap.appendChild(rollingText);
    rollingText.innerText = "세계인의 사랑을 받는 글로벌 기업으로 나아갑니다!";
}


// .depth1_title에 호버, 포커스시 각각의 .depth2가 노출
const depth1Title = document.querySelectorAll('.depth1_title');
function getClicked () {
    this.classList.add('active');
}
function offClicked () {
    this.classList.remove('active');
}
// depth1Title.firstChild.classList.add('active');
depth1Title.forEach(li => li.addEventListener('mouseover', getClicked));
depth1Title.forEach(li => li.addEventListener('mouseout', offClicked));




/*
* (1~3번째 ) .history-item에 호버 시 .history-bg에 bg bg-01 ~ 03클래스 넣어주기
* 필요한 것 .history-item 인덱스
*
* */

/*
* .bgs1 .bgs2 .bgs3에 마우스오버 시 .bg01 .bg02 .bg03에 show클래스 넣어주기 마우스아웃 시 show 클래스 제거,
  처음 상태는 .bg01에 show 클래스가 들어가 있는 상태
*/


const bg1 = document.querySelector('.bgs01');
const bg2 = document.querySelector('.bgs02');
const bg3 = document.querySelector('.bgs03');

const historyBg1 = document.querySelector('.bg01');
const historyBg2 = document.querySelector('.bg02');
const historyBg3 = document.querySelector('.bg03');



bg1.addEventListener('mouseover', (e) => {
    historyBg1.classList.add('show');
})
bg2.addEventListener('mouseover', (e) => {
    historyBg2.classList.add('show');
})
bg3.addEventListener('mouseover', (e) => {
    historyBg3.classList.add('show');
})

bg1.addEventListener('mouseout', (e) => {
    historyBg1.classList.remove('show');
})
bg2.addEventListener('mouseout', (e) => {
    historyBg2.classList.remove('show');
})
bg3.addEventListener('mouseout', (e) => {
    historyBg3.classList.remove('show');
})


// const imgBg = document.querySelectorAll('.imgBg');
// const item = document.querySelectorAll('.history-item');

// for(var i = 0; i < item.length; i++){
//     item[i].addEventListener('mouseover', function(event) {
//       imgBg[i].classList.add('show');
//     });
// }


// for(var i = 0; i < item.length; i++){
//     item[i].addEventListener('mouseout', function(event) {
//       imgBg[i].classList.remove('show');
//     });
// }

// var listItems = document.querySelectorAll('.history-item');
// var img = document.querySelectorAll('.imgBg');

// for(var i = 0; i < listItems.length; i++){
//     listItems[i].addEventListener('click', function(event) {
//       img[i].classList.toggle('show');
//     });
// }

// foreach
// https://yuddomack.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Array-forEach
// https://bigtop.tistory.com/58
