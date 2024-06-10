const before = document.querySelector('.before');
const next = document.querySelector('.next');
const slider = document.querySelector('.slider');
const box = document.querySelector('.box');

next.addEventListener('click', function() {

    
    if (slider.style.marginLeft == '') {
        slider.style.marginLeft = '-300px';
        slider.style.transition = '1s';
    }

    if (slider.style.marginLeft == '-300px') {
        slider.style.marginLeft = '';
        slider.style.transition = '1s';
        slider.appendChild(slider.firstElementChild);
    }
    
});

before.addEventListener('click', function() {

    if (slider.style.marginLeft == '') {
        slider.style.marginLeft = '300px'
        slider.style.transition = '1s';
    }

    if (slider.style.marginLeft == '300px') {
        slider.style.marginLeft = '';
        slider.prepend(slider.lastElementChild);
    }
    
});