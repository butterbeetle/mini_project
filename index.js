const bg = document.querySelector('.background');
const btnList = document.querySelector('.btnbox');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
let vw = 0;
let index = 1;

prev.addEventListener('click', function () {
    if (vw === 0) {
        vw -= 500;
        index = 6;
    } else {
        index--;
        vw += 100;
    }
    [...btnList.children].forEach(e=>e.style.background = 'white');
    btnList.children[index].style.background = '#eee';
    
    bg.style.transform = `translateX(${vw}vw)`;
})
next.addEventListener('click', function () {
    if(vw === -500){
        index = 1;
        vw = 0;
    }else{
        index++;
        vw -= 100;
    }
    [...btnList.children].forEach(e=>e.style.background = 'white');
    btnList.children[index].style.background = '#eee';
    bg.style.transform = `translateX(${vw}vw)`;
})

