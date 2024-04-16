const bg = document.querySelector('.background');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let vw = 0;

prev.addEventListener('click',function () {
    vw === 0 ? vw -= 500 : vw += 100;

    bg.style.transform = `translateX(${vw}vw)`;
})
next.addEventListener('click',function () {
    vw === -500 ? vw = 0 : vw -= 100;
    bg.style.transform = `translateX(${vw}vw)`;
})