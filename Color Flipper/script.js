const colors = ["green", "red", "rgba(133, 122, 200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function () {
    const randomNumber = 2; // 0 - 3

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = color[randomNumber];
});