const carousel = document.querySelector(".second-carousel");
const leftButton = document.querySelector(".left-button");
const rightButton = document.querySelector(".right-button");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff, firstImgWidth;

// Clona las imágenes en el carrusel
const images = carousel.querySelectorAll("img");
const firstClone = images[0].cloneNode(true);
const lastClone = images[images.length - 1].cloneNode(true);
carousel.appendChild(firstClone);
carousel.insertBefore(lastClone, images[0]);

// Ajusta la posición inicial del carrusel
carousel.scrollLeft = firstClone.clientWidth;

const showHideIcons = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    leftButton.style.display = "block";
    rightButton.style.display = "block";
    if (carousel.scrollLeft <= 0) {
        carousel.scrollLeft = scrollWidth - firstImgWidth;
    } else if (carousel.scrollLeft >= scrollWidth) {
        carousel.scrollLeft = firstImgWidth;
    }
};


leftButton.addEventListener("click", () => {
    firstImgWidth = carousel.querySelector("img").clientWidth + 14;
    carousel.scrollLeft -= firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
});

rightButton.addEventListener("click", () => {
    firstImgWidth = carousel.querySelector("img").clientWidth + 14;
    carousel.scrollLeft += firstImgWidth;
    setTimeout(() => showHideIcons(), 60);
});

carousel.addEventListener("mousedown", (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
});

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
};

document.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
});

carousel.addEventListener("touchstart", (e) => {
    isDragStart = true;
    prevPageX = e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("touchmove", dragging);
carousel.addEventListener("touchend", () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
});

const autoSlide = () => {
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    positionDiff = Math.abs(positionDiff);

    if (carousel.scrollLeft > prevScrollLeft) {
        carousel.scrollLeft += positionDiff > scrollWidth / 3 ? firstImgWidth : -positionDiff;
    } else {
        carousel.scrollLeft -= positionDiff > scrollWidth / 3 ? firstImgWidth : -positionDiff;
    }
};




// const slider = document.querySelector("#slider");
// let sliderSection = document.querySelectorAll(".slider-section");
// let sliderSectionLast = sliderSection[sliderSection.length -1];

// const btnLeft = document.querySelector("#btn-left");
// const btnRight = document.querySelector("#btn-right");

// slider.insertAdjacentElement("afterbegin", sliderSectionLast);

// function next() {
//     let sliderSectionFirst = document.querySelectorAll(".slider-section")[0];
//     slider.style.marginLeft = "-200%";
//     slider.style.transition = "all 0.5s";
//     setTimeout(function(){
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("beforeend", sliderSectionFirst);
//         slider.style.marginLeft = "-100%";

//     }, 500)
// }

// function prev() {
//     let sliderSection = document.querySelectorAll (".slider-section");
//     let sliderSectionLast = sliderSection[sliderSection.length - 1];
//     slider.style.marginLeft = "0";
//     slider.style.transition = "all 0.5s";
//     setTimeout(function(){
//         slider.style.transition = "none";
//         slider.insertAdjacentElement("afterbegin", sliderSectionLast);
//         slider.style.marginLeft = "-100%";
//     }, 500);
// }

// btnRight.addEventListener("click", function(){
//     next();
// });

// btnLeft.addEventListener("click", function(){
//     prev();
// });

// setInterval (function(){
//     next(); 
// }, 5000);



