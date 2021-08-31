const rollingWrap = document.querySelector('.rolling-box');
for (let i = 0; i < 10; i++) {
    const rollingText = document.createElement('span');
    rollingWrap.appendChild(rollingText);
    rollingText.innerText = "세계인의 사랑을 받는 글로벌 기업으로 나아갑니다";
}
