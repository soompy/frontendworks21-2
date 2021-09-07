const rollingWrap = document.querySelector('.rolling-box');
for (let i = 0; i < 10; i++) {
    const rollingText = document.createElement('span');
    rollingWrap.appendChild(rollingText);
    rollingText.innerText = "세계인의 사랑을 받는 글로벌 기업으로 나아갑니다";
}



/*
* (1~3번째 ) .history-item에 호버 시 .bg > div에 bg bg-01 ~ 03클래스 넣어주기
* 필요한 것 .history-item 인덱스
*
* */

//
// let arr = ["bg-01", "bg-02", "bg-03"];
const historyList = document.querySelector('.history-item');
const bgItem = document.querySelector('.bg > div');
const currentClass = "bg-01";


bgItem.classList.add('currentClass');
for(i = 0; i < bgItem.length; i++) {
    historyList[i].onmouseover(function () {
        bgItem.classList.add('bg-0${i}');
    })
}
