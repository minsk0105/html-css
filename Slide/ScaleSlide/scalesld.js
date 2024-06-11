const prev = document.querySelector('.before');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
const box = document.querySelectorAll('.box');
const button = document.querySelector('.buttonbox');

const liWidth = box[0].clientWidth;
const sliderWidth = liWidth * box.length;
slider.style.width = `${sliderWidth}px`;

let sldnum = 0;
let translate = 0;

button.addEventListener('click', moveSlide);

function moveSlide(event) {
    event.preventDefault();
    if (event.target.className === 'next') {
        if (sldnum !== box.length -3) {
            translate -= liWidth;
            slider.style.transform = `translateX(${translate}px)`;
            sldnum += 1;
        }
    } else if (event.target.className === 'before') {
        if (sldnum !== 0) {
            translate += liWidth;
            slider.style.transform = `translateX(${translate}px)`;
            sldnum -= 1;
        }
    }
}