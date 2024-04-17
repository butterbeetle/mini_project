const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const carouselSlide = document.querySelector(".carousel-slide");
const carousel = document.querySelectorAll(".carousel");

let index = 0;
const itemNumbers = carousel.length;
// 캐러셀 아이템 갯수 지정
console.log(itemNumbers);

function clickPrevBtn(e){
    if (index === 0) {
        return;
    } else if (index -= 1) {
        carouselSlide.style.transform = `translateX(-100vw)`;

    }
}

function clickNextBtn() {
    if (index === itemNumbers - 1) {
        return;
    } else if (index += 1) {
        carouselSlide.style.transform = `translateX(100vw)`;
    }

}

prevBtn.addEventListener("click", clickPrevBtn);
nextBtn.addEventListener("click", clickNextBtn);