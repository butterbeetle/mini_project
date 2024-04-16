const nameList = ['채종민', '이준혁', '홍유나', '박초롱', '복예린', '김승회'];
const bg = document.querySelector('.background');
const btnList = document.querySelector('.btnbox');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


const getName = '이준혁';
const getListIndex = nameList.indexOf(getName);
let temp = '';
for (let i = 0; i < getListIndex; i++) {
    temp = nameList.shift();
    nameList.push(temp);
    const firstWrap = document.querySelector('.wrap:first-child');
    const parentContainer = firstWrap.parentNode;
    parentContainer.appendChild(firstWrap);
}
for (let i = 1; i < 7; i++) {
    btnList.children[i].innerText = nameList[i - 1];
}

//btnList.children[1].innerText
// wrap 이동방법(맨앞을 맨뒤로 -> 요청한 프로필이 제일 처음으로 나올때 까지)


// wrap 이동과 버튼 이름 변경도 동일하게 해야함
// nameList의 값을 변경시켜시키자



// 케러셀 초기모델
let vw = 0;
let index = 1;

btnList.children[index].style.background = '#eee';
prev.addEventListener('click', function () {
    if (vw === 0) {
        vw -= 500;
        index = 6;
    } else {
        index--;
        vw += 100;
    }
    [...btnList.children].forEach(e => e.style.background = 'white');
    btnList.children[index].style.background = '#eee';

    bg.style.transform = `translateX(${vw}vw)`;
})
next.addEventListener('click', function () {
    if (vw === -500) {
        index = 1;
        vw = 0;
    } else {
        index++;
        vw -= 100;
    }
    [...btnList.children].forEach(e => e.style.background = 'white');
    btnList.children[index].style.background = '#eee';
    bg.style.transform = `translateX(${vw}vw)`;
})

